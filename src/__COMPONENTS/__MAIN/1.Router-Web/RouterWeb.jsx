// //MAIN IMPORTS
// import React, { PureComponent } from "react";
// import { Switch, Route } from "react-router-dom";
// //PERSONAL COMPONENTS IMPORT
// import HomePage from "../../../__PAGES/1.HomePage/HomePage";
// import Navbar from "../2.Navbar/Navbar";
// //STYLE
// import "./RouterWeb.scss";

// export default class RouterWeb extends PureComponent {
//   render() {
//     return (
//       <div id="router-web">
//         <Navbar />
//         <Switch>
//           <Route path="/" exact render={(props) => <HomePage {...props} />} />
//         </Switch>
//       </div>
//     );
//   }
// }

import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
//PERSONAL COMPONENTS IMPORT
import HomePage from "../../../__PAGES/1.HomePage/HomePage";
import Navbar from "../2.Navbar/Navbar";
//STYLE
import "./RouterWeb.scss";

//STATE TO PROPS
const mapStateToProps = (state) => ({
  search: state.search,
  description: state.description,
  location: state.location,
  lat: state.lat,
  long: state.long,
});

//DISPATCH
const mapDispatchToProps = (dispatch) => ({
  searchEngine: (searching) =>
    dispatch({
      type: "SEARCH_ENGINE",
      payload: {
        search: searching,
      },
    }),
  searchDescription: (searching) =>
    dispatch({
      type: "SEARCH_DESCRIPTION",
      payload: {
        description: searching.description,
        location: searching.location,
      },
    }),
  searchLocation: (searching) =>
    dispatch({
      type: "SEARCH_LOCATION",
      payload: {
        lat: searching.lat,
        long: searching.long,
      },
    }),
});

function RouterWeb({
  search,
  description,
  location,
  lat,
  long,
  searchEngine,
  searchDescription,
  searchLocation,
}) {
  return (
    <div id="router-web">
      <Navbar
        search={searchEngine}
        state={search}
        searchDescription={searchDescription}
        searchLocation={searchLocation}
      />
      <Switch>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
      </Switch>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(RouterWeb);
