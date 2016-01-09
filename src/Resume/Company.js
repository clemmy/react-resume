import React, { PropTypes } from 'react';
import Project from './Project';
import List from '../ui/List';

const Company = ({ color, name, projects = [], achievements = [] }) => (
  <section style={{
    borderLeft: '0.5rem solid ' + color,
    backgroundColor: 'rgba(118, 136, 169, 0.05)',
    marginBottom: '1.5rem',
  }}>
    <h1 style={{
      backgroundColor: color,
      color: 'white',
      padding: '0.25rem',
    }}>
      {name}
    </h1>

    <div style={style.children}>
      <List items={achievements} />
      {projects.map((project, key) => (
        <Project
          name={project.name}
          achievements={project.achievements}
          tools={project.tools}
          key={key} />
      ))}
    </div>
  </section>
);

const style = {
  children: {
    padding: '0 2rem 0.25rem 1.25rem',
  },
};

Company.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Company;
