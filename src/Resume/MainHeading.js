import React, { PropTypes } from 'react';

const MainHeading = ({ title }) => (
  <h1 style={style.main}>{title.toUpperCase()}</h1>
);

const style = {
  main: {
    marginBottom: '0.6rem',
    color: 'rgba(21, 44, 85, 1)',
    padding: '0.25rem',
    borderBottom: '1px solid rgba(21, 44, 85, 1)'
  },
};

MainHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainHeading;
