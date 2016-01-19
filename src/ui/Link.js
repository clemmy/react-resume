import React, { PropTypes } from 'react';

const Link = ({ to, children }) => {
  return (
    <a href={to} style={style}>
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

const style = {
  padding: '0 0 0 0.5rem',
  textDecoration: 'none',
  color: 'rgb(77, 100, 141)'
};

export default Link;
