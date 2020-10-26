import React from "react";
import SignIn from "./login/SignIn.jsx.js";
import SignUP from "./login/SignUp.jsx.js";

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view:false}
    }
    render() {
    return (<div>{this.state.view===false ? <SignIn/> :<SignUP/>}</div>);
    }
  }
  export default LogIn;