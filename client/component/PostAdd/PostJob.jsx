import React from "react";
import axios from "axios";
import "../style/Component/PostJob.css";

class PostJob extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
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
    this.setState({ title: e.target.value });
  }

  handleContact(e) {
    this.setState({ contact: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: Number(e.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    let userEmail = localStorage.getItem("currentUser");
    if (userEmail === undefined || userEmail === null) {
      alert("must login to be able to post thanks ");
      location.reload();
      return;
    }
    let obj = {};
    obj.title = this.state.title;
    obj.providerEmail = userEmail;
    obj.description = this.state.description;
    obj.contact = this.state.contact;
    obj.price = this.state.price;

    axios.post("/Task/create", obj).then((res) => console.log(res.data));
    this.props.click();
    console.log(obj);
  }

  render() {
    return (
      <div>
        <div>
          <h2 className="t">Post your Task</h2>
          <div className="inputs">
            <form>
              <i id="icon1" className="material-icons prefix">mail</i>
              <input
                className="i1"
                type="text"
                placeholder="task title"
                onChange={this.handleTitle}
              ></input>
              <i id="icon2" className="material-icons prefix">contact</i>
              <input
                className="i2"
                type="text"
                placeholder="contact"
                onChange={this.handleContact}
              ></input>
              <i id="icon3" className="material-icons prefix">text</i>
              <textarea
                className="i3"
                onChange={this.handleDescription}
                placeholder={"your text"}
              ></textarea>
              <i id="icon4" className="material-icons prefix">attach_money</i>
              <input
                className="i4"
                type="number"
                placeholder="price"
                onChange={this.handlePrice}
              ></input>
            </form>
            <div>
              <button className="bc" onClick={this.handleSubmit}>
                Share Task
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostJob;
