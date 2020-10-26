import React from "react";

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state={
          users:[],
          email:'',
          password:'',
      }
    }
    render() {
      return <div>
          <form>
          <input type="email" name="email" placeholder="email" required /><br></br>
      <input type="password" name="password" placeholder="password" required/><br></br>
      </form>
      </div>;
    }
  }
  export default SignIn;