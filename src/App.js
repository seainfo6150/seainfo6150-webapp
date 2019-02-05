import React, { Component } from 'react';
import Text from './Text';
import ArticleTable from './ArticleTable';
import articles from './data/articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Text />
        <ArticleTable articles={articles} />
      </div>
    );
  }
}

export default App;
