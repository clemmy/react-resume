import React, { PropTypes } from 'react';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        {name}
      </h1>
      <h3>
        {term} {nickname}
      </h3>
    </section>
  );
};

const style = {
  main: {
    marginBottom: '3rem',
  },
  h1: {
    // fontSize: '2.25rem',
  },
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
