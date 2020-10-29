import React from "react";
import Done from "./MyOffers/Done.jsx";
import PendingJobs from "./MyOffers/Pending.jsx";

class MyOffers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.onClick = this.onClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }

  goBack() {
    this.setState({ view: "home" });
  }

  render() {
    console.log(this.state.view);
    return (
      <div>
        {this.state.view === "home" ? (
          <div>
            <button onClick={this.onClick}>Pending Jobs</button>
            <button onClick={this.onClick}>Done</button>
            <button onClick={this.props.goBack}> Go Back</button>
          </div>
        ) : this.state.view === "Pending Jobs" ? (
          <PendingJobs goBack={this.goBack} />
        ) : this.state.view === "Done" ? (
          <Done goBack={this.goBack} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default MyOffers;
