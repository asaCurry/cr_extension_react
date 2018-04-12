import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class EmployeeResources extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryTabs: ['Sales Tools', 'Employee Tools', 'Finance and HR'],
      employeeResources: [
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Leads and Contacts',
          description:'Lead and Contact list in SFDC',
          href: 'https://na55.salesforce.com/00v?fcf=00Bf1000004Mzip',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'My Dashboard',
          description:'Default lead dashboard in SFDC',
          href: 'https://www.google.com',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        }
      ]
    };
    EmployeeResources.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }
    render () {
      return (
        <div className="main-content-inner">
          <div className="employee-resources-grid">
            {this.state.employeeResources.map((content, index) =>
              <a href={content.href}>
                <div className="resource-item" >
                    <h3>{content.header}</h3>
                    <p>{content.description}</p>
                </div>
              </a>
            )}
          </div>
        </div>
    );
  }
}
