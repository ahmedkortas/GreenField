import React from "react";
import "./style/Component/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.slide = this.slide.bind(this);
  }

  slide() {
    setTimeout(() => {
      if (this.state.i < this.props.items.length - 1) {
        this.setState({ i: this.state.i + 1 });
      } else {
        this.setState({ i: 0 });
      }
    }, 3500);
  }

  render() {
    this.slide();
    console.log(this.state.i);
    let item = this.props.items;
    return (
      <div>
        <div>
          <img
            src={item[this.state.i]}
            style={{
              width: "60%",
              height: "70%",
              position: "absolute",
              padding: "25px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              float: "left",
            }}
          />
        </div>
        {/* <div className="heading">
        <h2 className="title">Professionals You Need, From People You Know.</h2><br></br>
        
        <p className="subheading">From Dog Walkers and Babysitters to Hairstylists and Personal Trainers, to...</p>
      </div>
      <div className="container">
      
      <button className="b">More Information</button>
    </div> */}
      </div>
    );
  }
}

export default Home;
