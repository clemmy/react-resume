import React, { PropTypes } from 'react';
import ContactLink from './ContactLink';

const ContactLinks = ({ data: links }) => (
  <section style={style.main}>
    <h1 style={style.heading}>Links</h1>
    {links.map((link, key) => (
      <ContactLink
        display={link.display}
        key={key}
        link={link.link}
        name={link.name} />
    ))}
  </section>
);

const style = {
  main: {
    marginBottom: '1.2rem',
  },
  heading: {
    textAlign: 'left',
    display: 'none',
  },
};

ContactLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactLinks;
