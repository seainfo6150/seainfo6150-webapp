import React from "react";

const List = (props) => {
  const myList = props.list;

  return <div></div>;
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
      
  })).isRequired,
};
export default List;
