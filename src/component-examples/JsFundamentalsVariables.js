import React from "react";
import styles from "./JsFundamentals.module.css";

const JsFundamentalsVariables = () => {
  let letVariable;
  const constVariable = "just try to change me";

  // check out the console for the results!
  function updateLetVariable(value) {
    try {
      letVariable = value;
      console.log("letVariable is now ", letVariable)
    } catch (error) {
      console.log("Error!", error);
    }
  }
  function updateConstVariable(value) {
    try {
      constVariable = value;
      console.log("constVariable is now ", constVariable)
    } catch (error) {
      console.log("Error!", error);
    }
  }
 
  return (
    <section>
      <ul className={styles.list}>
        <li><button onClick={() => updateLetVariable(2)}>letVariable = 2</button></li>
        <li><button onClick={() => updateLetVariable(10)}>letVariable = 10</button></li>
        <li><button onClick={() => updateLetVariable("house")}>letVariable = house</button></li>
      </ul>
      <ul className={styles.list}>
        <li><button onClick={() => updateConstVariable(2)}>constVariable = 2</button></li>
        <li><button onClick={() => updateConstVariable(10)}>constVariable = 10</button></li>
        <li><button onClick={() => updateConstVariable("house")}>constVariable = house</button></li>
      </ul>
    </section>
  );
};

export default JsFundamentalsVariables;
