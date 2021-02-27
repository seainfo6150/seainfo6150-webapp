import React from 'react';
import HTMLText from '../HTMLText/HTMLText';

const DynamicArticle = (props) => {
  const { title, author, authorEmail, displayDate, text } = props.article;
  return (
    <article>
      {/* add extra html with javascript attributes here */}
      <header>
        <h1>{title}</h1>
        <address>
          by {author} (<a href={authorEmail}>{authorEmail}</a>
          )
          <br />
        </address>
        <time dateTime={displayDate}>{displayDate}</time>
      </header>
      <HTMLText text={text} />
    </article>
  );
};

export default DynamicArticle;
