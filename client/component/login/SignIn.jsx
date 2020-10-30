import React from "react";
import axios from "axios";
import "../style/Component/SignIn.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.postUser = this.postUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let inp = event.target;
    this.setState({ [inp.name]: inp.value });
  }

  postUser(e) {
    e.preventDefault();
    axios.post("/user/SignIn", this.state).then((res) => {
      if (res.data === "does not exists") {
        alert("this user does not exist");
      } else {
        console.log(res.data)
        if (res.data.password !== this.state.password) {
          alert("wrong password");
        } else {
          console.log(res.data.name);
          this.props.login(res.data.email, res.data.userName);
        }
      }
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <i id="icon1" className="material-icons prefix">mail</i>
        <input
          className="i1"
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={this.handleChange}
        ></input>
        <br></br>
        <i id="icon2" className="material-icons prefix">vpn_key</i>
        <input
          className="i2"
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={this.handleChange}
        />
        <br></br>
        <div className="btn0">
          <span onClick={this.props.handleOnClick}>
            No Korfi Account/Create Account
          </span>
        </div>
        <button id="sign" className="bl" onClick={this.postUser}> */}
           SignIn{" "}
        </button>
      </div>
    );
  }
}
export default SignIn;
