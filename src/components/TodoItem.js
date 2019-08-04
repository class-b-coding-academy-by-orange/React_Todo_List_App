import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggleComplete = (e) => {
    console.log(e.target.checked)
  }
  render() {
    const { title, isCompleted } = this.props.task;
    return (
      <React.Fragment>
        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={this.toggleComplete} />
          {title}</p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}