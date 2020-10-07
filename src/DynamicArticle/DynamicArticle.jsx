import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* this is an example of how you insert props into a react component */}
      <div>{props.article.title}</div>
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
