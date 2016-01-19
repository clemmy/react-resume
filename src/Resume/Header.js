import React, { PropTypes } from 'react';

const Header = ({ firstName, lastName, program }) => {

  const { nickname, term } = program;

  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        <span style={style.span}>{firstName.toUpperCase()}</span>
        <span style={style.span}>&nbsp;</span>
        <span style={style.span}>{lastName.toUpperCase()}</span>
      </h1>
      <span style={style.program}>
        {term} {nickname}
      </span>
    </section>
  );
};

const style = {
  main: {
    padding: '6px 0 6px 24px',
    // color: 'white',
    flex: '1 1 auto',
    fontSize: '1.6rem',
    // background: 'rgba(47, 152, 175, 1)',
    background: 'rgba(118, 136, 169, 0.125)',
    marginBottom: '1.5em'
  },
  h1: {
    display: 'block',
    fontSize: '3.4rem',
  },
  program: {
    fontSize: '1.2rem'
  },
  span: {
    display: 'inline-block',
  }
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  program: PropTypes.object.isRequired,
};

export default Header;
