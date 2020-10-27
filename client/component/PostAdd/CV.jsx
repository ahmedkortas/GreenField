import React from "react";
import axios from 'axios';



class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      experience: "",
      language: "",
      diploma: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlEmailChange = this.handlEmailChange.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handlEmailChange(e) {
    console.log(e);
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

  clickHandler() {
    let obj = {};
    obj.email = this.state.emailValue;
    obj.experience = this.state.experience;
    obj.language = this.state.language;
    obj.diploma = this.state.diploma;
    axio.post("/", obj).then((res) => console.log(res.data));
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.click()
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input type="email" onChange={this.handlEmailChange}></input>
            <input type="languages" onChange={this.handleLanguage}></input>
            <input type="text" onChange={this.handleDiplome}></input>
            <textarea
              type="description"
              value="experience"
              onChange={this.handleExperience}
              placeholder="experience"
            ></textarea>
            <button onClick={this.handleSubmit}>Post your resume</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CV;
