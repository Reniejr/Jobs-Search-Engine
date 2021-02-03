import React, { PureComponent } from "react";
import { getJobsList } from "../../UTILITIES";

//STYLE
import "./Detail.scss";

export default class Detail extends PureComponent {
  state = {
    job: null,
  };

  componentDidMount = async () => {
    let id = this.props.match.params.jobId;
    let query = `/positions/${id}.json`;
    let result = await getJobsList(query);
    // console.log(result);
    this.setState({ job: result });
  };

  render() {
    // console.log(this.props);
    return (
      <div className="detail-container">
        {this.state.job ? (
          <div className="detail">
            <h1>{this.state.job.title}</h1>
            <p>{this.state.job.company}</p>
            <p
              dangerouslySetInnerHTML={{ __html: this.state.job.description }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: this.state.job.how_to_apply }}
            ></p>
          </div>
        ) : (
          <p>No Job</p>
        )}
      </div>
    );
  }
}
