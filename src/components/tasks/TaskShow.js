import React from "react";
import { connect } from "react-redux";

import { fetchTask } from "../../actions";

class TaskShow extends React.Component {
  componentDidMount() {
    return this.props.fetchTask(this.props.match.params.id);
  }
  render() {
    if (!this.props.task) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.task;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchTask }
)(TaskShow);
