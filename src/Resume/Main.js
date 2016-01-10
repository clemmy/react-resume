import React, { PropTypes } from 'react';
import Companies from './Companies';
import MainHeading from './MainHeading';
import Project from './Project';
import Section from '../ui/Section';

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ companies, projects }) => (
  <section style={style.main}>
    <MainHeading title="Work Experience" />
    <Companies data={companies} />
    <MainHeading title="Projects" />
      {projects.map((project, key) => (
        <Section color="rgb(77, 100, 141)" key={key}>
          <Project
            name={project.name}
            tools={project.tools}
            achievements={project.achievements}
            link={project.link}
            key={key} />
        </Section>
      ))}
  </section>
);

const style = {
  main: {
    minHeight: '100%',
    width: '73%',
    padding: '2rem 1rem',
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
