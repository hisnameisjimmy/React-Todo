import React from 'react';

const ToDo = props => {

    const clickHandler = () => {
        this.props.completedTask(props.item.id);
    };

    return <p onClick={clickHandler}>{props.item.task}</p>;
};

export default ToDo;