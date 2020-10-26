import React from 'react';
import CV from './CV';
import PostJob from './PostJob';


class PostAdd extends Component {
    constructor(){
        super();
    this.state = { view : "main"  }

this.showCVform = this.showCVform.bind(this);
this.showTaskform = this.showTaskform.bind(this);
    }



   
showCVform(){
    this.setState({view : "C.V"});
}

showTaskform(){
    this.setState({view : ""});
}


    render() {
        const {view} = this.state;
        if (view === 'main') {
            return (
             <div>
            <button onClick={this.showTaskform}> Add a task</button>
            <button onClick={this.showCVform}>Add your C.V</button>
            </div>  
            )                 
          }
        else if(view === "C.V"){
        return <CV/>
        } else {
            return <PostJob/>
        }
    }
}
 
export default PostAdd;
 
