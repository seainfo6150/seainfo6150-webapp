import React from 'react';
import PropTypes from 'prop-types';
import SlugButton from './SlugButton';
import ArticleImage from './ArticleImage';
import styles from './ArticleListItem.module.css';

const Item = props => {
    return (
        <div className={styles.body} >
            <ArticleImage info={props.article}></ArticleImage>
            <div className={styles.textArea}>
                <h1 className={styles.header3}> {props.article.title}</h1>
                <p className={styles.shortText}>{props.article.shortText}</p>
                <time className={styles.time} dateTime={props.article.pubDate}>
                    {props.article.pubDate}
                </time><br />
                <SlugButton info={props.article}>
                    show article slug
                </SlugButton>
            </div>
        </div>
    );
};

Item.propTypes = {
    article: PropTypes.object.isRequired
};

export default Item;