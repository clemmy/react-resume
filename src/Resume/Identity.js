import React, { PropTypes } from 'react';
import Asterisk from '../ui/Asterisk';
import * as Styles from '../styles';

const Identity = ({ name, program }) => {
  const { nickname, term } = program;
  return (
    <section style={style.main}>
      <h1 style={style.name}>
        {name}
      </h1>
      <h2 style={style.program}>
        {term} {nickname} <Asterisk />
      </h2>
    </section>
  );
};

const style = {
  name: {
    ...Styles.h1,
  },
  program: {
    ...Styles.h2,
  },
  main: {
    marginBottom: '2rem',
  }
};

Identity.propTypes = {
  name: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Identity;
