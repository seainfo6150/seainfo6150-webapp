import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from  './ArticleListItem';
import style from './ArticleList.module.css'

const ArticleList = ({ articles }) => {
    <div className="ArticalList">
        <ul className = {style.articleList}>
        {Object.values(articles).map(article => {
            <li>
                <ArticleListItem title={article.title} author={article.author} pubData={article.pubData} shortTest ={article.shortTest}/>
            </li>    
        })
        }
        </ul>
    </div>;
};

ArticalList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ArticalList;
