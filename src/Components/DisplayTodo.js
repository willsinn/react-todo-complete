import React, { Component } from 'react';



class DisplayTodo extends Component {

  render(){
    var todo = this.props.todo;
    var title = todo.title;

    return(
      <div>
             <li>

                  <input
                     checked={todo.done}
                     onChange={this.props.handleDone.bind(null, title)}
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
