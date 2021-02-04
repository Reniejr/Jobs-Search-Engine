import React, { PureComponent } from "react";

//STYLE
import "./DetailSection.scss";

export default class DetailSection extends PureComponent {
  render() {
    const { job } = this.props;
    return (
      <div className="detail-section" id="detail-section">
        {job ? (
          <div className="details">
            <div className="header">
              <img src={job.company_logo} alt="" />
              <div className="title">
                <h2>{job.title}</h2>
                <span>
                  Company: <span>{job.company}</span>
                </span>{" "}
                <span>
                  Location: <span>{job.location}</span>
                </span>
              </div>
            </div>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
