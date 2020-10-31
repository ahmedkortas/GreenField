import React from "react";
import axios from "axios";
import "../style/Component/CV.css";

class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      experience: "",
      language: "",
      diploma: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlEmailChange = this.handlEmailChange.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  this.handleDiplome = this.handleDiplome.bind(this);
    this.handlDescritpion = this.handlDescritpion.bind(this);
  }

  handlEmailChange(e) {
    this.setState({ emailValue: e.target.value });
  }

  handleExperience(e) {
    this.setState({ experience: e.target.value });
  }

  handleLanguage(e) {
    this.setState({ language: e.target.value });
  }

  handleDiplome(e) {
    this.setState({ diploma: e.target.value });
  }
  handlDescritpion(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let obj = {};
    obj.email = this.state.emailValue;
    obj.description = this.state.description;
    obj.experience = this.state.experience;
    obj.languages = this.state.language;
    obj.diploma = this.state.diploma;
    axios.post("/Cv", obj).then((res) => console.log(res.data));
    this.props.click();
  }

  render() {
    return (
      
        <div >
          <div className="con">
          <form>
       
          
            <input
              className="in1"
              type="email"
              placeholder="Enter Email"
              onChange={this.handlEmailChange}
            ></input>
            {/* <i id="icon2" className="material-icons prefix">language</i> */}
            <input            
              className="in2"
              type="languages"
              placeholder="Enter languages"
              onChange={this.handleLanguage}
            ></input>
            {/* <i id="icon3" className="material-icons prefix">school</i> */}
            <input
              className="in3"
              type="text"
              placeholder="Enter your Diploma"
              onChange={this.handleDiplome}
            ></input>
            {/* <i id="icon4" className="material-icons prefix">message</i> */}
              <input
              className="in4"
              type="text"
              placeholder="Enter your Description"
              onChange={this.handlDescritpion}
            ></input>
            {/* <i id="icon5" className="material-icons prefix">work</i> */}
            <textarea
              className="in5"
              type="text"
              placeholder="Enter your experience"
              onChange={this.handleExperience}
            ></textarea>
            
          </form>

        </div>
        <button className="bb" onClick={this.handleSubmit}>
              Post your resume
            </button>
      </div>
    );
  }
}

export default CV;
