import React from "react";
import axios from 'axios';


class PostJob extends React.Component {
  constructor() {
    super();
    this.state = {
      adress: "",
      contact: "",
      description: "",
      price: 0,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({ adress: e.target.value });
  }

  handleContact(e) {
    this.setState({ contact: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.description });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {};
      obj.adress= this.state.adress;
      obj.description = this.state.description;
      obj.contact = this.state.contact;
      obj.price = this.state.price;
      axios.post("/", obj).then((res) => console.log(res.data));
    this.props.click();
  }


  // clickHandler() {
  //   let obj = {};
  //   obj.adress= this.state.adress;
  //   obj.description = this.state.description;
  //   obj.contact = this.state.contact;
  //   obj.price = this.state.price;
  //   axio.post("/", obj).then((res) => console.log(res.data));
  // }

  render() {
    return (
      <div>
        <div>
          <h2>Post your Task</h2>
          <form>
            <input type="text" onChange={this.handleTitle} placeholder="adress"></input>
            <input type="text" onChange={this.handleContact} placeholder="contact"></input>
            <textarea
              onChange={this.handleDescription}
              placeholder={"your text"}
            ></textarea>
            <input type="number" onChange={this.handlePrice}></input>
            <button onClick={this.handleSubmit}>Share Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostJob;
