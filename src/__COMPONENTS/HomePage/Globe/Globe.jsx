import React, { PureComponent } from "react";

//STYLE
import "./Globe.scss";

export default class Globe extends PureComponent {
  render() {
    return (
      <div className="globe">
        <i
          className="fas fa-map-marker-alt"
          //   style={{ top: "37.3229978%", left: "122.03212823%" }}
        ></i>
      </div>
    );
  }
}
