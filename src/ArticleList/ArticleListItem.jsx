import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton";
import ArticleImage from "./ArticleImage";

const ArticleListItem = props => {
  return (
    <div className={styles.container}>
     <div className={styles.img}><ArticleImage article={props.article}/></div>
     <div className={styles.other}>
      <h3 className={styles.title}>{props.article.title}</h3>
      <p>{props.article.shortText}</p>
      <time className={styles.pubDate} dateTime={props.article.pubYear}>{props.article.pubDate}</time>
      <div className={styles.button}><SlugButton slug={props.article.slug} buttonText={props.article.author} /></div>
    </div>
    </div>
  );
};

export default ArticleListItem;
