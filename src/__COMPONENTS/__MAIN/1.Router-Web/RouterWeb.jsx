//MAIN IMPORTS
import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
//UTILITIES IMPORTS
import { getJobsList, chunkArray } from "../../../UTILITIES";
//PERSONAL COMPONENTS IMPORT
import HomePage from "../../../__PAGES/1.HomePage/HomePage";
import Detail from "../../../__PAGES/2.Details/Detail";
import Navbar from "../2.Navbar/Navbar";
//STYLE
import "./RouterWeb.scss";

export default class RouterWeb extends PureComponent {
  state = {
    search: "",
    byDesc: {
      description: "",
      location: "",
    },
    byLocation: {
      lat: "",
      long: "",
    },
    results: null,
    jobId: null,
    job: null,
  };

  search = async (e) => {
    if (e.keyCode === 13) {
      //   console.log(this.props.state);
      let query = `/positions.json?search=${this.state.search}`;
      let result = await getJobsList(query);
      if (result.length > 5) {
        result = chunkArray(result, 5);
      }
      //   console.log(result);
      this.setState({ results: result });
    } else {
      let searching = e.currentTarget.value;
      this.setState({ search: searching });
    }
  };

  searchByDescriptions = async (byDesc) => {
    let query = `/positions.json?description=${byDesc.description}&location=${byDesc.location}`;
    let result = await getJobsList(query);
    this.setState({ results: result });
  };

  searchByLocations = (e) => {
    if (e.keyCode === 13) {
      //   console.log(this.props.state);
    } else {
      let searching = {
        lat: "",
        long: "",
      };
      let currentId = e.currentTarget.id;
      searching[currentId] = e.currentTarget.value;
      this.props.search(searching);
    }
  };

  getJobId = (jobId) => {
    this.setState({ jobId: jobId });
  };

  render() {
    return (
      <div id="router-web">
        <Navbar
          search={this.search}
          searchByLocations={this.searchByLocations}
          searchByDescriptions={this.searchByDescriptions}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage
                {...props}
                results={this.state.results}
                getJobId={this.getJobId}
              />
            )}
          />
          <Route
            path="/jobs/:jobId"
            exact
            render={(props) => <Detail {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

// import React from "react";
// import { connect } from "react-redux";
// import { Switch, Route } from "react-router-dom";
// //PERSONAL COMPONENTS IMPORT
// import HomePage from "../../../__PAGES/1.HomePage/HomePage";
// import Navbar from "../2.Navbar/Navbar";
// //STYLE
// import "./RouterWeb.scss";

// //STATE TO PROPS
// const mapStateToProps = (state) => ({
//   search: state.search,
//   description: state.description,
//   location: state.location,
//   lat: state.lat,
//   long: state.long,
// });

// //DISPATCH
// const mapDispatchToProps = (dispatch) => ({
//   searchEngine: (searching) =>
//     dispatch({
//       type: "SEARCH_ENGINE",
//       payload: {
//         search: searching,
//       },
//     }),
//   searchDescription: (searching) =>
//     dispatch({
//       type: "SEARCH_DESCRIPTION",
//       payload: {
//         description: searching.description,
//         location: searching.location,
//       },
//     }),
//   searchLocation: (searching) =>
//     dispatch({
//       type: "SEARCH_LOCATION",
//       payload: {
//         lat: searching.lat,
//         long: searching.long,
//       },
//     }),
// });

// function RouterWeb({
//   search,
//   description,
//   location,
//   lat,
//   long,
//   searchEngine,
//   searchDescription,
//   searchLocation,
// }) {
//   return (
//     <div id="router-web">
//       <Navbar
//         search={searchEngine}
//         searching={search}
//         description={description}
//         location={location}
//         lat={lat}
//         long={long}
//         searchDescription={searchDescription}
//         searchLocation={searchLocation}
//       />
//       <Switch>
//         <Route path="/" exact render={(props) => <HomePage {...props} />} />
//       </Switch>
//     </div>
//   );
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RouterWeb);
