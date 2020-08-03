import React from "react";
import PropTypes from "prop-types";

const HelloUser = props => {
  return (
    <section>
      <header>HelloUser component</header>
      <button onClick={() => alert("this button was clicked")}>
        {props.user.name}
      </button>
    </section>
  );
};

HelloUser.propTypes = {
  user: PropTypes.object.isRequired
};

export default HelloUser;
