import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const ReduxRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default ReduxRouter;
