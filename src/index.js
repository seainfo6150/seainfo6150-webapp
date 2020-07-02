import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Demo from "./Demo";

ReactDOM.render(
  <Router>
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/demo">
        <Demo />
      </Route>
      <Route>
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
