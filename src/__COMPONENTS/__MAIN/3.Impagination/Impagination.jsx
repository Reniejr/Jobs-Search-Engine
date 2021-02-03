import React, { PureComponent } from "react";

//STYLE
import "./Impagination.scss";

export default class Impagination extends PureComponent {
  render() {
    const { results, navigate } = this.props;
    return (
      <div
        className="impagination"
        style={{ display: results ? "block" : "none" }}
      >
        <button onClick={(e) => navigate(e)} id="prev">
          prev
        </button>
        {results ? (
          results.map((result, index) => {
            return (
              <button onClick={(e) => navigate(e)} value={index} key={index}>
                {index + 1}
              </button>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
