import React from "react";
import MyJobs from "./MyJobs.jsx";
import MyOffers from "./MyOffers.jsx";
import "../style/Component/You.css"

class You extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "home" };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }

  render() {
    console.log(this.state.view);
    return (
      <div>
        {this.state.view === "home" ? (
          <div>
            <button className="y1" onClick={this.onClick}>My Jobs</button>
            <button className="y2" onClick={this.onClick}>My offers</button>
          </div>
        ) : this.state.view === "My Jobs" ? (
          <MyJobs />
        ) : this.state.view === "My offers" ? (
          <MyOffers />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default You;
