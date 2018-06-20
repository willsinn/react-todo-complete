import React, { Component } from 'react';
import DisplayItem from './DisplayItem';


class DisplayList extends Component {

  constructor(props) {
    super(props);
  }

  handleOnChange() {
    var _done = !this.state.done;
    this.setState( {done:_done} );
  }



  render() {
    return(
      <ul>
      { this.props.items.map((item, i) => {
        return <DisplayItem
                key={ item }
                handleDelete={this.props.handleDelete.bind(null, item)}
                item={item}
                />
      })}
      </ul>
    );
  }
}


export default DisplayList;
