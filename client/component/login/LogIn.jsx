import React from "react";
import SignIn from "./SignIn.jsx";
import SignUP from "./SignUp.jsx";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ view: true });
  }
  render() {
    return (
      <div>
        {this.state.view === false ? (
          <SignIn handleOnClick={this.handleOnClick} />
        ) : (
          <SignUP />
        )}
      </div>
    );
  }
}
export default LogIn;
