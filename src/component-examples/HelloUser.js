import React from "react";
import PropTypes from "prop-types";

const HelloUser = (props) => {
    return <button onClick={() => alert('this button was clicked')}>{props.user.name}</button>;
};

HelloUser.propTypes = {
  user: PropTypes.object.isRequired
};

export default HelloUser;
