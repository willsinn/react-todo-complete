import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';
import HeaderBackground from './Images/HeaderBackground.jpg';

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
      <div className="app-container">

        <div className="header-container">
                  <img className="header-background" src={HeaderBackground} />
                  <div className="title-date-container">
                     <h1> Your Things </h1>
                     <h3> Current Date </h3>
                  </div>

                  <div className="progress-container">
                    <div className="total-pending-container">
                      <div className="total-todos">
                          <p>  Total { this.state.todos.length }</p>
                      </div>
                      <div className="pending-todos">
                        <p> Pending { this.state.todos.filter((todo) => { return !todo.done }).length }</p>
                      </div>
                    </div>
                    <div className="completed-percentage-container">
                      <p className="completed-percentage"> Completed Percentage </p>
                    </div>
                  </div>

        </div>

        <div className="content-container">

          <div className="form-container">
                  <form onSubmit={this.handleSubmit.bind(this)} >
                    <input className="form-input" placeholder="New Todos" onChange={this.handleChange.bind(this)} value={this.state.title} />
                    <button className="form-button"> Add </button>
                  </form>
          </div>

          <div className="list-container">
                  <div className="list-title">
                    <p> Todo's </p>
                  </div>
                  <div className="list-items">
                    <DisplayList
                      handleDone={this.handleDone.bind(this)}
                      handleDelete={this.handleDelete.bind(this)}
                      todos={this.state.todos}
                    />
                  </div>
          </div>
          <div className="completed-clear-container">
                  <div className="completed-todos">
                      <p> Finished Todos { this.state.todos.filter((todo) => { return todo.done }).length }</p>
                  </div>
                  <div className="clear-completed-todos">
                      <a href='/' onClick={ this.handleClearCompleted.bind(this)}>
                          CLEAR
                      </a>
                  </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
