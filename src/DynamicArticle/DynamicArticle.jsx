import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
    <header>
      {/* this is an example of how you insert props into a react component */}
      <h1>{props.article.title}</h1>
      <address>
        by {props.article.author} (
        <a href={`mailto:${props.article.authorEmail}`}>{props.article.authorEmail}</a>)
        <br />
      </address>
      <time datetime={`${props.article.timeStamp}`}>{props.article.displayDate}</time>
    </header>
    <HTMLText text={props.article.text} />
  </article>
  );
};

export default DynamicArticle;
