import React from "react";
import imagestyle from "./ArticleImage.module.css";

const ArticleImage = (props) => {
    return (
        <img className={imagestyle.image} alt={props.title} src={props.url}/>
    );
};


export default ArticleImage;