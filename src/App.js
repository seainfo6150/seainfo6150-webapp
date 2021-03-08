import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import DynamicArticle from './DynamicArticle/DynamicArticle.jsx';
import { isEmpty } from 'lodash';
import ArticleList from './ArticleList/ArticleList.jsx';

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let responseJson;
      const data = await fetch('http://demo1390455.mockable.io/articles');
      responseJson = await data.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route
          exact
          path={`/articlelist/:slug`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            const slug = match.params.slug;
            return <DynamicArticle article={fetchedData[slug]} />;
          }}
        />
        <Route exact path="/articlelist">
          <ArticleList article={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
