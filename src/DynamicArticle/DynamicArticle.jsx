import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const DynamicArticle = (props) => {
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <HTMLText text={props.article.text} />
    </article>
  );
};

export default DynamicArticle;
