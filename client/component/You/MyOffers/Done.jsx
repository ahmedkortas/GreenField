import React from "react";
import "../../style/Component/Done.css"

class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hey");
    return (
      <div className="feed">
        <ul>
          <li className="feed3-list-item">
            <br></br>
            <p className="feed-list-item-description">
              {this.props.data.description}{" "}
            </p>
            <br></br>
            <span className="feed3-list-item-poster"></span>
            {this.props.data.contact}
            <br></br>
            <br></br>
            <span className="feed3-list-item-price">
              <strong> Earning : </strong>
            </span>{" "}
            <span
              style={{ color: "#00e600", fontSize: "20px", fontWeight: "bold" }}
            >
              {this.props.data.price}DT
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed3-list-item-address">
              <strong> Location : {this.props.data.address} </strong>
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed3-list-item-poster">
              <strong>Task applicant : </strong> {this.props.data.employeeEmail}
            </span>
            <input type="number" max="10" min="0" style={{ width: "20%" }} />
            <button>submit rating</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Done;
