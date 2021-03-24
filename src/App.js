import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./ArticleList/ArticleList.jsx";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? <div>You have no data!</div> : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            return fetchedData ? <DynamicArticle
              article={fetchedData[match.params.slug]}
            /> : null
          }}
        />
        <Route exact path="/articlelist">
          <ArticleList articles={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
