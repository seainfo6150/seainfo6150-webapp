import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      <header>
        <h1>{props.article.title}</h1>
        <address>
          By {props.article.author}&nbsp;
          <a href={`mailto:${props.article.authorEmail}`}>
            {props.article.authorEmail}
          </a>
          <br/>
        </address>
        <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
