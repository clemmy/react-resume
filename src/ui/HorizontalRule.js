import React from 'react';

const HorizontalRule = () => (
  <hr style={style} />
);

const style = {
  border: 'none',
  height: '2px',
  backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))',
};

export default HorizontalRule;
