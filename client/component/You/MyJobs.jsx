import React from "react";
import AppliedJob from "./Myjobs/AppliedJob.jsx";
import JobInProgress from "./Myjobs/JobsInProg.jsx";
import axios from "axios";

class MyJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "home", data: [] };
    this.onClick = this.onClick.bind(this);
    this.goBack = this.goBack.bind(this);
    this.getJobiProg = this.getJobiProg.bind(this);
  }
  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }
  goBack() {
    this.setState({ view: "home" });
  }

  getJobiProg() {
    console.log("hey");
    let obj = {
      employeeEmail: localStorage.getItem("currentUser"),
    };
    axios.post("/Task/findProg", obj).then((response) => {
      if (this.state.data.length !== response.data.length) {
        console.log(response.data);
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.getJobiProg();
    console.log("gata3helou", this.state.data);
    console.log(this.state.view);
    return (
      <div>
        <button onClick={this.props.goBack}> Go Back</button>
        <div>
          <AppliedJob goBack={this.goBack} />
          <div>
            {this.state.data.map((element, index) => {
              return (
                <JobInProgress
                  goBack={this.goBack}
                  data={element}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <button onClick={this.props.goBack}> Go Back</button>
      </div>
    );
  }
}

export default MyJobs;
