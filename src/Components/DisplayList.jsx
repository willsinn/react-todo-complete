import React, { Component } from 'react';
import DisplayItem from './DisplayItem';
import './DisplayOutput.css';

class DisplayList extends Component {


  render() {

    return(
      <ul className="display-list-wrapper">
      { this.props.todos.map((todo, i) => {
        return  <DisplayItem
                key={todo.title}
                todo={todo}
                handleDone={this.props.handleDone}
                handleDelete={this.props.handleDelete}
                />;
      })}
      </ul>
    );
  }
}


export default DisplayList;
