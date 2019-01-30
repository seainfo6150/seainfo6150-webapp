import React from 'react';
import PropTypes from 'prop-types';

const Date=({date}) => (

    <h2 align = "center">{date}</h2>
);

Date.propTypes={
    date:PropTypes.string.isRequired
};

export default Date;