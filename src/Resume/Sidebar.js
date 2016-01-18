import React, { PropTypes } from 'react';
import Languages from './Languages';
import SidebarList from './SidebarList';
import ContactLinks from './ContactLinks';
import HorizontalRule from '../ui/HorizontalRule';
import Education from './Education';

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <div>
      <ContactLinks data={data.links} />
      <HorizontalRule />
      <Languages data={data.languages} />
      <SidebarList title="Libraries" items={data.libraries} />
      <SidebarList title="Frameworks" items={data.frameworks} />
      <SidebarList title="Tools" items={data.tools} />
      <HorizontalRule />
    </div>
    <div>
      <Education
        university={data.education.university}
        duration={data.education.duration} />
    </div>
  </section>
);

const style = {
  main: {
    width: '34%',
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
