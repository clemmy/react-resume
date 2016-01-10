import React, { PropTypes } from 'react';

const CompanyHeading = ({ style, company, title }) => (
  <div style={{ ...defaultStyles.main, ...style }}>
    <div style={defaultStyles.company}>
      {company}
    </div>
    <div style={defaultStyles.title}>
      {title}
    </div>
  </div>
);

const defaultStyles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '0.75rem',
  },
  company: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'white',
    padding: '0.25rem',
  },
  title: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.75)',
    padding: '0.25rem',
  },
};

CompanyHeading.propTypes = {
  style: PropTypes.object.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CompanyHeading;
