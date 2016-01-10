import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    margin: '0 0 1rem 0',
    color: 'rgb(5, 24, 56)',
    padding: '0.25rem',
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
