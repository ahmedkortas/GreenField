import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [],
      email: "",
      password: ""
    };
  }
  postUser(e){
    e.preventDefault()
    const users = {
      email:this.state.email,
      password:this.state.password
    }
  }


  render() {
    return (
      <div>
        <form>
          <input type="email" name="email" placeholder="email" required value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="password"
            required value={this.state.pasword} onChange={(e)=>{this.setState({pasword:e.target.value})}}
          />
          <br></br>
          <span onClick={this.props.handleOnClick}>
            No Korfi Account/Create Account
          </span>
          <button type="submit" name="SignIn">
          </button>
        </form>
      </div>
    );
  }
}
export default SignIn;
