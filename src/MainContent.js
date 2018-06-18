import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentSelector from './contentSelector';
import DropdownPage from './contentSelectorMB';

import Sales from './Content/Sales';
import Marketing from './Content/Marketing';
import General from './Content/General';
import PeopleOps from './Content/PeopleOps';
import Product from './Content/Product';

export default class MainContent extends Component {

constructor(props) {
    super(props);

  MainContent.propTypes = {
    navItems: PropTypes.array.isRequired,
    currentIndex: PropTypes.number.isRequired,
    salesProcessIndex: PropTypes.number.isRequired,
    handleSubNavClick: PropTypes.func.isRequired
  }

}


render(){
    const RenderMe = this.props.navItems[this.props.currentIndex].route;

    return (
      <div className="mainContentWrapper">
        <div className="subheader-selector">
          {this.props.navItems
            .filter(item => item.isActive )
            .map((item, index) => {

              if (item.subContent !== undefined) {

                return (
                    // <ContentSelector subItems={item.subContent.subContentOptions}/>
                    <DropdownPage
                      subItems={item.subContent.subContentOptions}
                      handleSubNavClick={this.props.handleSubNavClick}
                      salesProcessIndex={this.props.salesProcessIndex}
                      />
                );
              } else {
                return (
                  <h2 key={index}>{item.name}</h2>
                )
              }
            }
          )}
        </div>
        <RenderMe navItems={this.props.navItems} salesProcessIndex={this.props.salesProcessIndex} />
      </div>
    );
  }
}
