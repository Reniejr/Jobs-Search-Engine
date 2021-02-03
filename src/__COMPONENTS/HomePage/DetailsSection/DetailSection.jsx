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
            {job.title}
            {job.company}
            {job.location}
            {job.description}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
