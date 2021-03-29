import React from "react";
import style from "./ArticleImage.module.css";

const ArticleImage = (props) => {
    const { url, 
            title
        } = props;
    return (
    <div className={style.articleImageWrapper}>
        <img src={url} className={style.articleImage} alt=""></img>
    </div>)
}

export default ArticleImage;