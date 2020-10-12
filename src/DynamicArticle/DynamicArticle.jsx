import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import "./DynamicArticle.css";
const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <h1>{props.article.title}</h1>
      <div>
        <i>
          {props.article.author}
          <u className="email">({props.article.authorEmail})</u>
        </i>
      </div>
      <time>{props.article.displayDate}</time>
      <div>{props.article.timeStamp}</div>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
