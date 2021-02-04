import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS

//PERSONAL COMPONENTS IMPORTS
import Globe from "../../__COMPONENTS/HomePage/Globe/Globe";
import Impagination from "../../__COMPONENTS/__MAIN/3.Impagination/Impagination";
import JobsList from "../../__COMPONENTS/HomePage/JobsList/JobsList";
import DetailSection from "../../__COMPONENTS/HomePage/DetailsSection/DetailSection";
//STYLE
import "./HomePage.scss";

const mapStateToProps = (state) => state;

class HomePage extends PureComponent {
  state = {
    page: null,
    currentPage: 0,
    countPage: 1,
    job: null,
  };

  getJob = async (id, job) => {
    let jobSelected = job;
    this.setState({ job: jobSelected });
    this.props.getJobId(id);
  };

  navigatePage = (e) => {
    let id = e.currentTarget.id,
      results = this.props.search.chunkResults,
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
    let results = this.props.search.chunkResults;
    if (results) {
      let page = results[this.state.currentPage];
      this.setState({ page: page, countPage: results.length });
    }
    console.log(this.props.search);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search.chunkResults !== this.props.search.chunkResults) {
      let results = this.props.search.chunkResults,
        page = results[this.state.currentPage];
      this.setState({ page: page, countPage: results.length });
      console.log(this.props.search);
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
            <Impagination
              results={this.props.search.chunkResults}
              navigate={this.navigatePage}
              currentPage={parseInt(this.state.currentPage)}
            />
            <JobsList page={this.state.page} getJob={this.getJob} />
          </div>
        </div>
        <DetailSection job={this.state.job} />
      </div>
    );
  }
}
export default connect(mapStateToProps)(HomePage);
