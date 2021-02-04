//MAIN IMPORTS
import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
//UTILITIES IMPORTS
import { getJobsList, chunkArray } from "../../../UTILITIES";
//PERSONAL COMPONENTS IMPORT
import HomePage from "../../../__PAGES/1.HomePage/HomePage";
import Detail from "../../../__PAGES/2.Details/Detail";
import Navbar from "../2.Navbar/Navbar";
//STYLE
import "./RouterWeb.scss";

const mapStateToProps = (state) => state;

class RouterWeb extends PureComponent {
  state = {
    results: null,
    jobId: null,
    job: null,
  };

  getJobId = (jobId) => {
    this.setState({ jobId: jobId });
  };

  render() {
    // console.log(this.props);
    return (
      <div id="router-web">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <HomePage
                // {...props}
                // results={this.state.results}
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

export default connect(mapStateToProps)(RouterWeb);
