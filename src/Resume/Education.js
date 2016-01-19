import React, { PropTypes } from 'react';
import SidebarHeading from './SidebarHeading';

const Education = ({ university, duration, degree }) => (
  <section style={style.main}>
    <SidebarHeading align="left">+ EDUCATION</SidebarHeading>
    <div style={{
      ...style.text,
      fontWeight: 'bold',
    }}>{university}</div>
    <div>{degree}</div>
    <div style={style.text}>{duration}</div>
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
  university: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default Education;
