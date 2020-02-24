import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css'

const ArticleImage = props => {
    return (
        <img className={styles.image}
            src={props.info.image._url}
            alt={props.info.title}>
        </img>
    );
};

ArticleImage.propTypes = {
    info: PropTypes.object.isRequired
};

export default ArticleImage;