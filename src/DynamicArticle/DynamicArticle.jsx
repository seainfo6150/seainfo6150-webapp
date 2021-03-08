import React from 'react';
import { Link } from 'react-router-dom';
import HTMLText from '../HTMLText/HTMLText';

const DynamicArticle = (props) => {
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
      <Link to={'/articlelist'}> Back </Link>
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
