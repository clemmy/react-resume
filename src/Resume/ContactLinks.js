import React, { PropTypes } from 'react';
import ContactLink from './ContactLink';

const ContactLinks = ({ data: links }) => (
  <section style={style.main}>
    <h1 style={style.heading}>+ CONTACT</h1>
    {links.map((link, key) => (
      <ContactLink
        display={link.display}
        faClass={link.faClass}
        key={key}
        link={link.link}
        name={link.name} />
    ))}
  </section>
);

const style = {
  main: {
    marginBottom: '0.2rem',
  },
  heading: {
    textAlign: 'left',
    borderBottom: '1px solid rgb(21, 44, 85)',
    padding: '0.25rem',
    marginBottom: '0.6rem',
  },
};

ContactLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactLinks;
