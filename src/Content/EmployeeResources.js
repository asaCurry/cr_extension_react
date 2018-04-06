import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class EmployeeResources extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentArray: [
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
        }
      ],
      secondaryArray: [
        {
          header:'Regional Dossiers',
          description:'Google Drive containing updated Dossiers',
          href: 'https://drive.google.com/drive/folders/1PpEOfqpwcVkXiTog8RkVsXBgyGvETDx',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'Account 360',
          description:'Google Drive containing updated Dossiers',
          href: 'https://drive.google.com/drive/folders/1eHISv9UYgOVHlmnhTF5TFnK_aomnLEPm',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
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
          <div className="content-container recentCampaigns">
            <h2>Recent Items</h2>
            {this.state.recentArray.map((content, index) =>
              <ContentCard content={content} cardKey={'recent' + index} />
            )}
          </div>
          <div className="content-container resources">
            <h2>Files and Folders</h2>
              {this.state.secondaryArray.map((content, index) =>
              <ContentCard content={content} cardKey={'secondary' + index} />
              )}
          </div>
        </div>
    );
  }
}
