import React, { PropTypes } from 'react';

const SidebarList = ({ items }) => (
  <div style={style}>
    {items.map((item, key) => (
      <span key={key}>
        {item + ((key === items.length - 1) ? '' : ', ')}
      </span>
    ))}
  </div>
);

const style = {
  breakWord: 'normal',
  textAlign: 'justify',
  textJustify: 'inter-word',
};

SidebarList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarList;
