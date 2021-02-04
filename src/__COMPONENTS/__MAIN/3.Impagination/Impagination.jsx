import React, { PureComponent } from "react";

//STYLE
import "./Impagination.scss";

export default class Impagination extends PureComponent {
  render() {
    const { results, navigate, currentPage } = this.props;
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
              <button
                onClick={(e) => navigate(e)}
                value={index}
                key={index}
                style={{
                  backgroundColor:
                    currentPage === index ? "#59d7f3" : "transparent",
                }}
              >
                {index + 1}
              </button>
            );
          })
        ) : (
          <p></p>
        )}
        <button onClick={(e) => navigate(e)} id="next">
          next
        </button>
      </div>
    );
  }
}
