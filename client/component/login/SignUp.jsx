import React from "react";
import axios from "axios";

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
          gender:'',
          age:'',
          check:""
      };
      this.addUser=this.addUser.bind(this);
    }
    addUser(e){
      e.preventDefault()
      this.props.onClickChange('SignIn')
      const newUser = {
        userName:this.state.userName,
        email:this.state.email,
        password:this.state.password,
        adress:this.state.adress,
        phoneNumber: this.state.phoneNumber,
        gender:this.state.gender,
        age:this.state.age,

      }
      // axios.post('http://localhost:3000/',newUser)
      // .then(res => console.log(res.data));
      //     this.setState({
      //     userName:'',
      //     email:'',
      //     password:'',
      //     adress:'',
      //     phoneNumber:'',
      //     gender:'',
      //     age:'',
      //     check:"SignIn"
      //     })
    }
    render() {
      if(this.state.check === ""){
      return (<div>
    <form onSubmit={this.addUser}>
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <label for="username"><b>UserName</b></label>
    <input type="text" name="user" placeholder="Enter Your UserName" required value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}}/><br></br>
    <label for="email"><b>Email</b></label>
    <input type="text" name="email" placeholder="Enter Your Email" required value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}} /><br></br>
    <label for="password"><b>Password</b></label>
    <input type="password" name="psw" placeholder="Enter Your Password" required value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
    <label for="gender"><b>Gender</b></label>
    <select id="cars">
  <option value="male">male</option>
  <option value="femal">femal</option>
  </select>
    <label for="age"><b>Age</b></label>
    <input type="text" name="age" placeholder="Enter your Age" required value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}} /><br></br> 
  
    <button type="submit"  name="SignIn" >SignUp </button>
    </form>
      </div>
      );
    }else {
      return (
        <div>
          <button onClick={props.onClick} name="" >Enter </button>
        </div>
      )
    }
  }
  }
  export default SignUp;
