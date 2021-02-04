import React, { PureComponent } from "react";

//STYLE
import "./Loader.scss";

export default class Loader extends PureComponent {
  render() {
    return (
      <div className="job-loader">
        <div className="slider">
          <div className="slide-container">
            <img src="./assets/1.png" alt="" />
            <img src="./assets/2.png" alt="" />
            <img src="./assets/3.png" alt="" />
            <img src="./assets/4.png" alt="" />
            <img src="./assets/5.png" alt="" />
            <img src="./assets/6.png" alt="" />
          </div>
          <p>...Looking for Jobs...</p>
        </div>
      </div>
    );
  }
}
