import React, { useState } from "react";
import styles from "../examples.module.css";


const JsFundamentalsFunctions = () => {
  const [addTwoNumbersResult, setAddTwoNumbersResult] = useState();
  const [negativeOrPositiveResult, setNegativeOrPositiveResult] = useState();

  function addTwoNumbers(a, b) {
    return a + b;
  }

  function submitAddTwoNumbersForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const number1 = parseInt(data.get("number1"), 10);
    const number2 = parseInt(data.get("number2"), 10);
    const result = addTwoNumbers(number1, number2);
    setAddTwoNumbersResult(result);
  }

  function negativeOrPositive(value) {
    if (value > 0) {
      return `${value} is positive!`;
    } else if (value < 0) {
      return `${value} is negative!`;
    } else if (value === 0) {
      return `${value} is 0!`;
    } else {
      return `${value} doesn't seem to be a number!`;
    }
  }

  function submitNegativeOrPositiveForm(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const value = data.get("value1");
    const parsedValue = parseInt(value, 10);
    const result = negativeOrPositive(isNaN(parsedValue) ? value : parsedValue);
    setNegativeOrPositiveResult(result);
  }

  return (
    <section>
      <header><h2>Functions</h2></header>
      <form onSubmit={submitAddTwoNumbersForm}>
        <fieldset>
          <legend>addTwoNumbers</legend>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() => setAddTwoNumbersResult(addTwoNumbers(1, 2))}
                value="addTwoNumbers(1,2)"
              />
            </li>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() => setAddTwoNumbersResult(addTwoNumbers(10, 5))}
                value="addTwoNumbers(10,5)"
              />
            </li>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() => setAddTwoNumbersResult(addTwoNumbers(0, -1))}
                value="addTwoNumbers(0,-1)"
              />
            </li>
          </ul>
          <div>
            <header>Try your own numbers!</header>
            <label htmlFor="number1">
              Number 1: <input type="text" id="number1" name="number1" />
            </label>
            <label htmlFor="number2">
              Number 2: <input type="text" id="number2" name="number2" />
            </label>
            <input type="submit" />
            <div>Result: {addTwoNumbersResult}</div>
          </div>
        </fieldset>
      </form>

      <form onSubmit={submitNegativeOrPositiveForm}>
        <fieldset>
          <legend>negativeOrPositive</legend>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() =>
                  setNegativeOrPositiveResult(negativeOrPositive(10000))
                }
                value="negativeOrPositive(10000)"
              />
            </li>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() =>
                  setNegativeOrPositiveResult(negativeOrPositive(-82))
                }
                value="negativeOrPositive(-82)"
              />
            </li>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() =>
                  setNegativeOrPositiveResult(negativeOrPositive(0))
                }
                value="negativeOrPositive(0)"
              />
            </li>
            <li className={styles.listItem}>
              <input
                type="button"
                onClick={() =>
                  setNegativeOrPositiveResult(negativeOrPositive("April"))
                }
                value='negativeOrPositive("April")'
              />
            </li>
          </ul>
          <div>
            <header>Try your own value!</header>
            <label htmlFor="value1">
              Value: <input type="input" id="value1" name="value1" />
            </label>
            <input type="submit" />
            <div>Result: {negativeOrPositiveResult}</div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default JsFundamentalsFunctions;
