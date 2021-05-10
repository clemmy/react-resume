import React, { PropTypes } from "react";
import SidebarHeading from "./SidebarHeading";

const About = ({ about }) => (
  <section style={style.main}>
    <SidebarHeading>+ ABOUT</SidebarHeading>
    <div style={style.content}>{about}</div>
  </section>
);

const style = {
  main: {
    margin: "0.4rem 0",
  },
  content: {
    breakWord: "normal",
    textAlign: "left",
  },
};

About.propTypes = {
  about: PropTypes.string.isRequired,
};

export default About;
