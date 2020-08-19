import React, { useState } from "react";
import styles from "../examples.module.css";


const JsFundamentalsOperators = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [comparisonResult, setComparisonResult] = useState(false);
  const [logicResult, setLogicResult] = useState();

  return (
    <section className={styles.section}>
      <header><h2>Operators</h2></header>

      <section className={styles.section}>
        <header>Mathematical</header>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber + 2)}
              value=" + 2 (add)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber - 2)}
              value=" - 2 (subtract)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber * 2)}
              value=" * 2 (multiply)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber / 2)}
              value=" / 2 (divide)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber % 2)}
              value=" % 2 (modulo)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber(currentNumber ** 2)}
              value=" ^ 2 (exponent)"
            />
          </li>
        </ul>
        <section className={styles.section}>
          <div>currentNumber: {currentNumber}</div>
        </section>
      </section>

      <section className={styles.section}>
        <header>Comparison</header>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult(currentNumber < 2)}
              value="currentNumber < 2"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult(currentNumber <= 2)}
              value="currentNumber <= 2"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult(currentNumber >= 2)}
              value="currentNumber >= 2"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult(currentNumber > 2)}
              value="currentNumber > 2"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult(currentNumber === 2)}
              value="currentNumber === 2"
            />
          </li>
        </ul>
        <section className={styles.section}>
          <div>result: {JSON.stringify(comparisonResult)}</div>
        </section>
      </section>

      <section className={styles.section}>
        <header>Operators with strings</header>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setCurrentNumber("2" + "2")}
              value=" '2' + '2' (addition of strings)"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult("2" === 2)}
              value="'2' === 2"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setComparisonResult("2" == 2)}
              value="'2' == 2"
            />
          </li>
        </ul>
        <section className={styles.section}>
          <div>currentNumber: {JSON.stringify(currentNumber)}</div>
          <div>result: {JSON.stringify(comparisonResult)}</div>
        </section>
      </section>

      <section className={styles.section}>
        <header>Logical</header>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!true)}
              value="!true"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!false)}
              value="!false"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!1)}
              value="!1"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!0)}
              value="!0"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!!"house")}
              value="!!'house'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!!null)}
              value="!!null"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!!0)}
              value="!!0"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!![])}
              value="!![]"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(!!{})}
              value="!!{}"
            />
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult("dog" || "boy" || "girl")}
              value="'dog' || 'boy' || 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(false || "boy" || "girl")}
              value="false || 'boy' || 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(false || null || "girl")}
              value="false || null || 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(false || null || undefined)}
              value="false || null || undefined"
            />
          </li>
        </ul>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult("dog" && "boy" && "girl")}
              value="'dog' &amp;&amp; 'boy' &amp;&amp; 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult(false && "boy" && "girl")}
              value="false &amp;&amp; 'boy' &amp;&amp; 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult("dog" && null && "girl")}
              value="'dog' &amp;&amp; null &amp;&amp; 'girl'"
            />
          </li>
          <li className={styles.listItem}>
            <input
              type="button"
              onClick={() => setLogicResult("dog" && "boy" && undefined)}
              value="'dog' &amp;&amp; 'boy' &amp;&amp; undefined"
            />
          </li>
        </ul>
        <section className={styles.section}>
          <div>result: {`${logicResult}`}</div>
        </section>
      </section>
    </section>
  );
};

export default JsFundamentalsOperators;
