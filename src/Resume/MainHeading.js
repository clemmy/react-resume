import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    // margin: '0 0 1rem 0',
    color: 'rgba(21, 44, 85, 1)',
    padding: '0.25rem',
    borderBottom: '1px solid rgba(21, 44, 85, 1)'
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
