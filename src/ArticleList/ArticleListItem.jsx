import React from 'react';
import PropTypes from 'prop-types';

const ArticleListItem = props => (
    <section>
        <h2>{props.article.title}</h2>
        <p>{props.article.shortText}</p>
        <time dateTime = {props.article.pubYear}>{props.article.pubDate}</time>
        <button onClick = {() => alert(props.article.slug)}>{"show article slug"}
        </button>     
    </section>
);


ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
};

export default ArticleListItem;
