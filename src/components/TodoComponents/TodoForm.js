import React from 'react';

class ToDoForm extends React.Component {

    constructor() {
        super();
        this.state = {
          taskName: ""
        };
    }

    changeHandler = event => {
        this.setState({
            taskName: event.target.value
        });
    };

    submitTask = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskName);
    };

    render() {
        return (
          <div>
            <form onSubmit={this.submitTask}>
              <input
                onChange={this.changeHandler}
                value={this.state.taskName}
              />
              <button>Add</button>
            </form>
            <button onClick={this.props.clearTasks}>Clear</button>
          </div>
        );
    }
};

export default ToDoForm;