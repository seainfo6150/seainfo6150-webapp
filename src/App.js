import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList/ArticleList';
import NewsHeader from './NewsHeader';
import NewsFooter from './NewsFooter';

const App = ({ articles }) => {
  return (
    <div>
      <header>
        <NewsHeader />
      </header>
      <section>
        <ArticleList articles = {articles} />
      </section>
      <footer>
        <NewsFooter />
      </footer>
    </div>
  );
}

App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  })).isRequired
}
export default App;
