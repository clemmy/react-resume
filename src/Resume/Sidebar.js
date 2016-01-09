import React, { PropTypes } from 'react';
import Identity from './Identity';
import Asterisk from '../ui/Asterisk';
import Languages from './Languages';
import Frameworks from './Frameworks';
import Tools from './Tools';

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <div>
      <Identity name={data.name} program={data.program} />
      <Languages data={data.languages} />
      <Frameworks data={data.frameworks} />
      <Tools data={data.tools} />
    </div>
    <section>
      <Asterisk /> {data.program.name}
    </section>
  </section>
);

const style = {
  main: {
    width: '27.5%',
    backgroundColor: 'rgba(118,136,169,0.125)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '2rem',
    color: 'rgb(5, 24, 56)',
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
