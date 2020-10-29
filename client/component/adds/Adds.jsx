import React from "react";
import axios from "axios";


import SmallJobs from './SmallJobA.jsx';


class Adds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    
    this.querry = this.querry.bind(this);
  }



  querry() {
    axios.get("/Task/find").then((response) => {
      if (this.state.data.length !== response.data.length) {
        console.log(response.data[0].title , 'query')
        this.setState({ data: response.data });
      }
    });
  }

  render() {
    this.querry();
    return (

    <div>{this.state.data.length === 0 ? <div></div> : (this.state.data.map((data,i) =><SmallJobs key={i} data={data}/>))}</div>
    )
  }
}

export default Adds;
