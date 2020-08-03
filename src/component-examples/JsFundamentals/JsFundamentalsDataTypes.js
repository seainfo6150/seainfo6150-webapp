/* global BigInt */
import React, { useState } from "react";

import styles from "../examples.module.css";


const JsFundamentalsDataTypes = () => {
  const [value, setValue] = useState();

  return (
    <section>
      <header><h2>Datatypes</h2></header>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button onClick={() => setValue("dog")}>"dog"</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(100)}>100</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(false)}>false</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(null)}>null</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(undefined)}>undefined</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue({ foo: "bar" })}>
            &#123;foo: "bar"&#125;
          </button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(["foo"])}>&#91;"foo"&#93;</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setValue(() => function () {})}>
            function()&#123;&#125;
          </button>
        </li>
      </ul>
      <dl>
        <div className={styles.definitionPair}>
          <dt>The value</dt>
          <dd>{`${
            typeof value === "object" ? JSON.stringify(value) : value
          }`}</dd>
        </div>
        <div className={styles.definitionPair}>
          <dt>The type</dt>
          <dd>{typeof value}</dd>
        </div>
      </dl>
    </section>
  );
};

export default JsFundamentalsDataTypes;
