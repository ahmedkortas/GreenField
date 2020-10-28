import React from "react";
import axios from "axios";
import Data from "./Dummy_DATA.json";
import "../style/Component/Adds.css"



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
      <div className="feed">
      <ul>
        <li className="feed-list-item">
          <div className="feed-list-item-title">Task title.</div><br></br>        
          <span className="feed-list-item-description">Task description will be here</span>
          <span  className="feed-list-item-poster">Poster contact will be here</span><br></br><br></br>
          <div ><span  className="feed-list-item-price">Price will be here</span></div><br></br>
         <div className="c">
          <button className="apply">Apply for this!</button></div>
        </li>
        </ul>
        </div>
    )
  }
}

export default Adds;
