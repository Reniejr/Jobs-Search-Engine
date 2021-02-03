//MAIN IMPORTS
import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";

//UTILITIES IMPORTS
import { getJobsList } from "../../../UTILITIES";

//STYLE
import "./Navbar.scss";

class Navbar extends PureComponent {
  //   search = async (e) => {
  //     if (e.keyCode === 13) {
  //       //   console.log(this.props.state);
  //       let query = `/positions.json?search=${this.props.state}`;
  //       let result = await getJobsList(query);
  //       //   console.log(result);
  //     } else {
  //       let searching = e.currentTarget.value;
  //       this.props.search(searching);
  //     }
  //   };

  //   searchByDescriptions = async (e) => {
  //     if (e.keyCode === 13) {
  //       let query = `/positions.json?description=${this.props.description}&location=${this.props.location}`;
  //       let result = await getJobsList(query);
  //       //   console.log(result);
  //       console.log(this.props);
  //     } else {
  //       let searching = { description: "", location: "" };
  //       let currentId = e.currentTarget.id;
  //       searching[currentId] = e.currentTarget.value;
  //       //   console.log(searching);
  //       this.props.searchDescription(searching);
  //     }
  //   };

  //   searchByLocations = (e) => {
  //     if (e.keyCode === 13) {
  //       //   console.log(this.props.state);
  //     } else {
  //       let searching = {
  //         lat: "",
  //         long: "",
  //       };
  //       let currentId = e.currentTarget.id;
  //       searching[currentId] = e.currentTarget.value;
  //       this.props.search(searching);
  //     }
  //   };

  state = {
    byDesc: {
      description: "",
      location: "",
    },
    byLocation: {
      lat: "",
      long: "",
    },
    filters: false,
  };

  search = (e) => {
    this.props.search(e);
  };

  searchByDescriptions = (e) => {
    if (e.keyCode === 13) {
      this.props.searchByDescriptions(this.state.byDesc);
    } else {
      let searching = { ...this.state.byDesc };
      let currentId = e.currentTarget.id;
      searching[currentId] = e.currentTarget.value;
      this.setState({ byDesc: searching });
    }
  };

  showFilters = () => {
    this.setState({ filters: !this.state.filters });
  };

  render() {
    // console.log(this.props.state);
    return (
      <nav>
        <div className="title">
          <img src="./assets/company.png" alt="" />
          <p>Jobs App</p>
        </div>
        <div className="search">
          <input
            type="text"
            id="search-bar"
            placeholder="Look for a job"
            onKeyDown={this.search}
            onChange={this.search}
            style={{ display: this.state.filters ? "none" : "inline-flex" }}
          />
          <i
            className="fas fa-caret-right"
            onClick={() => this.showFilters()}
          ></i>

          <div
            className="filters"
            style={{ display: this.state.filters ? "inline-flex" : "none" }}
          >
            <input
              type="text"
              id="description"
              placeholder="Description"
              onKeyDown={this.searchByDescriptions}
              onChange={this.searchByDescriptions}
            />
            <input
              type="text"
              id="location"
              placeholder="Location"
              onKeyDown={this.searchByDescriptions}
              onChange={this.searchByDescriptions}
            />
          </div>
          <i className="fas fa-search"></i>
        </div>
        {/* <ul className="nav-menu">
          <li></li>
        </ul> */}
      </nav>
    );
  }
}
export default withRouter(Navbar);
