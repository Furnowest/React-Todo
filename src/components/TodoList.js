// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
      <div className="mylist">
        {props.mytodo.map(item => (
          <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
        ))}
        <button className="btn" onClick={props.doneTodo}>
          Done Tasks
        </button>
      </div>
    );
  };
export default TodoList

