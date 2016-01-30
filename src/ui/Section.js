import React, { PropTypes } from 'react';

const Section = ({ color, children }) => (
  <section style={{
    marginTop: '-0.8rem',
    // borderTop: '0.1px solid ' + color,
    marginBottom: '-0.4rem',
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
