import React from "react";

class Done extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("hey");
    return (
      <div>
        <div>{console.log(this.props.data)}done</div>
      </div>
    );
  }
}

export default Done;
