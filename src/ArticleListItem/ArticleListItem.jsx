import React from "react";

const ArticleListItem = (props) => {
    const { article } = props;
    const { title,
            timeStamp,
            displayDate,
            shortText
        } = article;
    return (    
    <div className="ArticleWrapper">
        <article>
            <header>
                <h1>{title}</h1>
                <time dateTime={timeStamp}>{displayDate}</time>
                <p>{shortText}</p>
            </header>
        </article>
    </div>)
}
export default ArticleListItem;
