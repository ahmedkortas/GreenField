import React from "react";
import axios from "axios";
import JobApplicante from "./JobApplicante.jsx";

class PendingJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let obj = {
      description: this.props.data.description,
    };
    axios.post("/Task/applicant", obj).then((response) => {
      this.setState({ data: response.data });
    });
  }

  render() {
    return (
      <div className="feed" onClick={this.clickHandler}>
        <ul>
          <li className="feed-list-item">
            <br></br>
            <p className="feed-list-item-description">
              {this.props.data.description}{" "}
            </p>
            <br></br>
            <span className="feed-list-item-poster"></span>
            {this.props.data.contact}
            <br></br>
            <br></br>
            <span className="feed-list-item-price">
              <strong> Earning : </strong>
            </span>{" "}
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }}
            >
              {this.props.data.price}DT
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed-list-item-address">
              <strong> Location : {this.props.data.address} </strong>
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
            </span>
          </li>
        </ul>
        {this.state.data.length !== 0 ? (
          <div className="feed" onClick={this.clickHandler}>
            <ul>
              <li className="feed-list-item">
                <span className="feed-list-item-">
                  please click on the email to select someone
                </span>
                {this.state.data.map((element) => (
                  <JobApplicante data={element} />
                ))}
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default PendingJobs;
