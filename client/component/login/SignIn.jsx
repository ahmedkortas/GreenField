import React from "react";
import "./SignIn.css"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <form >
          <input className="i1" type="email" name="email" placeholder="email" required />
          <br></br>
          <input className="i2"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <br></br>
          <div className="btn0">
          <span  onClick={this.props.handleOnClick}>
            No Korfi Account/Create Account
          </span></div>
          <button className="btn" type="submit" name="SignIn">
            SignIn{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default SignIn;
