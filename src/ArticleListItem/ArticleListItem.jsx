import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage.jsx";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";

const ArticleListItem = (props) => {
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <article className={styles.article}>
        <header className={styles.header}>
          <ArticleImage
            url={props.article.image._url}
            title={props.article.title}
          />
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/articlelist/${props.article.slug}`}
            >
              {props.article.title}
            </Link>
          </h2>
        </header>
        <div className={styles.wrapper}>
          {isTextShowing && (
            <div className={styles.text}>
              <p>{props.article.shortText}</p>
              <time className={styles.time} dateTime={props.article.timeStamp}>
                {props.article.displayDate}
              </time>
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
