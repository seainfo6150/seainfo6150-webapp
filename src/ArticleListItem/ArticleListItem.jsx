import React,  { useState }  from "react";
import { Link } from "react-router-dom";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton";
import style from "./ArticleListItem.module.css"
const ArticleListItem = (props) => {
    const { article } = props;
    const { 
            slug,
            title,
            timeStamp,
            displayDate,
            shortText
        } = article;
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
