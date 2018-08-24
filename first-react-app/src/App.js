import React, { Component } from "react";
import Tasks from "./Tasks";
import Form from "./Form";

class App extends Component {
  state = {
    tasks: [
      { id: 1, content: "workout" },
      { id: 2, content: "shopping" },
      { id: 3, content: "shooting stars" },
      { id: 4, content: "swimming" }
    ]
  };
  DeleteTask = id => {
    let tasks = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({
      tasks: tasks
    });
  };

  AddTask = task => {
    task.id = Math.random();
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks: tasks
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="center card">My tasks</h1>
        <Tasks tasks={this.state.tasks} DeleteTask={this.DeleteTask} />
        <Form AddTask={this.AddTask} />
      </div>
    );
  }
}

export default App;
