import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const myList = props.list;

  const mappedList = myList.map((listItem) => (
    <li key={listItem.id}>{listItem.name}</li>
  ));

  return (
    <>
      <div>
        <h2>Mapped list outside of the JSX</h2>
        <ul>{mappedList}</ul>
      </div>
      <div>
        <h2>Mapped list inside of the JSX</h2>
        <ul>
          {myList.map((listItem) => (
            <li key={listItem.id}>{listItem.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default List;
