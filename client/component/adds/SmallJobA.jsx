import React from "react";
import axios from "axios";
import "../style/Component/Adds.css";

class SmallJobA extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loge: localStorage.get("email"),
    // };
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
      employeeEmail: localStorage.getItem("currentUser"),
    };
    console.log(obj);
    axios.post("/Task/aplly", obj).then((res) => console.log(res));
  }
  //querry data

  render() {
    return( 
    <div className="feed">
    <ul>
      <li className="feed-list-item">
        <span className="feed-list-item-title">{this.props.data.title}</span><br></br><br></br>         
        <p className="feed-list-item-description">{this.props.data.description}</p> <br></br>     
        <span  className="feed-list-item-poster">{this.props.data.contact}</span><br></br><br></br>
        <span  className="feed-list-item-price"><strong> Earning  : </strong></span> <span style={{color : '#00e600', fontSize : "20px", fontWeight :'bold' }}>{this.props.data.price}DT</span>  <br></br><br></br>
        <span  className="feed-list-item-address"><strong>  Location :  {this.props.data.address}  </strong></span> <br></br><br></br> 
        <span><button  type="button" className="btn-primary">Apply here </button></span>
      </li>
      </ul>    
      </div>)
  }
}

export default SmallJobA;
