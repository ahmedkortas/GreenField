import React from 'react';




class PostAdd extends Component {
    constructor(){
        super();
    this.state = { view : "main"  }

this.showCVform = this.showCVform.bind(this);
    }



   
showCVform(){
    this.setState({view : "C.V"});
}


    render() {
        const {view} = this.state;
        if (view === 'main') {
            return (
             <div>
            <button> Add a task</button>
            <button>Add your C.V</button>
            </div>  
            )                 
          }
        else if(view === "C.V"){
        return (
             <div >
        <div>
          <form>
            <input></input>
            <input></input>
            <textarea type="description"></textarea>
            <button>Post job</button>
          </form>
        </div>
      </div>
      
      );
        }
    }
}
 
export default PostAdd;
 
