import React, { useState } from "react";
import HTML from "./EdgarAllenPoeArticleHTML.jsx";
import CSS from "./EdgarAllenPoeArticleCSS.jsx";
import styles from "../examples.module.css";

const EdgarAllenPoeArticle = () => {
  const [display, setDisplay] = useState("html");

  console.log('display', display)
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("html")}>HTML</button>
        </li>
        <li className={styles.listItem}>
          <button onClick={() => setDisplay("css")}>CSS</button>
        </li>
      </ul>
      <div>{display === "html" ? <HTML /> : <CSS />}</div>
    </>
  );
};

export default EdgarAllenPoeArticle;
