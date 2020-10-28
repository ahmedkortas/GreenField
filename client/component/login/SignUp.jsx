import React from "react";
import axios from "axios";
import "./SignUp.css"

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users:[],
          userName:'',
          email:'',
          password:'',
          adress:'',
          phoneNumber:'',
          gender:'male',
          age:'',
      };
      this.addUser=this.addUser.bind(this);
    }
    addUser(e){
      
      e.preventDefault()
      const newUser = {
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password,
        address:this.state.address,
        phone: this.state.phone,
        gender:this.state.gender,
        age:this.state.age,
      }
      axios.post("/api/SignUp",newUser)
      .then(res => console.log(res.data));
          // this.setState({
          // userName:'',
          // email:'',
          // password:'',
          // address:'',
          // phone:'',
          // gender:'',
          // age:'',        
          // })
    }
    render() {
      
      return (<div>
    <form onSubmit={this.addUser}>

    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <label htmlFor="username"><b>UserName</b></label>
    <input type="text" name="user" placeholder="Enter Your UserName" onChange={(e)=>{this.setState({userName:e.target.value})}}/><br></br>
    <label htmlFor="email"><b>Email</b></label>
    <input type="email" name="email" placeholder="Enter Your Email"  onChange={(e)=>{this.setState({email:e.target.value})}} /><br></br>
    <label htmlFor="password"><b>Password</b></label>
    <input type="password" name="psw" placeholder="Enter Your Password"  onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
    <label htmlFor="address"><b>Address</b></label>
    <input type="text" name="address" placeholder="Enter Your address"  onChange={(e)=>{this.setState({address:e.target.value})}}/><br></br>
    <label htmlFor="phone"><b>Phone</b></label>
    <input type="number" name="phone" placeholder="Enter Your phoneNumber"  onChange={(e)=>{this.setState({phone: Number(e.target.value)})}}/><br></br>
    <label htmlFor="gender"><b>Gender</b></label>
    <select  onChange={(e)=>{this.setState({gender:e.target.value})}}>
  <option value="male">male</option>
  <option value="femal">female</option>
  </select><br></br>
    <label htmlFor="age"><b>Age</b></label>
    <input type="number" name="age" placeholder="Enter your Age"onChange={(e)=>{this.setState({age: Number(e.target.value)})}} /><br></br> 
  
    <button type="submit"  name="SignIn" >SignUp </button>

    </form>
      </div>
      );
    }
  }
  
  export default SignUp;

