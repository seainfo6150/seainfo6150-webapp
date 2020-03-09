import React from "react";
import PropTypes from "prop-types";

const JSConcepts = ({ user }) => {
  let userName = user.name;
  userName = user.getName();
  const stringSingleQuotes = 'This is a string';
  const stringDoubleQuotes = "This is a string that's got an apostrophe";
  const stringWithValue = `This is a string with ${userName} embedded`;

  // FUNCTION
  console.log('******************* FUNCTION')
  const addTwoNumbers = (a, b) => {
    return a + b;
  };

  let sum = addTwoNumbers(1, 2);
  console.log("SUM EQUALS", sum);
  sum = addTwoNumbers(3, 4);
  sum = addTwoNumbers(sum, 5);
  console.log("UPDATED SUM EQUALS", sum);

  // OBJECT
  console.log('******************* OBJECT')
  let anObject = {};
  anObject.value = "foo";
  console.log("anObject", anObject);

  // view the console to see this logging out
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      const element = user[key];
      console.log("ELEMENT", element);
    }
  }

  // ARRAY
  console.log('******************* ARRAY')
  const userArray = ["foo", "bar", "baz"];
  // view the console to see this logging out
  userArray.forEach(element => {
    console.log("ELEMENT", element);
  });
  // view the console to see this logging out
  console.log("USER ARRAY", userArray[1]);
  console.log(`USERARRAY HAS ${userArray.length} ELEMENTS`);

  userArray.push("bleem");
  console.log("UPDATED USER ARRAY", userArray);
  console.log(`USERARRAY HAS ${userArray.length} ELEMENTS`);


  // CONTROL STATEMENTS
  console.log('******************* CONTROL STATEMENTS');
  let negativeOrPositive = (value) => {
    if (value > 0) {
      console.log(`${value} is positive!`);
    } else if (value < 0) {
      console.log(`${value} is negative!`);
    } else if (value === 0) {
      console.log(`${value} is 0!`);
    } else {
      console.log(`${value} doesn't seem to be a number!`);
    }
  }
  negativeOrPositive(-200);
  negativeOrPositive(10000);
  negativeOrPositive(0);
  negativeOrPositive("April");

  let printNumberRange = (a,b) => {
    if (b < a) {
      console.log("b < a will cause an infinite loop!");
    } else {
      let currentNumber = a;
      while (currentNumber <= b) {
        console.log(currentNumber);
        currentNumber = currentNumber + 1;
      }
    }
  }
  printNumberRange(0,100);


  return (
    <section>
      <header>JSConcepts component</header>
      <dl>
        <dt>Name:</dt>
        <dd>{userName}</dd>
        <dt>Email:</dt>
        <dd>{user.email}</dd>
        <dt>Baz</dt>
        <dd>{user["foo-bar"]}</dd>
        <dt>stringDoubleQuotes</dt>
        <dd>{stringDoubleQuotes}</dd>
        <dt>stringSingleQuotes</dt>
        <dd>{stringSingleQuotes}</dd>
        <dt>stringWithValue</dt>
        <dd>{stringWithValue}</dd>
      </dl>
    </section>
  );
};

JSConcepts.propTypes = {
  user: PropTypes.object.isRequired
};

export default JSConcepts;
