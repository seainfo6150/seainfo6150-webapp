import React from 'react';
import HelloUser from './component-examples/HelloUser.js';
import AddingMachine from './component-examples/AddingMachine.js';

const Demo = () => {
  const user = {
    'foo-bar': "baz",
    name: "April Bingham",
    email: "a.bingham@northeastern.edu",
  }

  const userArray = [
    'bar',
    'foo',
    'baz'
  ];

  console.log('USER ARRAY', userArray[1]);

  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      const element = user[key];
      console.log('ELEMENT', element);
    }
  }

  userArray.forEach(element => {
    console.log('ELEMENT', element);
  });

  return (
    <div className="Demo">
      {/* {user.name}
      {user.email}
      {user['foo-bar']} */}
      {/* <HelloUser user={user} /> */}
      <AddingMachine startNum={0}>Title of the Adding Machine</AddingMachine>
    </div>
  );
}

export default Demo;
