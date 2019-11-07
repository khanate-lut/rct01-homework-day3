import React, { Component } from 'react';

class Fave extends Component {
 

  handleClick = e => {
    e.stopPropagation();
    console.log('Handling Fave click!');
    // this.setState({
    //   isFave: !this.state.isFave
    // })
     // Add this line. You'll call the function passed through props.
    this.props.onFaveToggle();
  }

  render() {
    return (
      <div className={"film-row-fave " + (this.props.isFave ? "remove_from_queue" : "add_to_queue")} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;