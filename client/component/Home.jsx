import React from 'react';
import "./style/Component/Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props); this.state = {
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
    console.log(this.state.i)
    let item = this.props.items;
    return (
      <div>
      <div>  
      <div>
          <img
            src={item[this.state.i]}
            style={{
              width: "60%",
              height: "90%",
              position: "absolute",
              padding: "25px",
              borderRadius: "8px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              float: "left",
            }}
          />
        </div>  
    </div>
    
     <div style={{  
      
       color: "black",
 left: "50%",
 top: "50%",
 transform: "translateX(-50%) translateY(-50%)",
 textAlign: 'center',
 fontfamily: 'Arial',
 fontSize: '3em',
 marginLeft:'1850px',
 marginTop: "390px",
float:'right',
}}>
     <h2 className="title" >Professionals You Need, From People You Know.</h2><br></br>   
     <p className="subheading">From Dog Walkers and Babysitters to Hairstylists and Personal Trainers, to...</p>
  
   </div>
   <div style={{  
transform: "translateX(-50%) translateY(-50%)",
fontfamily: 'Dishonorable Mention (Comic Sans)',
marginLeft:'1600px',
marginTop: "130px",
float:'right',
}}>
    <a href="https://www.facebook.com/Korfi-109834854250334" target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/KorfiTunisia" target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.instagram.com/korfi.tunisia/" target="_blank" class="fa fa-instagram"></a>
    <a href="https://www.google.com/" target="_blank" class="fa fa-google"></a>
    <br></br>
    <a class="fa fa-envelope"></a>:Korfi.Tunisia@gmail.com
  </div>
   </div>
    )
   
    
  }
}

export default Home;
