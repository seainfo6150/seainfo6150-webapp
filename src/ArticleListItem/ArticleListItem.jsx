import React from 'react';

const ArticleListItem = (props) => {
  const { item } = props;
  return (
    <section>
      <h2>{item.title} </h2>
      <time dateTime={item.timeStamp}> {item.displayDate} </time>
      <p>{item.shortText}</p>
    </section>
  );
};

export default ArticleListItem;
