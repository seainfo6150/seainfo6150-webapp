import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ArticleListItem.module.css";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const ArticleListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/articlelist/${props.article.slug}`}
            >
              {props.article.title}
            </Link>
          </h2>
          {isTextShowing && (
            <div className={styles.text}>
              <time className={styles.time} dateTime={props.article.timeStamp}>
                {props.article.displayDate}
              </time>
              <p>{props.article.shortText}</p>
            </div>
          )}
        </div>
        <ArticleTextToggleButton
          buttonText={isTextShowing ? "Show less" : "Show more"}
          onClick={onClick}
        />
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
