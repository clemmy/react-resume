import React, { PropTypes } from 'react';

const ProjectHeading = ({ name, tools }) => (
  <div style={style.main}>
    <div style={style.name}>{name}</div>
    <div style={style.tools}>
      {tools.join(', ')}
    </div>
  </div>
);

const style = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '0.4rem',
  },
  name: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgb(77, 100, 141)'
  },
  tools: {
    fontSize: '0.75rem',
    color: 'rgba(77, 100, 141, 0.75)',
  },
};

ProjectHeading.propTypes = {
  name: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectHeading;
