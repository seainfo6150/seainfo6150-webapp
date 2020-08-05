import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./Article/Article";

function App() {
  let { url } = useRouteMatch();

  return (
    <div className="App">
      <Switch>
        <Route path={`${url}/articlelist`}></Route>
        <Route path={`${url}/articlelist/:slug`}></Route>
        <Route>
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
