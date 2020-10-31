import React from "react";
import axios from "axios";
class JobApplicante extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.getUser = this.getUser.bind(this);
    this.state = { rating: -5 };
  }

  click() {
    let obj = {
      employeeEmail: this.props.data.employeeEmail,
      description: this.props.data.description,
    };
    axios.post("/Task/Progress", obj).then((response) => {
      location.reload();
    });
  }

  getUser(email) {
    let obj = {
      email: email,
    };
    axios
      .post("/user/info", obj)
      .then((res) => this.setState({ rating: res.data.rating }));
  }
  render() {
    if (this.state.rating === -5) {
      this.getUser(this.props.data.employeeEmail);
    }
    return (
      <span className="feed-list-item-poster">
        <br />
        <span onClick={this.click}>
          <strong>Task applicant : </strong> {this.props.data.employeeEmail}
        </span>
        <span>
          {this.state.rating < 5 ? (
            <span>
              <strong style={{ color: "red" }}> Rating:</strong>{" "}
              {this.state.rating}
            </span>
          ) : (
            <span style={{ color: "green" }}>
              <strong> Rating:</strong> {this.state.rating}
            </span>
          )}
        </span>
      </span>
    );
  }
}

export default JobApplicante;
