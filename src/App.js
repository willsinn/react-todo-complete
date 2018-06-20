import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: [{title: '' ,done: false }]
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
      <div className="App">
      <p> TODOS </p>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <input onChange={this.handleChange.bind(this)} value={this.state.title} />
          <button>
            Submit
          </button>
        </form>

        <p className="Total-Todos">
          ALL :
          { this.state.todos.length }
        </p>

        <p className="Done-Todos">
          COMPLETED:
          ({ this.state.todos.filter((todo) => { return todo.done }).length }) |
          PENDING:
          ({ this.state.todos.filter((todo) => { return !todo.done }).length }) |
            <a href='#' onClick={ this.handleClearCompleted.bind(this)} >
             CLEAR COMPLETED
             </a>
        </p>

        <DisplayList
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}

        />
      </div>
    );
  }
}

export default App;
