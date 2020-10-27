//this page when you click on the button on the home page "more information it will be render it"

<<<<<<< HEAD
import React from 'react';
import "./style/Component/About.css"

class AboutUs extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
       <div className="about">
           <h1>About Us...</h1>
           <p>helloooooooooo
               how arrrrrre you
               this is just an e.g of text 
               to teeeesssst the component
           </p>
           <button className="btn">Read More<i className="fas fa-book-open"></i></button>
       </div>
      </div>
      )
     
      
    }
}
 
export default AboutUs;
=======
import React from "react";
import "./style/Component/Home.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="about">
          <h1>About Us...</h1>
          <p>
            helloooooooooo how arrrrrre you this is just an e.g of text to
            teeeesssst the component
          </p>
          <button className="btn">
            Read More<i className="fas fa-book-open"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default AboutUs;
>>>>>>> f0dec2b5e3ced7136e8963ee98106bb8ac009e9c
