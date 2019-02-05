import React, { Component } from 'react';
import Article from './Article';
import ArticleTable from './ArticleTable';

let articleData=require('./data/article.json');

class App extends Component {
  render() {

    return (
      <div className="App">
      <ArticleTable articles = {articleData}/>
      </div>
    );
  }
}

export default App;
