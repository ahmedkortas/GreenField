import React from "react";
import axios from "axios";
import JobPend from "./Jobpend.jsx";


class AppliedJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.query();
    this.query = this.query.bind(this);
  }

  //querry data
  query() {
    let obj = { employeeEmail: localStorage.getItem("currentUser") };
    console.log(obj);
    axios.post("/Task/jobApplication/employee", obj).then((response) => {
      if (this.state.data.length !== response.data.length) {
        console.log(response, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        this.setState({ data: response.data });
      }
      return;
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map((dat, i) => (
          <JobPend key={i} data={dat} clickHandler={this.clickHandler} />
        ))}
      </div>
    );
  }
}

export default AppliedJob;
