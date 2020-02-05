import React from 'react'


const ArticleListItem = ({articlelist})=>{ 
      return (
        <section>
            <h2>{articlelist.title}</h2>
                <p>{articlelist.shortText}</p>
                <p><b>Author:</b>{articlelist.author}</p>
                <time dateTime={articlelist.pubYear}>
                    {articlelist.pubDate}
                </time>
                <p><button onClick  ={() => alert(articlelist.slug)}>show article slug
          </button></p>
        </section>
      );
    
}
  
export default ArticleListItem;