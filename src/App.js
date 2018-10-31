import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button/Button.js';
import BorderButton from './BorderButton/BorderButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Button />
        <Button className="WeirdButton">
          This is a button with special children
        </Button>
        <BorderButton />
        <BorderButton>
          This is a border button with special children
        </BorderButton>
      </div>
    );
  }
}

export default App;
