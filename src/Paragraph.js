import React from 'react';
import PropTypes from 'prop-types';

const Paragraph=({ content}) => (

    <p>{content}</p>
);

Paragraph.PropTypes={
    content:PropTypes.string.isRequired,
};

export default Paragraph;