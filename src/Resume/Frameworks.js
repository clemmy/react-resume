import React, { PropTypes } from 'react';
import SidebarList from './SidebarList';

const Frameworks = ({ data }) => (
  <section style={style.main}>
    <h1>Frameworks</h1>
    <SidebarList items={data} />
  </section>
);

Frameworks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const style = {
  main: {
    margin: '1rem 0',
  },
};

export default Frameworks;
