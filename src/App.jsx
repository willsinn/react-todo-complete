import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';
import HeaderBackground from './Images/HeaderBackground.jpg';
import AddIcon from './Images/AddIcon.svg';
import CurrentDate from './Components/CurrentDate';

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
                     <div className="title-container">
                        <span className="title-styles"> Your </span>
                        <span className="title-styles"> Things </span>
                     </div>
                     <h3 className="date-container"> <CurrentDate /> </h3>
                  </div>

                  <div className="progress-container">
                    <div className="total-pending-container">
                      <div className="total-todos">
                            <span className="progress-number">{ this.state.todos.length }</span>
                            <span className="progress-label">Total</span>
                      </div>
                      <div className="pending-todos">
                        <span className="progress-number">{ this.state.todos.filter((todo) => { return !todo.done }).length }</span>
                        <span className="progress-label">Pending</span>

                      </div>
                    </div>
                    <div className="completed-percentage-container">
                      <span className="completed-percentage"> { this.state.todos.filter((todo) => { return todo.done }).length }/{ this.state.todos.length } done</span>
                    </div>
                  </div>
        </div>

        <div className="content-container">

                  <form className="form-container" onSubmit={this.handleSubmit.bind(this)} >
                    <input className="form-input" placeholder="New Todos" onChange={this.handleChange.bind(this)} value={this.state.title} />
                    <button className="form-button"><img className="add-icon" src={AddIcon}/></button>
                  </form>


                  <div className="list-container">
                  <div className="list-title">
                      <span> Todo's </span>

                  </div>
                  <div className="list-title-divider"></div>
                  <div className="display-list-wrapper">
                    <DisplayList
                      handleDone={this.handleDone.bind(this)}
                      handleDelete={this.handleDelete.bind(this)}
                      todos={this.state.todos}
                    />
                  </div>
                </div>
          <div className="completed-clear-container">
                  <div className="completed-todos">
                      <span>completed </span>
                      <span className="circle-display">{ this.state.todos.filter((todo) => { return todo.done }).length }</span>
                  </div>
                  <div className="clear-completed-todos">
                      <span className="clear-completed-text">clear completed </span>
                      <button className="clear-completed-button" onClick={ this.handleClearCompleted.bind(this)}>
                        <i class="fas fa-ban"></i>
                      </button>
                  </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
