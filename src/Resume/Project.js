import React, { PropTypes } from 'react';
import List from '../ui/List';

const Project = ({ name, tools, achievements }) => (
  <div style={style.main}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '0.25rem',
    }}>
      <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{name}</div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(77, 100, 141, 0.75)' }}>{tools.join('; ')}</div>
    </div>
    <List items={achievements} style={style.list}/>
  </div>
);

const style = {
  main: {
    margin: '1rem 0',
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
