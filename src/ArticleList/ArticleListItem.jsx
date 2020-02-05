import React from 'react'


const ArticleListItem = ({articlelist})=>{ 
      return (
        <html lang = "en">
          <head>
               <meta charset="UTF-8" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta http-equiv="X-UA-Compatible" content="ie=edge" />
              <title>Article</title>
          </head> 
          <body>
               <main>
                  <section>   
                    <h2>{articlelist.title}</h2>
                    <p>{articlelist.shortText}</p>
                    <p><b>Author:</b>{articlelist.author}</p>
                    <time dateTime={articlelist.pubYear}>
                    {articlelist.pubDate}
                    </time>
                    <p>
                        <button onClick = {() => alert(articlelist.slug)}>show article slug
                        </button>
                    </p>
                  </section>
                  </main>
                </body>
          </html>
      );
    
}
  
export default ArticleListItem;