import React from "react";
import SlugButton from "./SlugButton";
import './ArticleListItem.module.css'

const ArticleListItem = props => {
    return (         
        <div>
            <head>
                <title>Articles</title>
            </head>
            <body>
                <section>
                    <h1>{props.article.title}</h1>
                    <p>{props.article.shortText}</p>
                    <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>             
                    {<SlugButton article = {props.article}/>}}
                </section>
            </body>

        </div>       
    )
}
export default ArticleListItem;