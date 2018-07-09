import React, { Component } from 'react';
import './DisplayOutput.css';




class DisplayItem extends Component {

  constructor(props) {
    super(props);
    this.state = { editing: false }
  }

  componentDidMount () {
    this.setState({ changedText: this.props.todo.title });
  }

  handleEditing(event) {

    this.setState({ editing: true, changedText: this.props.todo.title });
  }

  handleEditingDone(event) {
    if (event.keyCode === 13) {
      this.setState({editing: false});
    }
  }

  handleEditingChange(event) {
    var _changedText = event.target.value;
    this.setState({ changedText: _changedText });
  }

  render(){

    var todo = this.props.todo;

    var viewStyle = {};
    var editStyle = {};

    if (this.state.editing) {
      viewStyle.display = 'none';
    } else {
      editStyle.display = 'none';
    }

    return(

             <li className={todo.done ? 'done': ''}>
              <div className="display-list-item" style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
                  <input className="display-item-checkbox"
                     checked={todo.done}
                     onChange={this.props.handleDone.bind(null, todo.title)}
                     type ="checkbox"
                  />
                  <label className="display-item-text">
                     { this.state.changedText }
                  </label>
                  <a  className="display-item-done" href="/" onClick= { this.props.handleDelete.bind(null, todo.title)}>
                  <i class="fas fa-minus-circle"></i>
                    </a>
                </div>
                <input type="text"
                        onKeyDown={this.handleEditingDone.bind(this)}
                        onChange={this.handleEditingChange.bind(this)}
                        style={editStyle}
                        value={this.state.changedText}
                        />
                <div className="display-item-divider">
                </div>
             </li>



    );
  }


}


export default DisplayItem;
