import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import { Link } from "react-router-dom";
import style from "./DynamicArticle.module.css";

const DynamicArticle = (props) => {
  const { article = {} }= props;
  
  if (!article || Object.keys(article).length === 0) {
    return (
      <p>Invalid slug</p>
    )
  }
  const { 
          title,
          author, 
          authorEmail,
          timeStamp,
          displayDate,
          text
        } = article;
      
  return (
    <div className="DrnamicArticleWrapper">
      <div>
        <Link to="/articleList" className={style.backBtn}>BACK</Link>
      </div>
      <div className={style.articleWrapper}> 
        <article >
          <header>
            <h1>{ title }</h1>
            <address>
              By { author }&nbsp;
              <a href={`mailto:${ authorEmail }`}>
                { authorEmail }
              </a>
              <br/>
            </address>
            <time dateTime={ timeStamp }>{ displayDate }</time>
          </header>
          <HTMLText text={ text } />
        </article>
      </div>
    </div>


  );
};

export default DynamicArticle;
