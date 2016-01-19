import React, { PropTypes } from 'react';
import Link from './Link';

const List = ({ items, style }) => (
  <ul style={{
    ...defaultStyles,
    ...style,
  }}>
    {
      items.map((item, key) => {
        let isLink = (item.substr(0, 6) === 'Link: ');
        let url = item.split(' ')[1];
        return (
          isLink ?
          <li key={key}>
            <span>Link:</span><Link to={url}>{url}</Link>
          </li> :
          <li key={key} dangerouslySetInnerHTML={{__html: item}}>
          </li>
        );
      })
    }
  </ul>
);

const defaultStyles = {
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.object,
};

export default List;
