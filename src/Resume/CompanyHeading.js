import React, { PropTypes } from "react";

const CompanyHeading = ({ style, company, title, date }) => (
  <div style={{ ...defaultStyles.main, ...style }}>
    <div style={defaultStyles.company}>
      <div style={defaultStyles.companyName}>{company}</div>
      <div style={defaultStyles.title}>{title}</div>
    </div>
    <div style={defaultStyles.date}>{date}</div>
  </div>
);

const defaultStyles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "0.75rem",
  },
  company: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "rgba(77, 100, 141, 1)",
    padding: "0.25rem",
    display: "flex",
    flexDirection: "column", // Make children stack vertically
  },
  title: {
    display: "inline-block",
    fontSize: "1rem",
    color: "rgba(78, 78, 78 , 1)",
    padding: "0.05rem",
    fontWeight: 550,
  },
  date: {
    fontSize: "0.9rem",
    color: "rgba(77, 100, 141, 0.75)",
    padding: "0.25rem",
    marginTop: "-1.5rem", // Adjust the vertical position by changing the marginTop value
  },
};

CompanyHeading.propTypes = {
  style: PropTypes.object.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CompanyHeading;