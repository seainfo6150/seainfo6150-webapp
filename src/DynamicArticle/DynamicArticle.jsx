import React from 'react';
import HTMLText from '../HTMLText/HTMLText';

const DynamicArticle = (props) => {
  console.log(props.article);
  const {
    title,
    author,
    authorEmail,
    displayDate,
    timeStamp,
    text,
  } = props.article;
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <address>
          by {author} (<a href={authorEmail}>{authorEmail}</a>
          )
          <br />
        </address>
        <time dateTime={timeStamp}>{displayDate}</time>
      </header>
      <HTMLText text={text} />
    </article>
  );
};

export default DynamicArticle;
