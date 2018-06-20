import React, { Component } from 'react';
import DisplayTodo from './DisplayTodo';


class DisplayList extends Component {


  render() {
    return(
      <ul>
      { this.props.todos.map((title, i) => {
        return <DisplayTodo
                key={ title }
                handleDelete={this.props.handleDelete.bind(null, title)}
                title={title}
                />
      })}
      </ul>
    );
  }
}


export default DisplayList;
