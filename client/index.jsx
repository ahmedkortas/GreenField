import React from "react";
import ReactDom from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.setState({ view: e.target.innerHTML });
  }

  render() {
    return (
      <div className="header">
        <ul>
          <li>
            <a onClick={this.onClick}>Home</a>
          </li>
          <li>
            <a onClick={this.onClick}>Put</a>
          </li>
          <li>
            <a onClick={this.onClick}>Adds</a>
          </li>
          <li>
            <a onClick={this.onClick}>Your offers</a>
          </li>
          <li>
            <a onClick={this.onClick}>Login</a>
          </li>
        </ul>
      </div>
    );
  }
}

ReactDom.render(<App></App>, document.getElementById("app"));
