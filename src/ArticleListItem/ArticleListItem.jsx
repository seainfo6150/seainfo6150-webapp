import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import style from "./ArticleListItem.module.css";
import ArticleImage from "../ArticleImage/ArticleImage";
const ArticleListItem = (props) => {
    const { article } = props;
    const { 
            slug,
            title,
            timeStamp,
            displayDate,
            shortText,
            image
        } = article;
    const url = image ? image._url : null;
    const [buttonText, setButtonText] = useState('Show more');
    const [showDetail, setShowDetail]  = useState(false);
    const handleButtonClick = () => {
        if (!showDetail) {
            setButtonText('Show less');
        }
        else {
            setButtonText('Show more');
        }
        setShowDetail(!showDetail);

    }
    return (    
    <div className={style.ArticleItemWrapper}>
        <article>
            <header>
                <ArticleImage url={url} title={title}></ArticleImage>
                <h1>
                    <Link to={`/articlelist/${slug}`} className={style.Title}>
                        {title}
                    </Link>
                </h1>
                {showDetail && 
                <div>
                    <time className={style.Date} dateTime={timeStamp}>{displayDate}</time>
                     <p>{shortText}</p>
                </div>}  
            </header>
            <ArticleTextToggleButton onClick={handleButtonClick} buttonText={buttonText}></ArticleTextToggleButton>
        </article>
    </div>)
}
export default ArticleListItem;
