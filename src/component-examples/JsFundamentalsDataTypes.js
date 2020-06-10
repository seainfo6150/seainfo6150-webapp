/* global BigInt */
import React, { useState } from "react";

import styles from "./JsFundamentals.module.css";

const JsFundamentalsDataTypes = () => {
  const [value, setValue] = useState();

  return (
    <section>
      <header>Datatypes</header>
      <nav>
        <button onClick={() => setValue("dog")}>"dog"</button>
        <button onClick={() => setValue(100)}>100</button>
        <button onClick={() => setValue(false)}>false</button>
        <button onClick={() => setValue(null)}>null</button>
        <button onClick={() => setValue(undefined)}>undefined</button>
        <button onClick={() => setValue(({ foo: "bar" }))}>
          &#123;foo: "bar"&#125;
        </button>
        <button onClick={() => setValue(["foo"])}>&#91;"foo"&#93;</button>
        <button onClick={() => setValue(()=>function () {})}>
          function()&#123;&#125;
        </button>
      </nav>
      <dl>
        <div className={styles.definitionPair}>
          <dt>The value</dt>
          <dd>{`${typeof value === "object" ? JSON.stringify(value) : value}`}</dd>
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
