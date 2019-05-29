import React from 'react';
import PropTypes from 'prop-types';

const App = ({ article }) => {
  return (
    <div className="App">
      
    </div>
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
