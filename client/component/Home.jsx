import React from 'react';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
       <div>
          <h2>Professionals You Need, From People You Know.</h2>
          <p>From Dog Walkers and Babysitters to Hairstylists and Personal Trainers, to...</p>
        </div>
      )
     
      
    }
}
  ReactDom.render(<Home/>, document.getElementById("app"));