import React from 'react'


class  JobPend extends React.Component {
    constructor(props){
        super(props)
    // state = {  }

    }


    render() { 
        console.log(this.props , "JobPend")
        return (   
        <div className="feed">
        <ul>
          <li className="feed-list-item">
            <span className="feed-list-item-title">
              {/* {this.props.data.title} */}
            </span>
            <br></br>
            <br></br>
            <p className="feed-list-item-description">
              {/* {this.props.data.description} */}
            </p>{" "}
            <br></br>
            <span className="feed-list-item-poster">
              {/* {this.props.data.contact} */}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-price">
              <strong> Earning: </strong>
              {/* {this.props.data.price}DT */}
            </span>
            <br></br>
            <br></br>
            <span className="feed-list-item-address">
              {/* <strong> Location : </strong> {this.props.data.address} */}
            </span>{" "}
            <br></br>
            <br></br>
            <span>
              <button
                type="button"
                className="btn-primary"
                onClick={this.props.clickHandler}
              >
                Apply here{" "}
              </button>
            </span>
          </li>
        </ul>
      </div>
      );
    }
}
 
export  default JobPend ;
