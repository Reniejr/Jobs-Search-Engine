import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link as Atag } from "react-scroll";
import Loader from "../../__MAIN/Loader/Loader";

//STYLE
import "./JobsList.scss";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  addFavourite: (job) =>
    dispatch(async (dispatch, getState) => {
      let favsList = getState().favs.favourites;
      console.log(favsList);
      if (favsList.filter((fav) => fav.id === job.id).length > 0) {
        dispatch({
          type: "REMOVE_FAV",
          payload: job,
        });
      } else {
        dispatch({
          type: "ADD_FAV",
          payload: job,
        });
      }
    }),
});

class JobsList extends PureComponent {
  render() {
    const { page, getJob } = this.props;
    return (
      <div className="job-section">
        {page ? (
          <ul className="jobs-list">
            {page.map((job) => {
              return (
                <li key={job.id}>
                  {/* <Atag
                    to="detail-section"
                    smooth={true}
                    onClick={() => getJob(job.id, job)}
                  > */}
                  <h6 onClick={() => getJob(job.id, job)}>{job.title}</h6>
                  {/* </Atag> */}
                  <span>
                    Company : <span>{job.company}</span>
                  </span>{" "}
                  <span>
                    Location : <span>{job.location}</span>
                  </span>
                  <p>
                    {job.id}
                    <i
                      className={`${
                        this.props.favs.favourites.filter(
                          (fav) => fav.id === job.id
                        ).length > 0
                          ? "fas"
                          : "far"
                      } fa-heart`}
                      onClick={() => this.props.addFavourite(job)}
                    ></i>
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
