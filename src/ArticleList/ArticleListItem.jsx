import React from "react";

const ArticleListItem = props => {
    return (         
        <div>
            <head>
                <title>Articles</title>
            </head>
            <body>
                <h2>{props.article.title}</h2>
                <p>{props.article.shortText}</p>
                <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>             
                <button onClick = {() => alert(props.article.slug)}>show article slug</button>             
            </body>

        </div>       
    )
}
export default ArticleListItem;