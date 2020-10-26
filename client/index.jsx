import React from "react";
import ReactDom from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <div className="header">
    <ul>
      <li><a>Home</a></li>
      <li><a>Put</a></li>
      <li><a>Adds</a></li>
      <li><a>Your offers</a></li>
      <li><a>Login</a></li>
    </ul>
    </div>
    
   
  )
  
}
}



ReactDom.render(<App></App>, document.getElementById("app"));
