import React from "react";

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
        <form>
          <input type="email" name="email" placeholder="email" required />
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <br></br>
          <span onClick={this.props.handleOnClick}>
            No Korfi Account/Create Account
          </span>
          <button type="submit" name="SignIn">
            SignIn{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default SignIn;
