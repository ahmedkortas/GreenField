import React from 'react'


class  JobPend extends React.Component {
    constructor(props){
        super(props)
    // state = {  }

    }


    render() { 
      console.log(this.props.data)
        return (        
        <div className="feed">
        <ul>
          <li className="feed-list-item">
            <span className="feed-list-item-title">
            <strong> Title : </strong> {this.props.data[0].title} 
            </span>
            <br></br>
            <br></br>
            <p className="feed-list-item-description">
            <strong> Description : </strong> {this.props.data[0].description} 
            </p>{" "}
            <br></br>
            <span className="feed-list-item-poster">
            <strong> Contact : </strong> {this.props.data[0].contact}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-price">
              <strong> Earning: </strong>
             {this.props.data[0].price}DT
            </span>
            <br></br>
            <br></br>
             
            <span className="feed-list-item-address">
            <strong> Location : </strong> {this.props.data[0].address}
            </span>{" "}
            <br></br>
            <br></br>
            <span className="feed-list-item-poster">
             <strong>Task applicant : </strong> {this.props.data[0].employeeEmail}
            </span>
          </li>
        </ul>
      </div>
      );
    }
}
 
export  default JobPend ;
