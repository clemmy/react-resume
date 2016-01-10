import React, { PropTypes } from 'react';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        {name}
      </h1>
      <h3 style={style.h3}>
        {term} {nickname}
      </h3>
    </section>
  );
};

const style = {
  main: {
    marginBottom: '1.5rem',
  },
  h1: {
    textAlign: 'center',
  },
  h3: {
    textAlign: 'center',
  },
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
