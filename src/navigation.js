import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props =>
  <ul>
     {props.navItems.map((item, index) =>
      <li key={index}>
        <a>{item.name}</a>
      </li>
    )}
  </ul>;

  Navigation.propTypes = {
    navItems: PropTypes.array.isRequired
  }

  export default Navigation
