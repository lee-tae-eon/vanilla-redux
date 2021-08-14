import { createStore } from "redux";

const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const delTodo = (id) => {
  return {
    type: DEL_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DEL_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDelTodo = (event) => {
  const {
    target: {
      parentNode: { id },
    },
  } = event;
  store.dispatch(delTodo(parseInt(id)));
};

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener("click", dispatchDelTodo);

    span.innerText = toDo.text;
    li.appendChild(span);
    li.appendChild(button);
    li.id = toDo.id;
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
};

form.addEventListener("submit", handleSubmit);
