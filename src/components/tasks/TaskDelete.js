import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import history from "../../history";
import { fetchTask, deleteTask } from "../../actions";
import { Link } from "react-router-dom";

class TaskDelete extends React.Component {
  componentDidMount() {
    return this.props.fetchTask(this.props.match.params.id);
  }
  renderActions() {
    const { id } = this.props.match.params;
    // Use of React.Fragment, you can short this to <> </>
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTask(id)}
          className="ui primary button"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.task) {
      return (
        <div>
          <i className="large middle aligned icon trash" />
          Are you sure you want to delete this task?
        </div>
      );
    }
    return (
      <div>
        <i className="large middle aligned icon trash" />
        Are you sure you want to delete task with title: {
          this.props.task.title
        }{" "}
        ?
      </div>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Task"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTask, deleteTask }
)(TaskDelete);
