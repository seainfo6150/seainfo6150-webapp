import React from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/articlelist`}></Route>
        <Route
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            console.log("this slug", match.params.slug)
            return <div>Component</div>
          }}
        />
        <Route>
          <Article />
        </Route>
      </Switch>
    </div>
  );
}

export default App;