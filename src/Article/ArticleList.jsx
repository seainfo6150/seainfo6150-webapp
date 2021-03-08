import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
    const { articles } = props;

    return !articles ? ( <p>You have no data!</p> ) : 
    (<div className="ArticleListContainer">
        <ul>
        {Object.values(articles).map((article, index) => {
            return  (
                <li key={ index }>
                    <ArticleListItem article={ article }></ArticleListItem>
                </li>
            )
        })}
        </ul>
    </div>);
}

export default ArticleList;