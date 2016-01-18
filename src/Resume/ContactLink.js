import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const ContactLink = ({ display, link, name }) => (
  <div style={style.main}>
    <span style={style.name}>{name}: </span><Link to={link}>{display}</Link>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
  },
};

ContactLink.propTypes = {
  display: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactLink;
