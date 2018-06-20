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

  handleSubmit(event) {
    event.preventDefault();

    var text = this.state.text;
    var newItems = this.state.items.concat(text);
    this.setState({ text: '', items: newItems });
  }

  handleChange (event) {
    var text = event.target.value;
    this.setState({ text: text });

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
          items={this.state.items}

        />
      </div>
    );
  }
}

export default App;
