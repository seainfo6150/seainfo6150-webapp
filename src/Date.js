import React from 'react';
import PropTypes from 'prop-types';

const Date=({ dateTime , date}) => (

    <time datetime={dateTime}>{date}</time>
);

Date.propTypes={
    dateTime:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
};

export default Date;