import React from "react";
import PropTypes from "prop-types";

const Author=({author})=>(
    <div>
    <h3>{author}</h3>
    </div>
);

Author.propTypes={
    author:PropTypes.string.isRequired
};

export default Author;




