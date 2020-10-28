import React from 'react';

class AppliedJobs extends React.Component {
    constructor(props) {
      super(props);
     
    }
    render(){
        return (
            <div>
            <div> Applied jobs</div>
            <button onClick={this.props.goBack}> go Back</button>
       </div> 
       )
    }
}
export default AppliedJobs;