//MAIN IMPORTS
import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";

//UTILITIES IMPORTS
import { getJobsList } from "../../../UTILITIES";

//STYLE
import "./Navbar.scss";

class Navbar extends PureComponent {
  search = async (e) => {
    if (e.keyCode === 13) {
      //   console.log(this.props.state);
      let query = `/search=${this.props.state.search}`;
      let result = await getJobsList(query);
      console.log(result);
    } else {
      let searching = e.currentTarget.value;
      this.props.search(searching);
    }
  };

  searchByDescriptions = (e) => {
    if (e.keyCode === 13) {
      //   console.log(this.props.state);
    } else {
      let searching = { description: "", location: "" };
      this.props.search(searching);
    }
  };

  searchByLocations = (e) => {
    if (e.keyCode === 13) {
      //   console.log(this.props.state);
    } else {
      let searching = {
        lat: "",
        long: "",
      };
      this.props.search(searching);
    }
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
            value={this.props.state}
          />
          <i className="fas fa-search"></i>
        </div>
        <ul className="nav-menu">
          <li></li>
        </ul>
      </nav>
    );
  }
}
export default withRouter(Navbar);
