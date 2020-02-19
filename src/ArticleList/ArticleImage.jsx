import React from "react";
import styles from './ArticleImage.module.css'

const ArticleImage = ({article}) => {
    return(
        <div>
            <p>
                <img className = {styles.img} src = {article.image._url} alt = {article.title}/>
            </p>
        </div>
    )
}

export default ArticleImage;