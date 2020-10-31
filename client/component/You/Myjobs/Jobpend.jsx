import React from "react";
import "../../style/Component/Jobpend.css"

class JobPend extends React.Component {
  constructor(props) {
    super(props);
    // state = {  }
  }

  render() {
    console.log(this.props.data, "jobpoend");
    return (
      <div className="feed">
        <ul>
          <li className="feed1-list-item">
            <br></br>
            <p className="feed1-list-item-description">
              <strong> Description : </strong> {this.props.data.description}
            </p>{" "}
            <br></br>
            <span className="feed1-list-item-poster">
              <strong> Contact : </strong> {this.props.data.contact}
            </span>
            <br></br>
            <br></br>
            <span className="feed1-list-item-price">
              <strong> Earning : </strong>
            </span>
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }} >
              {this.props.data.price}DT
            </span>
            <br></br>
            <br></br>
            <span className="feed1-list-item-address">
              <strong> Location : </strong> {this.props.data.address}
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed1-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default JobPend;
