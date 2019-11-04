import React from 'react';

const ToDo = props => {

    const clickHandler = () => {
        props.completedTask(props.item.id);
    };

    const completedState = props.item.completed;
    
    if (completedState) {
        return (
          <strike>
            <p onClick={clickHandler}>{props.item.task}</p>
          </strike>
        );
    } else {
        return <p onClick={clickHandler}>{props.item.task}</p>;
    };
};

export default ToDo;