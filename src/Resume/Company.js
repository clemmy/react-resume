import React, { PropTypes } from "react";
import List from "../ui/List";
import CompanyHeading from "./CompanyHeading";
import Section from "../ui/Section";

const Company = ({ color, name, title, achievements = [], date }) => {
  return (
    <div>
      <CompanyHeading
        company={name}
        title={title}
        date={date}
        style={{
          paddingLeft: "0.5rem",
        }}
      />

      <Section color={color}>
        <List items={achievements} />
      </Section>
    </div>
  );
};

const style = {
  children: {
    padding: "0 2rem 0.25rem 1.25rem",
  },
};

Company.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Company;
