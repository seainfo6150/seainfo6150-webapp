import React, { useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = ({ articles }) => {
  const [btnState, SetBtnState] = useState({});

  let keys = [];
  for (const property in articles) {
    keys.push(property);
  }
  let displayContent;

  const handleClick = (id) => {
    SetBtnState({ ...btnState, [id]: !btnState[id] });
  };

  if (articles != null) {
    displayContent = (
      <div className={styles.container}>
        {keys.map((item, id) => {
           return <div key={id} className={styles.content}>
             <div className={styles.info}>
              <h1>{articles[item].title}</h1>
              <p>{btnState[id] ? articles[item].shortText : null}</p>
              <p className={styles.date}>
                {btnState[id] ? articles[item].displayDate : null}
              </p>
              </div>
              <ArticleTextToggleButton
              className={styles.btnContainer}
                onClick={() => handleClick(id)}
                buttonText={btnState[id] ? "Show Less" : "Show More"}
              ></ArticleTextToggleButton>
              
          </div>

        })}
      </div>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      {displayContent}
    </section>
  );
  //   return <div>h</div>;
};

export default ArticleListItem;
