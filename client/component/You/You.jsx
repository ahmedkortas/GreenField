import React from "react";
import MyJobs from "./MyJobs.jsx";
import MyOffers from "./MyOffers.jsx";

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
            <button onClick={this.onClick}>My Jobs</button>
            <button onClick={this.onClick}>My offers</button>
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
