import React, { Component } from 'react';



class DisplayItem extends Component {
  constructor(props){
    super(props);
    this.state = { done: false };
  }


    handleOnChange() {
      var _done = !this.state.done;
      this.setState( {done:_done} );
    }



  render(){
    var item = this.props.item;

    return(
      <div>
             <li>

                     <input
                     checked={this.state.done}
                     onChange={this.handleOnChange.bind(this)}
                     type="checkbox"
                     style={{ fontSize: 'x-large' }} />
                     { item }
                     <a href="#" onClick= { this.props.handleDelete.bind(null, item)}>
                      [X]
                    </a>
             </li>
    
      </div>
    );
  }
}

export default DisplayItem;
