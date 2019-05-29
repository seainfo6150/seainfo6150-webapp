import React from 'react';
import PropTypes from 'prop-types';

const HelloUser = ({ user }) => (
  <div></div>
);

HelloUser.propTypes = {
    user: PropTypes.object.isRequired
};

export default HelloUser;
