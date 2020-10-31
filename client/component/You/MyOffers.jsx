import React from "react";
import Done from "./MyOffers/Done.jsx";
import Pending from "./MyOffers/Pending.jsx";
import JobsInProg from "./MyOffers/JobInProg.jsx";
import axios from "axios";
import "../style/Component/MyOffers.css"

class MyOffers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      dataPending: [],
      dataDone: [],
      dataInProgress: [],
    };
    this.getJobiProg = this.getJobiProg.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({ view: "home" });
  }

  getJobiProg() {
    let obj = {
      providerEmail: localStorage.getItem("currentUser"),
    };
    axios.post("/Task/findProg", obj).then((response) => {
      if (this.state.dataInProgress.length !== response.data.length) {
        console.log(response.data);
        this.setState({ dataInProgress: response.data });
      }
    });
  }

  queryPending() {
    let obj = { providerEmail: localStorage.getItem("currentUser") };
    console.log(obj);
    axios.post("/", obj).then((response) => {
      if (this.state.dataInProgress.length !== response.data.length) {
        this.setState({ dataPending: response.data });
      }
      return;
    });
  }

  queryDone() {
    let obj = { providerEmail: localStorage.getItem("currentUser") };
    console.log(obj);
    axios.post("/", obj).then((response) => {
      if (this.state.data.length !== response.data.length) {
        this.setState({ dataDone: response.data });
      }
      return;
    });
  }

  render() {
    this.getJobiProg();
    console.log(this.state.dataInProgress);
    return (
      <div>
<button className="k"  onClick={this.props.goBack}> Go Back</button>        <div>
          {this.state.dataDone.map((data, index) => (
            <Done data={data} key={index} />
          ))}
        </div>
        <div>
          {this.state.dataPending.map((data, index) => (
            <Pending data={data} key={index} />
          ))}
          {this.state.dataInProgress.map((data, index) => (
            <JobsInProg data={data} key={index} />
          ))}
          <div>
            <button className="j" onClick={this.props.goBack}> Go Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MyOffers;
