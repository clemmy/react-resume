import React, { PropTypes } from 'react';
import Project from './Project';
import List from '../ui/List';
import CompanyHeading from './CompanyHeading';
import Section from '../ui/Section';

const Company = ({ color, name, title, projects = [], achievements = [], date, location }) => {
  return (
    <div>
      <CompanyHeading company={name} title={title} date={date} location={location} style={{
        paddingLeft: '0.5rem',
      }}/>

      <Section color={color}>
        <List items={achievements} />
        {projects.map((project, key) => (
          <Project
            name={project.name}
            achievements={project.achievements}
            tools={project.tools}
            key={key} />
        ))}
      </Section>
    </div>
  );
};

const style = {
  children: {
    padding: '0 2rem 0.25rem 1.25rem',
  },
};

Company.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Company;
