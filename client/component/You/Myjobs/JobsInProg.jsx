

import React from "react";
import axios from "axios";
import Progress from "./Progress.jsx"
// import "../style/Component/Adds.css";

class JobsInProg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     data : []
    };
    this.getJobiProg = this.getJobiProg.bind(this)
    // this.clickHandler = this.clickHandler.bind(this);
  }


  //querry data

  getJobiProg(){
    axios.get("/Task/findProg").then((response) => {
      if (this.state.data.length !== response.data.length) {
        this.setState({ data: response.data });
      }
      return;
    });
  }

  render() {
    this.getJobiProg();
    return (
      <div>
   {this.state.data.map((dat,i) => <Progress dat={this.state.data} />)} 
    </div>
    );
  }
}

export default JobsInProg;