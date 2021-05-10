import React, { PropTypes } from "react";
import About from "./About";
import Languages from "./Languages";
import SidebarList from "./SidebarList";
import ContactLinks from "./ContactLinks";
import Education from "./Education";

const Sidebar = ({ data }) => (
  <section style={style.main}>
    <div>
      <ContactLinks data={data.links} />
      <About about={data.about} />
      <Languages data={data.languages} />
      <SidebarList title="+ TECHNOLOGIES" items={data.technologies} />
      <SidebarList
        title="+ INTERESTS"
        items={data.interests}
        separator={"<br/>"}
      />
    </div>
    <div>
      <Education
        university={data.education.university}
        degree={data.education.degree}
        duration={data.education.duration}
      />
    </div>
  </section>
);

const style = {
  main: {
    flex: "1 0 auto",
    width: "30%",
    backgroundColor: "rgba(118,136,169,0.125)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0 1.2rem 1.2rem 1.2rem",
    color: "rgb(21, 44, 85)",
  },
};

Sidebar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Sidebar;
