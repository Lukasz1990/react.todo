import React, { Component } from "react";
import Tasks from "./Tasks";

class App extends Component {
  state = {
    tasks: [
      { id: 1, content: "workout" },
      { id: 2, content: "shopping" },
      { id: 3, content: "shooting stars" }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1 className="center card">My tasks</h1>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
