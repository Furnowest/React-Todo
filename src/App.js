import React from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



const mytodo = [
{
  task: 'clean bathroom',
  id:14,
  completed: false

},
{
  task: 'make dinner',
  id: 24,
  completed: false
}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mytodo
    };
  }

 
  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      
      mytodo: this.state.mytodo.map(item => {
        if (itemId === item.id) {
          return {
           
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      mytodo: [...this.state.mytodo, newItem]
    });
  };

  doneTodo = e => {
    e.preventDefault();
    this.setState({
      mytodo: this.state.mytodo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          mytodo={this.state.mytodo}
          toggleItem={this.toggleItem}
          doneTodo={this.doneTodo}
        />
      </div>
    );
  }
}
export default App