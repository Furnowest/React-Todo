// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component }from 'react';
import PropTypes from 'prop-types';

export class TodoList extends Component{
    render(){
        return(
            <div style={{ backgroundColor: 'teal'}}>
                <h3>{ this.props.todo.task}</h3>
            </div>
        )
    }
}
TodoList.propTypes = {
    todo: PropTypes.object.isRequired
  }
export default TodoList

