import React from 'react';


const ArticleListItem = ({article}) => {
  
  return (
    <div>
      <article>
        <header>
          <h1>{article.title}</h1>
        </header>
      <section>
        <p>{article.shortText}</p>
        <time datetime={article.pubYear}>{article.pubDate}</time>
        <button onClick={() => alert(`${article.slug}`)}>
        show article slug
        </button>
      </section>
      </article>
    </div>
  );
}

export default ArticleListItem;