import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import TaskList from "./tasks/TaskList";
import TaskCreate from "./tasks/Task";
import TaskShow from "./tasks/TaskShow";
import TaskEdit from "./tasks/TaskEdit";
import TaskDelete from "./tasks/TaskDelete";
import history from "../history";
import "./App.css";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TaskList} />
            <Route path="/tasks/new" component={TaskCreate} />
            <Route path="/tasks/edit/:id" component={TaskEdit} />
            <Route path="/tasks/delete/:id" component={TaskDelete} />
            <Route path="/tasks/:id" component={TaskShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

/* 449416080960-5olcj92feror84c058tunb3coq7pv4st.apps.googleusercontent.com*/
