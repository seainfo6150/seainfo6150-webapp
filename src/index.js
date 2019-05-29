import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from "./Demo";

import * as serviceWorker from './serviceWorker';
const querystring = window.location.search || '';
console.log('querystring', querystring);

if (querystring.toLowerCase() === "?demo=true") {
    ReactDOM.render(<Demo />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
