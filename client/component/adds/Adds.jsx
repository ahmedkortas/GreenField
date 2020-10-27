import React from "react";
import axios from "axios";

class Adds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.querry = this.querry.bind(this);
  }

  querry() {
    axios.get("/api/Ads").then((response) => {
      if (this.state.data.length !== response.length) {
        console.log(response);
        // this.setState({ data: response });
      }
    });
  }

  render() {
    this.querry();
    return <div></div>;
  }
}

export default Adds;
