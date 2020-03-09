import React from 'react';
import PropTypes from 'prop-types';
import styles from './SlugButton.module.css'

const SlugButton = props => {
    return (
        <button className={styles.button} onClick={() => alert(props.info.slug)}>
            {props.info.author}
        </button>
    );
};

SlugButton.propTypes = {
    info: PropTypes.object.isRequired
};

export default SlugButton;