import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import toDoStore from "./routes/Store";

ReactDOM.render(
  <Provider store={toDoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
