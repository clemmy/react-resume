import React, { PropTypes } from 'react';

const List = ({ items, style }) => (
  <ul style={{
    ...defaultStyles,
    ...style,
  }}>
    {items.map((item, key) => (
      <li key={key}>
        { item }
      </li>
    ))}
  </ul>
);

const defaultStyles = {
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.object,
};

export default List;
