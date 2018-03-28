import React from 'react';
import PropTypes from 'prop-types';

const Navigation = props =>
  <ul>
     {props.navItems.map((item, index) =>

      <li key={index}
        className={(item.isActive ? 'nav-select' : '')}
        onClick={() => props.handleNavClick(index)}
        >
        <a>{item.name}</a>
      </li>
    )}
  </ul>;

  Navigation.propTypes = {
    navItems: PropTypes.array.isRequired,
    handleNavClick: PropTypes.func.isRequired
  }

  export default Navigation
