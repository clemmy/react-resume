import React, { PropTypes } from 'react';
import List from '../../ui/List';
import ProjectHeading from './ProjectHeading';

const Project = ({ name, tools, link, achievements }) => {
  const items = link ? [...achievements, createLink(link)] : achievements;

  return (
    <div style={style.main}>
      <ProjectHeading name={name} tools={tools} />
      <List items={items} style={style.list}/>
    </div>
  );
};

function createLink(link) {
  return `Link: ${link}`;
}

const style = {
  main: {
    margin: '1rem 0 0 0.2rem',
  },
  list: {
    margin: 0,
  },
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
