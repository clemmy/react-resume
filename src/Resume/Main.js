import React, { PropTypes } from "react";
import Companies from "./Companies";
import MainHeading from "./MainHeading";

// http://paletton.com/#uid=13I0u0kllllaFw0g0qFqFg0w0aF

const Main = ({ companies }) => (
  <section style={style.main}>
    <MainHeading title="> Select Experience" />
    <Companies data={companies} />
  </section>
);

const style = {
  main: {
    paddingRight: "1.25rem",
  },
};

Main.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
