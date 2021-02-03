import React, { PureComponent } from "react";
import { Link as Atag } from "react-scroll";

//STYLE
import "./JobsList.scss";
export default class JobsList extends PureComponent {
  render() {
    const { page, getJob } = this.props;
    return (
      <ul className="jobs-list">
        {page ? (
          page.map((job) => {
            return (
              <li key={job.id}>
                <Atag
                  to="detail-section"
                  smooth={true}
                  onClick={() => getJob(job.id, job)}
                >
                  <h6>{job.title}</h6>
                  <span>
                    Company : <span>{job.company}</span>
                  </span>{" "}
                  <span>
                    Location : <span>{job.location}</span>
                  </span>
                  <p>{job.id}</p>
                </Atag>
              </li>
            );
          })
        ) : (
          <p>No results</p>
        )}
      </ul>
    );
  }
}
