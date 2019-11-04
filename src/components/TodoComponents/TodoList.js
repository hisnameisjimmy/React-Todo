import React from 'react';
import ToDo from './Todo.js';

const ToDoList = props => {

    return (
      <div>
        {props.todoitems.map(item => (
          <ToDo key={item.id} item={item} completedTask={props.completedTask} />
        ))}
      </div>
    );
};

export default ToDoList;