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
      <div className="app-container">
      <h1 className="app-title"> To do your Todos, it needs to be DONE. </h1>

        <form className="form-add-container" onSubmit={this.handleSubmit.bind(this)} >
          <input className="input-add" placeholder="JUST DO IT!" onChange={this.handleChange.bind(this)} value={this.state.title} />
          <button className="button-add"> To. Be. Done. </button>
        </form>


        <DisplayList
          handleDone={this.handleDone.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}
        />


        <div className="todos-status-container">
          <p className="todos-status-all">
          ALL
          </p>
          <p className="number-counter-all">{ this.state.todos.length }</p>

          <p className="todos-status-pending">
          PENDING
          </p>
          <p className="number-counter-pending">{ this.state.todos.filter((todo) => { return !todo.done }).length }</p>

          <p className="todos-status-completed">
          COMPLETED
          </p>
          <p className="number-counter-completed">{ this.state.todos.filter((todo) => { return todo.done }).length }</p>

          <p className="todos-clear-completed">
            <a href='/' onClick={ this.handleClearCompleted.bind(this)}>
              CLEAR
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
