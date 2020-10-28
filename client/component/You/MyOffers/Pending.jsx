import React from "react";

class PendingJobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hey");
    return (
      <div>
        <div> My Pending Jobs</div>
        <button onClick={this.props.goBack}> Go Back</button>
      </div>
    );
  }
}

export default PendingJobs;
