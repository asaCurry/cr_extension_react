import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Product extends Component {

  constructor(props) {
    super(props);


    this.state = {
      recentArray: [
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
        },
        {
          header:'Unity Design Portal',
          description:'In-House product design website',
          href: 'http://unity.cybereason.net/intro',
          imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
        }
      ],
      secondaryArray: [
        {
          header:'Jira',
          description:'Product management',
          href: 'https://jira.atlassian.com/secure/Dashboard.jspa',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
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
          <div className="content-container recentCampaigns">
            <h2>Project Management</h2>
            {this.state.recentArray.map((content, index) =>
              <ContentCard content={content} key={'recent' + index} />
            )}
          </div>
          <div className="content-container resources">
            <h2>Documentation</h2>
              {this.state.secondaryArray.map((content, index) =>
              <ContentCard content={content} key={'secondary' + index} />
              )}
          </div>
        </div>
    );
  }
}
