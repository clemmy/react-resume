import React, { PropTypes } from 'react';
import Asterisk from '../ui/Asterisk';
import * as Styles from '../styles';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        {name},
      </h1>
      <h2>
        the {term} {nickname}<Asterisk />
      </h2>
    </section>
  );
};

const style = {
  main: {
    marginBottom: '3rem',
  },
  h1: {
    fontSize: '2.25rem',
  },
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
