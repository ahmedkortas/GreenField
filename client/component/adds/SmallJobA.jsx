import React from "react";
import axios from "axios";
import "../style/Component/Adds.css"

class SmallJobA extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loge: localStorage.get("email"),
    // };
  }

  //querry data

  render() {
    return( 
    <div className="feed">
    <ul>
      <li className="feed-list-item">
        <span className="feed-list-item-title">{this.props.data.title}</span><br></br>        
        <p className="feed-list-item-description">{this.props.data.description}</p> <br></br><br></br>     
        <span  className="feed-list-item-poster">{this.props.data.contact}</span><br></br><br></br>
        <span  className="feed-list-item-price">{this.props.data.price}DT</span><br></br><br></br>
        <span  className="feed-list-item-poster">{this.props.data.address}</span>
        
      </li>
      </ul>
      <button>Apply for this!</button>
      </div>)
  }
}

export default SmallJobA;
