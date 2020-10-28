import React from "react";

class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hey");
    return (
      <div>
        <div>ALL the done job</div>
        <button onClick={this.props.goBack}> go Back</button>
      </div>
    );
  }
}

export default Done;
