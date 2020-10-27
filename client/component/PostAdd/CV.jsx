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
      description : ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlEmailChange = this.handlEmailChange.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handlDescritpion = this.handlDescritpion.bind(this)
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
handlDescritpion(e){
this.setState({description : e.target.value});
}



  handleSubmit(event) {
      console.log(this.props)
    event.preventDefault();
    let obj = {};
    obj.email = this.state.emailValue;
    obj.description = this.state.description;
    obj.experience = this.state.experience;
    obj.language = this.state.language;
    obj.diploma = this.state.diploma;
    axios.post("/task", obj).then((res) => console.log(res.data));
    this.props.click()
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input type="email" onChange={this.handlEmailChange}></input>
            <input type="text" onChange={this.handlDescritpion}></input>
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
