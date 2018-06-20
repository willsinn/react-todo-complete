import React, { Component } from 'react';
import './App.css';
import DisplayList from './Components/DisplayList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    }
  }

  handleChange(event) {
    var text = event.target.value;
    this.setState({ text: text });

  }

  handleSubmit(event) {
    event.preventDefault();

    var text = this.state.text;
    var newItems = this.state.items.concat(text);
    this.setState({ text: '', items: newItems });

  }

  handleDelete(itemToBeDeleted) {
    var newItems = this.state.items.filter((_item) => {
      return _item !== itemToBeDeleted
    });
    this.setState({ items: newItems });
  }


  render() {
    return (
      <div className="App">
      <p> TODOS </p>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <input onChange={this.handleChange.bind(this)} value={this.state.text} />
          <button>
            Submit
          </button>
        </form>

        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
