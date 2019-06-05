import React from 'react';
import JSConcepts from './component-examples/JSConcepts.js';
import HelloUser from './component-examples/HelloUser.js';
import AddingMachine from './component-examples/AddingMachine.js';
import CSSModule from './component-examples/CSSModule/CSSModule.jsx';
import CSSModule2 from './component-examples/CSSModule2/CSSModule2.jsx';

const Demo = () => {
  const user = {
    "foo-bar": "baz",
    name: "April Bingham",
    email: "a.bingham@northeastern.edu"
  };

  return (
    <div className="Demo">
      <JSConcepts user={user} />
      <hr />
      <HelloUser user={user} />
      <hr />
      <AddingMachine startNum={0}>Title of the Adding Machine</AddingMachine>
      <hr />
      <CSSModule />
      <CSSModule2 />
    </div>
  );
}

export default Demo;
