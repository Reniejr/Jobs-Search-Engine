//MAIN IMPORTS
import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getJobsList } from "../../../UTILITIES";

//STYLE
import "./Navbar.scss";

const mapStateToProps = (state) => state.search;

const mapDispatchToProps = (dispatch) => ({
  searchEngine: (search) =>
    dispatch({
      type: "SEARCH_ENGINE",
      payload: search,
    }),
});

class Navbar extends PureComponent {
  state = {
    search: null,
    byDesc: {
      description: "",
      location: "",
    },
    filters: false,
  };

  searching = async (e) => {
    let results,
      searchQuery,
      byDesc = { ...this.state.byDesc },
      id = e.currentTarget.id;
    if (e.keyCode === 13) {
      results = await getJobsList(this.state.search);
    } else {
      switch (id) {
        case "description":
          byDesc[id] = e.currentTarget.value;
          searchQuery = `/positions.json?description=${byDesc.description}&location=${byDesc.location}`;
          break;
        case "location":
          byDesc[id] = e.currentTarget.value;
          searchQuery = `/positions.json?description=${byDesc.description}&location=${byDesc.location}`;
          break;
        default:
          searchQuery = `/positions.json?search=${e.currentTarget.value}`;
          break;
      }
      this.setState({ search: searchQuery, byDesc });
    }
    return results;
  };

  showFilters = () => {
    this.setState({ filters: !this.state.filters });
  };

  render() {
    console.log(this.props);
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
            onKeyDown={this.searching}
            onChange={this.searching}
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
              onKeyDown={this.searching}
              onChange={this.searching}
            />
            <input
              type="text"
              id="location"
              placeholder="Location"
              onKeyDown={this.searching}
              onChange={this.searching}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
