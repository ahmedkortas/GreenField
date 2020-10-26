import React from "react";
import SignIn from "./login/SignIn.jsx";
import SignUP from "./login/SignUp.jsx";

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