import React, { PropTypes } from 'react';
import Language from './Language';
import SidebarHeading from '../SidebarHeading';

const Languages = ({ data: languages }) => (
  <section style={style.main}>
    <SidebarHeading>+ LANGUAGES</SidebarHeading>
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
    margin: '0.2rem 0 0.6rem 0',
  },
};

Languages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Languages;
