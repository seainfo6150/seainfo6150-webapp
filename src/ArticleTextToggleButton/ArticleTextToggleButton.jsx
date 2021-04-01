import React from "react";
import style from "./ArticleTextToggleButton.module.css";
const ArticleTextToggleButton = (props)=> {
    const {
        buttonText,
        onClick
    } = props;
    return (
        <div className={style.ToggleButtonWrapper}>
            <button className={style.ToggleButton} onClick={onClick}>{buttonText}</button>
        </div>
    )
}

export default ArticleTextToggleButton;