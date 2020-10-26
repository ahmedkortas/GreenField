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
     c
    }
    render() {
      if(this.state.check === ""){
      return (<div>
        <form onSubmit={this.addUser}>
        <input type="text" name="user" placeholder="userName" required value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}}/><br></br>
        <input type="email" name="email" placeholder="email" required value={this.state.email}onChange={(e)=>{this.setState({email:e.target.value})}} /><br></br>
    <input type="password" name="password" placeholder="password" required value={this.state.password} onChange={(e)=>{this.setState({password:e.target.value})}}/><br></br>
    <input type="text" name="name" placeholder="gender" required value={this.state.gender} onChange={(e)=>{this.setState({gender:e.target.value})}} /><br></br>
    <input type="text" name="name" placeholder="age" required value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}} /><br></br> 
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
