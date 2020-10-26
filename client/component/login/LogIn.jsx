import React from "react";
import SignIn from "./login/SignIn.jsx.js";
import SignUP from "./login/SignUp.jsx.js";

class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view:false}
        this.handleOnClick=this.handleOnClick.bind(this);
    }

    handleOnClick (){
      this.setState({view:true });
      
    }
 
    render() {
    return (<div>{this.state.view===false ? <SignIn handleOnClick={this.handleOnClick}/> :<SignUP/>}</div>);
    }
  }
  export default LogIn;