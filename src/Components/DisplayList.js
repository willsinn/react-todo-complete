import React, { Component } from 'react';


class DisplayList extends Component {




  render() {
    return(
      <ul>
      { this.props.items.map((item, i) => {
        return <li key={ item }>
                       { item }
                       <a href="#" onClick= { this.props.handleDelete.bind(null, item)}>
                        [X]
                      </a>
               </li>
      })}
      </ul>

    );
  }
}


export default DisplayList;
