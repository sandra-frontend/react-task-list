import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTasks } from "../../actions";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderList() {
    return this.props.tasks.map(task => {
      return (
        <div className="item" key={task.id}>
          {this.renderAdmin(task)}
          <i className="large middle aligned box checkmark sign icon" />
          <div className="content">
            <Link to={`/tasks/${task.id}`} className="header">
              {task.title}
            </Link>
          </div>
          <div className="description">{task.description}</div>
        </div>
      );
    });
  }

  renderAdmin(task) {
    if (task.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`tasks/edit/${task.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`tasks/delete/${task.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/tasks/new" className="ui button primary">
            Create Tasks
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Tasks</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.tasks),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchTasks }
)(TaskList);
