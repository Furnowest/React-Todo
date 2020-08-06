import React, { Component} from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';


class Todo extends Component {
  
  render() {
    return this.props.todo.map((todo) =>(
   <TodoList  key={todo.id} todo={todo} />
   
    ));
  }
}
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}


export default Todo;
