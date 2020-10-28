import React from "react";
import axios from "axios";
import Data from "./Dummy_DATA.json"



class Adds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.querry();
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
    
    return (
      <div>
      <ul>
        <li>
          <div>Task title.</div>        
          <span>Task description will be here</span>
          <span>Poster contact will be here</span>
          <div><span>Price will be here</span></div>
          <button>Apply for this!</button>
        </li>
        </ul>
        </div>
    )
  }
}

export default Adds;
