import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render() {

    const array = [
      { firstName: "April", lastName: "Bingham" },
      { firstName: "Tom", lastName: "Cruise" },
      { firstName: "Mickey", lastName: "Mouse" }
    ];

    return (
      <div className="App">
        <List list={array} />
      </div>
    );
  }
}

export default App;
