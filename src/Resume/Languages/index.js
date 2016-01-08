import React, { PropTypes } from 'react';
import Language from './Language';
import * as Styles from '../../styles';

const Languages = ({ data: languages }) => (
  <section style={style.main}>
    <h1 style={style.heading}>Languages</h1>
    <div>
      {languages.map((language, index) => (
        <Language
          name={language.name}
          proficiency={language.proficiency}
          key={index} />
      ))}
    </div>
  </section>
);

const style = {
  main: {
    margin: '1rem 0',
  },
  heading: {
    ...Styles.h1,
  },
};

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Languages;
