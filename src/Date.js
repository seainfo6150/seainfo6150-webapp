import React from 'react';
import PropTypes from 'prop-types';

const Date=({date}) => (

    <time>{date}</time>
);

Date.propTypes={
    date:PropTypes.string.isRequired
};

export default Date;