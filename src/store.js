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

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      const addState = [{ text: action.text, id: Date.now() }, ...state];
      return addState;
    case DELETE:
      const delState = state.filter((todos) => todos.id !== action.id);
      return delState;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

export const actionCreators = {
  addToDo,
  delToDo,
};

export default store;
