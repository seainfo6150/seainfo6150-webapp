import React, { Component } from 'react';
import List from './List';
import Name from './Name';
import Article from './Article'

class App extends Component {
  render() {

    const title="The Statue of Liberty's torch heads to new museum";
    const datetime="2018-11-22";
    const date="November 22, 2018";
    const author="Kate Farley";
   

    return (
      <div className="App">
       <Article author={author} title={title} datetime={datetime} date={date}/>
      </div>
    );
  }
}

export default App;
