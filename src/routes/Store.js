import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const delToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = ["안녕"], action) => {
  switch (action.type) {
    case ADD:
      const addState = [{ text: action.text, id: Date.now() }];
      return addState;
    case DELETE:
      const delState = state.filter((todos) => todos.id !== action.id);
      return delState;
    default:
      return state;
  }
};

const toDoStore = createStore(reducer);

export default toDoStore;
