import React, { PropTypes } from 'react';
import SidebarList from './SidebarList';
import * as Styles from '../styles';

const Tools = ({ data }) => (
  <section style={style.main}>
    <h1 style={Styles.h1}>Tools</h1>
    <SidebarList items={data} />
  </section>
);

Tools.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const style = {
  main: {
    margin: '1rem 0',
  },
};

export default Tools;
