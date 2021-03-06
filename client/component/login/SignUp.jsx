import React from "react";
import axios from "axios";
import "../style/Component/SignUp.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userName: "",
      email: "",
      password: "",
      adress: "",
      phoneNumber: "",
      gender: "male",
      age: "",
      check: "",
    };
    this.addUser = this.addUser.bind(this);
  }
  addUser(e) {
    console.log("hey");
    e.preventDefault();
    const newUser = {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      phone: this.state.phone,
      gender: this.state.gender,
      age: this.state.age,
    };
    axios.post("/user/SingUp", newUser).then((res) => {
      if (res === "exists") {
        location.reload();
      } else {
        console.log(res.data.name);
        this.props.login(res.data.email, res.data.userName);
      }
    });
  }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.addUser}>
          <h1 className="title">Register</h1>
          <br></br>
          <p className="sub">Please fill in this form to create an account.</p>
          <br></br>
          <br></br>
          <div className="inputFields">
            <label htmlFor="username">
              <b>UserName</b>
            </label>
            <i id="ic1" className="material-icons prefix">person</i>
            <input
              type="text"
              name="user"
              placeholder="Enter Your UserName"
              onChange={(e) => {
                this.setState({ userName: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <i id="ic2" className="material-icons prefix">mail</i>          
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <i id="ic3" className="material-icons prefix">vpn_key</i>
            <input
              type="password"
              name="psw"
              placeholder="Enter Your Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor="address">
              <b>Address</b>
            </label>
            <i id="ic4" className="material-icons prefix">home</i>
            <input
              type="text"
              name="address"
              placeholder="Enter Your address"
              onChange={(e) => {
                this.setState({ address: e.target.value });
              }}
            />
            <br></br>
            <label htmlFor="phone">
              <b>Phone</b>
            </label>
            <i id="ic5" className="material-icons prefix">phone_iphone</i>
            <input
              type="text"
              name="phone"
              placeholder="Enter Your phoneNumber"
              onChange={(e) => {
                this.setState({ phone: e.target.value });
              }}
            />
            <br></br>
            <label className="gender" htmlFor="gender">
              <b className="c">Gender</b>
            </label>
            <i id="ic6" className="material-icons prefix">accessibility</i>
            <select
              onChange={(e) => {
                this.setState({ gender: e.target.value });
              }}
            >
              <option value="male">male</option>
              <option value="femal">female</option>
            </select>
            <br></br>
            <label htmlFor="age">
              <b>Age</b>
            </label>
            <i  id="ic7" className="material-icons prefix">cake</i>
            <input
              type="text"
              name="age"
              placeholder="Enter your Age"
              required
              value={this.state.age}
              onChange={(e) => {
                this.setState({ age: e.target.value });
              }}
            />
            <br></br>
          </div>
          <button className="button" type="submit" name="SignIn">
            SignUp{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
