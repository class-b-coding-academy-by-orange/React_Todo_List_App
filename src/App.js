import React, { Component } from 'react'; // ES6
import axios from 'axios';
// const React = require('react'); // Common javascript (used in nodejs)
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    tasks: null
  };
  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(elem => {
        if (elem.id === id) {
          elem.isCompleted = !elem.isCompleted
        }
        return elem
      })
    })
  }
  componentDidMount() {
    console.log('Get all called');
    // axios: get data from api
    axios.get('http://localhost:4000/tasks')
      .then(response => {
        console.log(response);
        this.setState({
          tasks: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

  }
  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h6>App</h6>
        <button onClick={this.getAll}>Get All Tasks</button>
        <Todos tasks={tasks} a={4} toggleComplete={this.toggleComplete} />
      </React.Fragment >
    );
  }
}