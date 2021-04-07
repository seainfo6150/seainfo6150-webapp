import React from "react";
import HTMLText from "../HTMLText/HTMLText.jsx";
import styles from "./DynamicArticle.module.css";
import { Link } from "react-router-dom";
import ArticleImage from "../ArticleImage/ArticleImage";

const DynamicArticle = (props) => {
  return (
    <div>
      <Link to="/articlelist" className={styles.back}>
        Back
      </Link>
      <article className={styles.article}>
        <header>
          <ArticleImage
            url={props.article.image._url}
            title={props.article.title}
          />
          <h1>{props.article.title}</h1>
          <address>
            by {props.article.author} (
            <a href={`mailto:${props.article.authorEmail}`}>
              {props.article.authorEmail}
            </a>
            )
            <br />
          </address>
          <time dateTime={props.article.timeStamp}>
            {props.article.displayDate}
          </time>
        </header>
        <HTMLText text={props.article.text} />
      </article>
    </div>
  );
};

export default DynamicArticle;
