

import React from "react";
import axios from "axios";
import JobPend from "./Jobpend.jsx"
// import "../style/Component/Adds.css";

class AppliedJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    e.preventDefault();
    let obj = {
      description: this.props.data.description,
      contact: this.props.data.contact,
      address: this.props.data.address,
      price: this.props.data.price,
      providerEmail: this.props.data.providerEmail,
     
    };
    console.log(obj);
    axios.post("/Task/aplly", obj).then((res) => console.log(res));
  }
  //querry data
  query(){
      axios.get("/Task/jobApplication/employee").then((response) => {
    if (this.state.data.length !== response.data.length) {
      this.setState({ data: response.data });
    }
    return;
  });
}

  render() {
    return (
     <JobPend  clickHandler={this.clickHandler}/>
    );
  }
}

export default AppliedJob;
