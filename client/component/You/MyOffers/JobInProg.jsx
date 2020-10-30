import React from "react";

class JobsInProg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="feed">
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
      </div>
    );
  }
}

export default JobsInProg;
