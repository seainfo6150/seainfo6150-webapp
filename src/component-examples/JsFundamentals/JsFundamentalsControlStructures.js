import React, { useState } from "react";
import styles from "../examples.module.css";


const JsFundamentalsControlStructures = () => {
  const [value, setValue] = useState();
  const [fruit, setFruit] = useState();

  function onClickNegativeOrPositive(e, value) {
    e.preventDefault();
    setValue(value);
  }

  function onClickFruit(e, fruit) {
    e.preventDefault();
    setFruit(fruit);
  }

  function onClickDoWhile(e, startNumber, endNumber) {
    e.preventDefault();
    doWhileCount(startNumber, endNumber);
  }

  function onClickWhile(e, startNumber, endNumber) {
    e.preventDefault();
    whileCount(startNumber, endNumber);
  }

  function onClickInfinitLoop(e, startNumber) {
    e.preventDefault();
    infiniteLoop(startNumber);
  }

  function negativeOrPositive(value) {
    let result;
    if (value > 0) {
      result = `${value} is positive!`;
    } else if (value < 0) {
      result = `${value} is negative!`;
    } else if (value === 0) {
      result = `${value} is 0!`;
    } else {
      result = `${value} doesn't seem to be a number!`;
    }
    return result;
  }

  function whichFruit(fruit) {
    let result;
    switch (fruit) {
      case "Apple":
        result = "I love apples!";
        break;
      case "Banana":
        result = "I love bananas!";
        break;
      case "Cherry":
        result = "I love cherries!";
        break;
      default:
        result = "I hate all fruit!";
        break;
    }
    return result;
  }

  async function doWhileCount(startNumber, endNumber) {
    let count = startNumber;
    do {
      count += 1;
      console.log("Count: ", count);
    } while (count < endNumber);
  }

  function whileCount(startNumber, endNumber) {
    let count = startNumber;
    while (count < endNumber) {
      count += 1;
      console.log("Count: ", count);
    }
  }

  function infiniteLoop(startNumber) {
    let count = startNumber;
    while (count) {
      count += 1;
      console.log("Count: ", count);
    }
  }

  return (
    <section>
      <header><h2>Control structures</h2></header>
      <form>
        <fieldset>
          <legend>Negative or positive?</legend>
          <label htmlFor="negative200">
            <button
              id="negative200"
              onClick={(e) => onClickNegativeOrPositive(e, -200)}
            >
              -200
            </button>
          </label>
          <label htmlFor="tenThousand">
            <button
              id="tenThousand"
              onClick={(e) => onClickNegativeOrPositive(e, 10000)}
            >
              10000
            </button>
          </label>
          <label htmlFor="zero">
            <button id="zero" onClick={(e) => onClickNegativeOrPositive(e, 0)}>
              0
            </button>
          </label>
          <label htmlFor="april">
            <button
              id="april"
              onClick={(e) => onClickNegativeOrPositive(e, "April")}
            >
              April
            </button>
          </label>

          <dl>
            <div className={styles.definitionPair}>
              <dt>negative or positive?</dt>
              <dd>{value && negativeOrPositive(value)}</dd>
            </div>
          </dl>
        </fieldset>
        <fieldset>
          <legend>Which fruit?</legend>
          <label htmlFor="apple">
            <button id="apple" onClick={(e) => onClickFruit(e, "Apple")}>
              Apple
            </button>
          </label>
          <label htmlFor="banana">
            <button id="banana" onClick={(e) => onClickFruit(e, "Banana")}>
              Banana
            </button>
          </label>
          <label htmlFor="cherry">
            <button id="cherry" onClick={(e) => onClickFruit(e, "Cherry")}>
              Cherry
            </button>
          </label>
          <label htmlFor="lime">
            <button id="lime" onClick={(e) => onClickFruit(e, "Lime")}>
              Lime
            </button>
          </label>
          <dl>
            <div className={styles.definitionPair}>
              <dt>how do you feel about fruit?</dt>
              <dd>{fruit && whichFruit(fruit)}</dd>
            </div>
          </dl>
        </fieldset>
        <fieldset>
          <legend>Counting!</legend>
          <p>Check out the console for these</p>
          <label htmlFor="doWhileZero">
            <button id="doWhileZero" onClick={(e) => onClickDoWhile(e, 0, 100)}>
              do...while count from 0 to 100
            </button>
          </label>
          <label htmlFor="doWhileHundred">
            <button
              id="doWhileHundred"
              onClick={(e) => onClickDoWhile(e, 100, 100)}
            >
              do...while count from 100 to 100
            </button>
          </label>

          <label htmlFor="whileZero">
            <button id="whileZero" onClick={(e) => onClickWhile(e, 0, 100)}>
              while count from 0 to 100
            </button>
          </label>
          <label htmlFor="whileHundred">
            <button
              id="whileHundred"
              onClick={(e) => onClickWhile(e, 100, 100)}
            >
              while count from 100 to 100
            </button>
          </label>
          <label htmlFor="infiniteLoop">
            <button
              id="infiniteLoop"
              onClick={(e) => onClickInfinitLoop(e, 1)}
            >
              while count from 1 to infinity (infinite loop)
            </button>
          </label>
        </fieldset>
      </form>
    </section>
  );
};

export default JsFundamentalsControlStructures;
