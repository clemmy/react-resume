import React, { PropTypes } from 'react';
import Link from '../ui/Link';

const Footer = ({links}) => (
  <section style={style.main}>
    {
      links.map((link) => (
        <div key={link.name}>
          <i className={link.faClass} style={style.icon}></i><Link to={link.link}>{link.display}</Link>
        </div>
      ))
    }
  </section>
);

const style = {
  main: {
    flex: '1 1 auto',
    marginTop: '1rem',
    padding: '1rem 1rem 0 1rem',
    borderTop: '1px solid black',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon: {
    display:'inline-block',
    fontSize: '1.2rem',
    lineHeight: '2rem',
    width: '1.6rem',
    height: '2.4rem',
    textAlign: 'center',
    verticalAlign: 'middle',
    color: 'rgba(77, 100, 141, 1)',
    border: '0px solid rgba(77, 100, 141, 1)',
    borderRadius: '60px',
    padding: '4px'
  },
};

export default Footer;