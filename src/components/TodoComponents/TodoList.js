import React from 'react';
import ToDo from './Todo.js';

const ToDoList = props => {

    return (
      <div>
        {props.todoitems.map(item => (
          <ToDo key={item.id} item={item} />
        ))}
      </div>

      //     {props.groceries.map(item => (
      //     <Item
      //       key={item.id}
      //       item={item}
      //       togglePurchased={props.togglePurchased}
      //     />
      //   ))}
    );
};

export default ToDoList;