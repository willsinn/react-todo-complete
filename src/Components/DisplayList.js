import React, { Component } from 'react';
import DisplayTodo from './DisplayTodo';


class DisplayList extends Component {


  render() {

    return(
      <ul>
      { this.props.todos.map((todo, i) => {
        return <DisplayTodo
                key={todo.title}
                todo={todo}
                handleDone={this.props.handleDone.bind(null, todo.title)}
                handleDelete={this.props.handleDelete.bind(null, todo.title)}
                />
      })}
      </ul>
    );
  }
}


export default DisplayList;
