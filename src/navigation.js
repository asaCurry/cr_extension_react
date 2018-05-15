import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
constructor(props) {
  super(props);

  Navigation.propTypes = {
    navItems: PropTypes.array.isRequired,
    handleNavClick: PropTypes.func.isRequired,
    handleCurrentIndex: PropTypes.func.isRequired
  }

}

render() {

  return (
      <ul>
         {this.props.navItems.map((item, index) => {
           if (item.comingSoon  ) {
             return (
               <li key={index + 'navIndex'}
                 className="coming-soon"
                 >
                 <a>{item.name}</a>
                 <p>Coming Soon</p>
               </li>
             );
          } else if ( item.new  ) {
            return (
              <li key={index + 'navIndex'}
                className={(item.isActive ? 'nav-select new-nav' : 'new-nav')}
                onClick={() => this.props.handleNavClick(index) }
                >
                <a>{item.name}</a>
                <p >New!</p>
              </li>
            );
           } else {
             return (
               <li key={index + 'navIndex'}
                 className={(item.isActive ? 'nav-select' : '')}
                 onClick={() => this.props.handleNavClick(index) }
                 >
                 <a>{item.name}</a>
               </li>
             );
           }
         }
        )}
      </ul>
    );
  }
}
