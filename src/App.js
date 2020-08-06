import React, { Component } from 'react';
import Todo from './components/Todo';
// import TodoList from "./components/TodoList"
// import ReactDom from "react-dom"


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todo: [
      {
        task: 'Organize Garage',
        id: 1,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 2,
        completed: false
      },
      {
        task: 'Water the garden',
        id: 3,
        completed: false
      }
    ]
  }
  
  render() {
    console.log(this.state.todo)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Todo todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
