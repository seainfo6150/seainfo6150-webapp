import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const App = ({ article }) => {
  return (
    <article>
      <Article article = {article} />
    </article>
  );
}

App.propTypes = {
  article: PropTypes.shape({
    "title": PropTypes.string.isRequired,
    "shortText": PropTypes.string.isRequired,
    "pubDate": PropTypes.string.isRequired,
    "pubYear": PropTypes.string.isRequired,
    "author": PropTypes.string.isRequired
  }).isRequired
}
export default App;
