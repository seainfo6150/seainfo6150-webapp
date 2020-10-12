import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import "./DynamicArticle.css";
const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <header>
        <h1>{props.article.title}</h1>
        <div>
          <i>
            {props.article.author}
            <u className="email">({props.article.authorEmail})</u>
          </i>
        </div>
        <div>
          <time datetime={props.article.displayDate}>
            {props.article.displayDate}
          </time>
        </div>
        <div>
          <time dateTime={props.article.timeStamp}>
            {props.article.timeStamp}
          </time>
        </div>
      </header>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
