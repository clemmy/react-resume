import React, { PropTypes } from 'react';
import Companies from './Companies';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ companies }) => (
  <section style={style.main}>
    <Companies data={companies} />
  </section>
);

const style = {
  main: {
    minHeight: '100%',
    width: '72.5%',
    padding: '2rem 1rem',
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
