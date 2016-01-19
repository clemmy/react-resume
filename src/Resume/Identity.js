import React, { PropTypes } from 'react';

const Identity = ({ firstName, lastName, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        <span style={style.span}>{firstName.toUpperCase()}</span>
        <span style={style.span}>&nbsp;</span>
        <span style={style.span}>{lastName.toUpperCase()}</span>
      </h1>
      <h2 style={style.h2}>
        {term} {nickname}
      </h2>
    </section>
  );
};

const style = {
  main: {
    marginBottom: '1.5rem',
  },
  h1: {
    display: 'block',
    fontSize: '1.8rem',
  },
  h2: {
    fontSize: '1.4rem'
  },
  span: {
    display: 'inline-block',
  }
};

Identity.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
