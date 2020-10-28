import React from "react";
import axios from "axios";




class Adds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    
    this.querry = this.querry.bind(this);
  }



  querry() {
    axios.get("/dummy").then((response) => {
      if (this.state.data.length !== response.data.length) {
        console.log(response.data[0].title , 'query')
        this.setState({ data: response.data });
      }
      console.log(this.state.data[0].title , "second")
    });
  }

  render() {
    console.log(this.state.data[0].title,'render')
    this.querry();
    return (

      <div>
      <ul>
        <li>
          <div>{this.state.data.title}</div>        
          <span>Task description will be here</span>
          <span>Poster contact will be here</span>
          <div><span>Price will be here</span></div>
          <button>Apply for this!</button>
        </li>
        </ul>
        </div>
    )
  }
}

export default Adds;
