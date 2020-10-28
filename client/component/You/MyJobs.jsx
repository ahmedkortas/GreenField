import React from "react";
import Appliedjob from "./Myjobs/AppliedJobs.jsx";
import JobInProgress from "./Myjobs/JobsInProg.jsx";

class MyJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "home" };
    this.onClick = this.onClick.bind(this);
    this.goBack= this.goBack.bind(this);
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
            <button onClick={this.onClick}>Applied Job</button>
            <button onClick={this.onClick}>Job In Progress</button>
            <button onClick={this.props.goBack}> go Back</button>
          </div>
        ) : this.state.view === "Applied Job" ? (
          <Appliedjob goBack={this.goBack}/>
        ) : this.state.view === "Job In Progress" ? (
          <JobInProgress goBack={this.goBack}/>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default MyJobs;
