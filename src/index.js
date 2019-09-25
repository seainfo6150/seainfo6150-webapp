import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from "./Demo";

const querystring = window.location.search || '';

if (/demo/.test(querystring.toLowerCase())) {
    ReactDOM.render(<Demo querystring={querystring} />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}