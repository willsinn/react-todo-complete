import React, { Component } from 'react';



class DisplayTodo extends Component {
  constructor(props){
    super(props);
    this.state = { done: false };
  }


    handleDone() {
      var _done = !this.state.done;
      this.setState( {done:_done} );
    }



  render(){
    var title = this.props.title;

    return(
      <div>
             <li>

                  <input
                     checked={this.state.done}
                     onChange={this.handleDone.bind(this)}
                     type="checkbox"
                     style={{ fontSize: 'x-large' }}
                  />
                     { title }
                     <a href="#" onClick= { this.props.handleDelete.bind(null, title)}>
                      [X]
                    </a>
             </li>

      </div>
    );
  }
}

export default DisplayTodo;
