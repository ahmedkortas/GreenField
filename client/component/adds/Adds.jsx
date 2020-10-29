import React from "react";
import axios from "axios";
<<<<<<< HEAD
=======

import SmallJobs from './SmallJobA.jsx';
>>>>>>> b4498418017850f8a450512492c6e667737225d7

import SmallJobs from "./SmallJobA.jsx";

class Adds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.querry = this.querry.bind(this);
  }

  querry() {
    axios.get("/Task/find").then((response) => {
      if (this.state.data.length !== response.data.length) {
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.querry();
    return (
      <div>
        {this.state.data.length === 0 ? (
          <div></div>
        ) : (
          this.state.data.map((data, i) => <SmallJobs key={i} data={data} />)
        )}
      </div>
    );
  }
}

export default Adds;
