import React from "react";
import "../../style/Component/JobInProg.css"

class JobsInProg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="feed">
        <ul>
          <li className="feed2-list-item">
            <br></br>
            <p className="feed2-list-item-description">
              {this.props.data.description}{" "}
            </p>
            <br></br>
            <span className="feed2-list-item-poster"></span>
            {this.props.data.contact}
            <br></br>
            <br></br>
            <span className="feed2-list-item-price">
              <strong> Earning : </strong>
            </span>{" "}
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }}
            >
              {this.props.data.price}DT
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed2-list-item-address">
              <strong> Location : {this.props.data.address} </strong>
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed2-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default JobsInProg;
