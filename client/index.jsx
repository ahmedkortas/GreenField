import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
  }
  render() {
    return <div></div>;
  }
}

ReactDom.render(<App></App>, document.getElementById("app"));
