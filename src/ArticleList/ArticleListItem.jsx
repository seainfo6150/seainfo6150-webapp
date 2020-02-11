import React from "react";
import SlugButton from './SlugButton';
import "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
    return (
         <div>
            
                <title>{props.article.title}</title>
               
            <h2>{props.article.title}</h2>   
            <p>{props.article.shortText}</p>
            <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
            <SlugButton slug = {props.article.slug} buttonText = {props.article.author}></SlugButton>

        </div>
    )
}

export default ArticleListItem;
