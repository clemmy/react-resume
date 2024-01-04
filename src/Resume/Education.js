import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ education }) => (
  <section style={style.main}>
    {/* Check if there's education data before rendering the heading */}
    {education && education.length > 0 && (
      <SidebarHeading align="left"> EDUCATION</SidebarHeading>
    )}
    {education.map((entry, index) => (
      <div key={index}>
        <div style={{ ...style.text, fontWeight: 'bold' }}>{entry.university}</div>
        <div>{entry.degree}</div>
        <div style={style.text}>{entry.duration}</div>
      </div>
    ))}
  </section>
);

const style = {
  main: {
    margin: '0.4rem 0 0 0',
  },
  text: {
    textAlign: 'left',
  },
};

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      university: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      degree: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Education;