import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const Header = ({ firstName, middleName, lastName, title, website }) => {
  return (
    <section style={style.main}>
      <h1 style={style.h1}>
        <span style={style.bold}>{firstName.toUpperCase()}</span>
        <span style={style.nonBold}>&nbsp;</span>
        <span style={style.nonBold}>{middleName.toUpperCase()}</span>
        <span style={style.nonBold}>&nbsp;</span>
        <span style={style.bold}>{lastName.toUpperCase()}</span>
      </h1>
      <span style={style.program} dangerouslySetInnerHTML={{ __html: title }} />
    </section>
  );
};

const style = {
  main: {
    padding: '25px 0 1px 0',
    flex: '1 1 auto',
    fontSize: '1.6rem',
    marginBottom: '1.5rem',
    height: '9rem',
  },
  h1: {
    color: 'rgb(21, 44, 85)',
    display: 'block',
    fontSize: '3.4rem',
  },
  bold: {
    fontWeight: 'bold',
    display: 'inline-block',
  },
  nonBold: {
    fontWeight: 300,
    display: 'inline-block',
  },
  program: {
    fontSize: '1.2rem',
    display: 'block',
    marginLeft: '5px',
    marginTop: '-6px',
    marginBottom: '2rem',
    color: 'rgb(77, 100, 141)',
  },
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  website: PropTypes.object.isRequired,
};

export default Header;