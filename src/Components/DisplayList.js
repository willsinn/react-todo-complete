import React, { Component } from 'react';


class DisplayList extends Component {




  render() {
    return(
      <div>
      { this.props.items.toString() }
      </div>

    );
  }
}


export default DisplayList;
