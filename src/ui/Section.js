import React, { PropTypes } from 'react';

const Section = ({ color, children }) => (
  <section style={{
    borderTop: '0.1px solid ' + color,
    // borderBottom: '1px solid ' + color,
    borderLeft: '0.5rem solid ' + color,
    backgroundColor: 'rgba(118, 136, 169, 0.05)',
    marginBottom: '1rem',
    padding: '0.025rem 1.2rem',
  }}>
    {children}
  </section>
);

Section.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
};


export default Section;
