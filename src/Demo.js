import React from 'react';
import AddingMachine from './component-examples/AddingMachine.js';
import HelloUser from './component-examples/HelloUser.js';

const Demo = () => {
  return (
    <div className="Demo">
      <AddingMachine startNum={0} />
    </div>
  );
}

export default Demo;
