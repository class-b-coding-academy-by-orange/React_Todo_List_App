import React, { Component } from 'react';

export default class TodoItem extends Component {

  render() {
    const { id, title, isCompleted } = this.props.task;
    return (
      <React.Fragment>
        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} />
          {title}</p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}