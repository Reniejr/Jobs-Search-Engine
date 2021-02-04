//MAIN IMPORTS
import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

//UTILITIES IMPORTS
import { getJobsList, chunkArray } from "../../../UTILITIES";

//STYLE
import "./Navbar.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  search: (query) =>
    dispatch(async (dispatch, getState) => {
      let results = await getJobsList(query);
      let chunkResults = chunkArray(results, 5);
      // console.log(results);
      dispatch({
        type: "SEARCH_ENGINE",
        payload: { results: results, chunkResults: chunkResults },
      });
    }),
  getFavs: () =>
    dispatch((dispatch, getState) => {
      let favsList = [...getState().favs.favourites];
      console.log(favsList);
      let chunkResults = chunkArray(favsList, 5);
      console.log(chunkResults);
      dispatch({
        type: "GET_FAVS",
        payload: chunkResults,
      });
    }),
});

class Navbar extends PureComponent {
  state = {
    search: `/positions.json`,
    byDesc: {
      description: "",
      location: "",
    },
    filters: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.search(this.state.search);
    }, 5000);
  }

  searching = (e) => {
    let searchQuery,
      byDesc = { ...this.state.byDesc },
      id = e.currentTarget.id;
    if (e.keyCode === 13) {
      this.props.search(this.state.search);
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
  };

  showFilters = () => {
    this.setState({ filters: !this.state.filters });
  };

  render() {
    // console.log(this.props);
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
        <button onClick={() => this.props.getFavs()}>Show Favourites</button>
      </nav>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
