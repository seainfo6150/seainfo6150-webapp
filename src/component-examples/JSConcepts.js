import React from "react";
import PropTypes from "prop-types";

const JSConcepts = ({ user }) => {
  const userArray = ["bar", "foo", "baz"];

  // view the console to see this logging out
  console.log("USER ARRAY", userArray[1]);

  // view the console to see this logging out
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      const element = user[key];
      console.log("ELEMENT", element);
    }
  }

  // view the console to see this logging out
  userArray.forEach(element => {
    console.log("ELEMENT", element);
  });

  return (
    <section>
      <header>JSConcepts component</header>
      <dl>
        <dt>Name:</dt>
        <dd>{user.name}</dd>
        <dt>Email:</dt>
        <dd>{user.email}</dd>
        <dt>Baz</dt>
        <dd>{user["foo-bar"]}</dd>
      </dl>
    </section>
  );
};

JSConcepts.propTypes = {
  user: PropTypes.object.isRequired
};

export default JSConcepts;
