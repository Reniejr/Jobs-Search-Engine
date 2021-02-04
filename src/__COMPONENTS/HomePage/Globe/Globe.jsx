import React, { PureComponent } from "react";
import { connect } from "react-redux";

//STYLE
import "./Globe.scss";

const mapStateToProps = (state) => state;

class Globe extends PureComponent {
  state = {
    location: {
      lat: 0,
      long: 0,
    },
  };

  componentDidUpdate(prevProps) {
    if (prevProps.job !== this.props.job) {
      let x = Math.floor(Math.random() * 50);
      let y = Math.floor(Math.random() * 50);
      this.setState({ location: { lat: x, long: y } });
    }
  }

  render() {
    let { job, animation } = this.props;
    return (
      <div className={`globe ${animation ? "" : "paused"}`}>
        <i
          className="fas fa-map-marker-alt"
          style={{
            top: `${this.state.location.lat}%`,
            left: `${this.state.location.long}%`,
          }}
        ></i>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Globe);
