import React, { Component } from "react";

class Form extends Component {
  state = {
    content: ""
  };

  changeText = text => {
    this.setState({
      content: text.target.value
    });
  };

  submitText = e => {
    e.preventDefault();
    this.props.AddTask(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitText}>
          <label>Add new task:</label>
          <input
            type="text"
            onChange={this.changeText}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default Form;
