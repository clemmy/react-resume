import React, { PropTypes } from 'react';

const Section = ({ name, children }) => (
  <section>
    <h1 style={style.heading}>{transformName(name)}</h1>
    <div style={style.body}>{children}</div>
  </section>
);

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const style = {
  heading: {
    backgroundColor: 'rgba(123, 188, 255, 0.1)',
    padding: '0.5rem 1.5rem',
  },
  body: {
    padding: '0.5rem 1.5rem',
  },
};

function transformName(name) {
  return name.split(/[-\s]/).map(capitalize).join(' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

export default Section;
