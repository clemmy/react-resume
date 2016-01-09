import React, { PropTypes } from 'react';

const Language = ({ name }) => (
  <div style={style.main}>
    <div>{name}</div>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

Language.propTypes = {
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
};

export default Language;
