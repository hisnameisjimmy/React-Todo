import React from 'react';
import ToDoForm from "./components/TodoComponents/TodoForm.js";
import ToDoList from "./components/TodoComponents/TodoList.js";

let data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoitems: data
    };
  }

  addTask = taskName => {
    this.setState({
      todoitems: [
        ...this.state.todoitems,
        {
          task: taskName,
          id: Date.now()
        }
      ]
    });
  };

  completedTask = (taskId) => {
    console.log(taskId);
    this.setState({
     todoitems: this.state.todoitems.map(item => {
        if (item.id === taskId) {
          console.log(item.purchased)
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
    })
  });
  };

  clearTasks = () => {
    console.log("clear tasks");
    this.setState({
      todoitems: this.state.todoitems.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask} clearTasks={this.clearTasks} />
        <ToDoList
          todoitems={this.state.todoitems}
          completedTask={this.completedTask}
        />
      </div>
    );
  }
};

export default App;
