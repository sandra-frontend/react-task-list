import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask } from "../../actions";
import TaskForm from "./TaskForm";

class TaskCreate extends Component {
  onSubmit = formValues => {
    this.props.createTask(formValues);
  };
  render() {
    return (
      <div>
        <i class="add icon"></i>
        <h3>Create Task</h3>
        <TaskForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createTask }
)(TaskCreate);
