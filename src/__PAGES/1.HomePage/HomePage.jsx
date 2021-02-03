import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

//UTILITIES IMPORTS

//PERSONAL COMPONENTS IMPORTS
import Globe from "../../__COMPONENTS/HomePage/Globe/Globe";
import Impagination from "../../__COMPONENTS/__MAIN/3.Impagination/Impagination";
import JobsList from "../../__COMPONENTS/HomePage/JobsList/JobsList";
import DetailSection from "../../__COMPONENTS/HomePage/DetailsSection/DetailSection";
//STYLE
import "./HomePage.scss";

export default class HomePage extends PureComponent {
  state = {
    page: null,
    currentPage: 0,
    countPage: 1,
    job: null,
  };

  // getJobId = (id) => {
  //   this.props.getJobId(id);
  //   console.log(id);
  // };

  getJob = async (id, job) => {
    let jobSelected = job;
    this.setState({ job: jobSelected });
    this.props.getJobId(id);
  };

  navigatePage = (e) => {
    let id = e.currentTarget.id,
      results = this.props.results,
      page;
    switch (id) {
      case "prev":
        if (this.state.currentPage > 0) {
          page = results[this.state.currentPage - 1];
          this.setState({
            page: page,
            currentPage: this.state.currentPage - 1,
          });
        }
        break;
      case "next":
        if (this.state.currentPage < results.length) {
          page = results[this.state.currentPage + 1];
          this.setState({
            page: page,
            currentPage: this.state.currentPage + 1,
          });
        }
        break;
      default:
        page = results[e.currentTarget.value];
        this.setState({ page: page, currentPage: e.currentTarget.value });
        break;
    }
  };

  componentDidMount() {
    let results = this.props.results;
    if (results) {
      let page = results[this.state.currentPage];
      this.setState({ page: page, countPage: results.length });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.results !== this.props.results) {
      let results = this.props.results,
        page = results[this.state.currentPage];
      this.setState({ page: page, countPage: results.length });
    }
  }

  render() {
    let { results } = this.props;
    return (
      <div id="home-page">
        <div className="header">
          <div className="right-side">
            <Globe />
          </div>
          <div className="left-side">
            <Impagination results={results} navigate={this.navigatePage} />
            <JobsList page={this.state.page} getJob={this.getJob} />
          </div>
        </div>
        <DetailSection job={this.state.job} />
      </div>
    );
  }
}
