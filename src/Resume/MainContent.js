import React, { PropTypes } from 'react';

const MainContent = ({ data }) => (
  <div style={style.main}>
  </div>
);

const style = {
  main: {
    minHeight: '100%',
    width: '72.5%',
  },
};

MainContent.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MainContent;
