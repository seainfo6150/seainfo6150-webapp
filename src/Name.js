import React from 'react';
import PropTypes from 'prop-types';

const Name = ({ firstName, lastName }) => (
  <div>{firstName} {lastName}</div>
);

Name.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default Name;
