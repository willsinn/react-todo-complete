import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: []
    }
  }

  handleChange(event) {
    var title = event.target.value;
    this.setState({ title: title });

  }

  handleSubmit(event) {
    event.preventDefault();

    var title = this.state.title;
    var newtodos = this.state.todos.concat(title);
    this.setState({ title: '', todos: newtodos });

  }

  handleDelete(titleToBeDeleted) {
    var newtodos = this.state.todos.filter((_title) => {
      return _title !== titleToBeDeleted
    });
    this.setState({ todos: newtodos });
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
          Number of total Todos:
          { this.state.todos.length }
        </p>

        <p className="Done-Todos">
          Number of done Todos:
          { this.state.todos.filter((title) => { return title.done }).length }
        </p>

        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
