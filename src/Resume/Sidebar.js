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
      <Languages data={data.languages} />
      <SidebarList title="+ LIB/FRAMEWORKS" items={data.libraries} />
      <SidebarList title="+ DATABASES" items={data.databases} />
      <SidebarList title="+ TOOLS" items={data.tools} />
      <SidebarList title="+ INTERESTS" items={data.interests} separator={'<br/>'} />
    </div>
    <div>
      <Education
        university={data.education.university}
        degree={data.education.degree}
        duration={data.education.duration} />
    </div>
  </section>
);

const style = {
  main: {
    width: '32%',
    backgroundColor: 'rgba(118,136,169,0.125)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 1.2rem 1.2rem 1.2rem',
    color: 'rgb(5, 24, 56)',
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
