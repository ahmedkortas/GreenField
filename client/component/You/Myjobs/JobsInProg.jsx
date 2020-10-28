import React from 'react';

class JobsInProg extends React.Component {
    constructor(props) {
      super(props);
     
    }
    render(){
        return (
            <div>
            <div>Job in progress</div>
            <button onClick={this.props.goBack}> go Back</button>
        </div>
        )
    }
}
export default JobsInProg;