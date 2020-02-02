import React from 'react';
import ArticleList from "./ArticleList/ArticleList";
import articles from "./data/articles.json";

function App() {
  return (
    <div className="App">
      <ArticleList articles={Object.values(articles)} />
    </div>
  );
}

export default App;
