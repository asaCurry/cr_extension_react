import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewBusinessMeeting from './ProcessSteps/NewBusinessMeeting';
export default class SalesProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subContentRoutes: [
        {
          subRoute: NewBusinessMeeting
        },
        {
          header:'My Leads and Contacts',
          description:'Lead and Contact list in SFDC',
          href: 'https://na55.salesforce.com/00v?fcf=00Bf1000004Mzip',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        }
      ]
    };
    SalesProcess.propTypes = {
      navItems: PropTypes.array.isRequired,
      salesProcessIndex: PropTypes.number.isRequired
    }
  }
    render () {

      const RenderSubContent = this.state.subContentRoutes[this.props.salesProcessIndex].subRoute ;
      return (
        <RenderSubContent navItems={this.props.navItems}
          />
    );
  }
}
