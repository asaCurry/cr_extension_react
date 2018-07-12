import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Product extends Component {

  constructor(props) {
    super(props);


    this.state = {
      employeeResources: [

        {
          resourceCategory:'Product Resources',
          resourceItems: [
            {
              header:'Jira',
              description:'Product management',
              href: 'https://jira.atlassian.com/secure/Dashboard.jspa',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/jira_icon.ico'
            },
            {
              header:'17.6 Release Video',
              description:"What's New in cybereason 17.6",
              href: 'https://cybereason.tahoe.appsembler.com/dashboard',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            },
            {
              header:'Cybereason Academy',
              description:'Customer Training Portal',
              href: 'https://cybereason.tahoe.appsembler.com/dashboard',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            },
            {
              header:'Cybereason Documentation',
              description:'Library of Cybereason Product Documentation',
              href: 'https://docs.cybereason.com',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            }
          ]
        }
      ]
    };
    Product.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }
    render () {
      var competitiveStyle = {
        marginBottom: '8px',
        maxHeight: '30px'
      }
      return (
        <div className="main-content-inner">
          <div className="employee-resources-grid">
            {this.state.employeeResources.map((content, index) =>
              <div className="employee-resource-category" key={index + "-empResCat"}>
              <h3>{content.resourceCategory}</h3>
              {content.resourceItems.map( (resourceItem, index) =>
                <a href={resourceItem.href} target="_blank">

                  <div className="employee-resource-item" key={index + "-empResItem"}>
                    <img src={resourceItem.imgSource} />
                      <p>{resourceItem.header}</p>
                    <p><span className="double-chev">&raquo;</span>{resourceItem.description}</p>
                  </div>
                </a>
              )}
              </div>
            )}
          </div>
        </div>
);
  }
}
