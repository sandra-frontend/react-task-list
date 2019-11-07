import history from "../history";
import tasks from "../apis/tasks";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TASK,
  FETCH_TASK,
  FETCH_TASKS,
  DELETE_TASK,
  EDIT_TASK
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createTask = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await tasks.post("./tasks", { ...formValues, userId });
  dispatch({ type: CREATE_TASK, payload: response.data });
  history.push("/");
};

export const fetchTasks = () => async dispatch => {
  const response = await tasks.get("/tasks");
  dispatch({ type: FETCH_TASKS, payload: response.data });
};

export const fetchTask = id => async dispatch => {
  const response = await tasks.get(`tasks/${id}`);
  dispatch({ type: FETCH_TASK, payload: response.data });
};

export const editTask = (id, formValues) => async dispatch => {
  const response = await tasks.patch(`tasks/${id}`, formValues);
  dispatch({ type: EDIT_TASK, payload: response.data });
  history.push("/");
};

export const deleteTask = id => async dispatch => {
  const response = await tasks.delete(`tasks/${id}`);
  dispatch({ type: DELETE_TASK, payload: id });
  history.push("/");
};
