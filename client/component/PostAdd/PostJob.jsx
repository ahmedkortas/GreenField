import React from "react";
import "./PostJob.css"

class PostJob extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      genre: "",
      description: "",
      price: 0,
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleGenre(e) {
    this.setState({ genre: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.description });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.click();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Post your Task</h2>
          <form>
            <input className="i1" type="text" onChange={this.handleTitle}></input>
            <input className="i2" type="text" onChange={this.handleGenre}></input>
            <textarea className="i3"
              onChange={this.handleDescription}
              placeholder={"your text"}
            ></textarea>
            <input className="i4" type="number" onChange={this.handlePrice}></input>
            <button className="btn1" onClick={this.handleSubmit}>Share Task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostJob;
