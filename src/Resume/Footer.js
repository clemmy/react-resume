import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const Footer = () => (
  <section style={style.main}>
    <div>link</div>
    <div>link</div>
    <div>link</div>
  </section>
);

const style = {
  main: {
    flex: '1 1 auto',
    marginTop: '0.6rem',
    padding: '0.25rem',
    borderTop: '1px solid black',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default Footer;
