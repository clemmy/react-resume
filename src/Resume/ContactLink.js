import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const ContactLink = ({ display, link, faClass, name }) => (
  <div style={style.main}>
    <i className={faClass} style={style.icon}></i><Link to={link}>{display}</Link>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '4px'
  },
  icon: {
    display:'inline-block',
    fontSize: '1.6rem',
    lineHeight: '1.6rem',
    width: '1.6rem',
    height: '1.6rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'rgba(77, 100, 141, 1)'
  },
};

ContactLink.propTypes = {
  display: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  faClass: PropTypes.string.isRequired,
};

export default ContactLink;
