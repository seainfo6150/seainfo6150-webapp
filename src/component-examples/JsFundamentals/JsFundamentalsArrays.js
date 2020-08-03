import React, { useState } from "react";
import styles from "../examples.module.css";


const words = [
  "foo",
  "bar",
  "baz",
  "bleem",
  "woot",
  "blah",
  "wut",
  "zeem",
  "fizgig",
  "doot",
];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * 10)];
};

const JsFundamentalsArrays = () => {
  const [myArray, setMyArray] = useState([]);
  const [result, setResult] = useState();

  function pushIt(myArray) {
    const result = myArray.push(getRandomWord());
    setMyArray(myArray);
    setResult(result);
  }

  function popIt(myArray) {
    const result = myArray.pop();
    setMyArray(myArray);
    setResult(result);
  }

  function shiftIt(myArray) {
    const result = myArray.shift();
    setMyArray(myArray);
    setResult(result);
  }

  function unshiftIt(myArray) {
    const result = myArray.unshift(getRandomWord());
    setMyArray(myArray);
    setResult(result);
  }

  function forEachIt(myArray) {
    const result = myArray.forEach((element, index) => {
      myArray[index] = `${element}${index}`;
    });
    setMyArray(myArray);
    setResult(result);
  }

  function mapIt(myArray) {
    const result = myArray.map((element, index) => {
      return `${element}${index}`;
    });
    setMyArray(myArray);
    setResult(result);
  }

  return (
    <section>
      <header><h2>Arrays</h2></header>
      <ul className={styles.list}>
        <li className={styles.listItem}><button onClick={() => pushIt(myArray)}>Push it</button></li>
        <li className={styles.listItem}><button onClick={() => popIt(myArray)}>Pop it</button></li>
        <li className={styles.listItem}><button onClick={() => unshiftIt(myArray)}>Unshift it</button></li>
        <li className={styles.listItem}><button onClick={() => shiftIt(myArray)}>Shift it</button></li>
        <li className={styles.listItem}><button onClick={() => forEachIt(myArray)}>forEach it</button></li>
        <li className={styles.listItem}><button onClick={() => mapIt(myArray)}>map it</button></li>
      </ul>

      <p>The element at index 0 is {JSON.stringify(myArray[0])}</p>
      <p>The element at index 3 is {JSON.stringify(myArray[3])}</p>
      <dl>
        <div className={styles.definitionPair}>
          <dt>myArray</dt>
          <dd>
            {JSON.stringify(myArray)} ({myArray.length})
          </dd>
        </div>
        <div className={styles.definitionPair}>
          <dt>result</dt>
          <dd>{JSON.stringify(result)}</dd>
        </div>
      </dl>
    </section>
  );
};

export default JsFundamentalsArrays;
