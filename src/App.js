import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import ArticleList from "./Article/ArticleList.jsx";
import ArticleListItem from "./ArticleListItem/ArticleListItem"; 
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let responseJson;
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return  (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            const slug = match.params.slug;
            const article = fetchedData ? fetchedData[slug] : null;
            return <DynamicArticle article={article}></DynamicArticle>;
          }}
        />
        <Route>
          <ArticleList articles={fetchedData}></ArticleList>
        </Route>
      </Switch>
    </div>
  );
}

export default App;