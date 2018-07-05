import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      done: false,
      todos: []
    }
  }

  handleChange(event) {
    var title = event.target.value;
    this.setState({ title: title });

  }

  handleClearCompleted (event) {
    var newTodos = this.state.todos.filter( (todo) => {return !todo.done});
    this.setState({ todos: newTodos });
  }

  handleDelete(titleToBeDeleted) {
    var newTodos = this.state.todos.filter((todo) => {
      return todo.title !== titleToBeDeleted
    });
    this.setState({ todos: newTodos });
  }

  handleDone(titleToBeMarkedDone) {
    var _todos = this.state.todos;

    var todo = _todos.filter((todo) => {
      return todo.title === titleToBeMarkedDone;
    })[0];

    todo.done = !todo.done;

    this.setState({ todos: _todos });
  }

  handleSubmit(event) {
    event.preventDefault();

    var title = this.state.title;
    var newtodos = this.state.todos.concat({title: title, done: false });
    this.setState({ title: '', todos: newtodos });

  }




  render() {
    return (
      <div>
      <h1> To do your Todos, it needs to be DONE. </h1>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input placeholder="New Todos" onChange={this.handleChange.bind(this)} value={this.state.title} />
          <button> Add </button>
        </form>

          <DisplayList
            handleDone={this.handleDone.bind(this)}
            handleDelete={this.handleDelete.bind(this)}
            todos={this.state.todos}
          />


            <p> All Todos { this.state.todos.length }</p>
            <p> Pending Todos{ this.state.todos.filter((todo) => { return !todo.done }).length }</p>
            <p> Finished Todos { this.state.todos.filter((todo) => { return todo.done }).length }</p>
              <a href='/' onClick={ this.handleClearCompleted.bind(this)}>
                CLEAR
              </a>
       </div>

    );
  }
}

export default App;
