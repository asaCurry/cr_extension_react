import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Campaigns extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recentArray: [
        {
          header:'How to Find Malicious Insiders',
          description:'Tackling Insider Threats via Behavioral Indicators | April 26th',
          href: 'https://cybereason.my.salesforce.com/701f1000001l79r',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        },
        {
          header:'Catch Me if You Can: Pentesting vs. APTs',
          description:'Cybereason Webinar | May 8th',
          href: 'https://cybereason.my.salesforce.com/701f1000001l7LJ',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
        }
      ],
      secondaryArray: [
        {
          header:'Campaign Calendar',
          description:'Master Calendar for all upcoming Campaigns',
          href: 'https://drive.google.com/drive/folders/1eHISv9UYgOVHlmnhTF5TFnK_aomnLEPm',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'DHT Airtable',
          description:'Master calendar for Deep Hunting Tour events',
          href: 'https://drive.google.com/drive/folders/1PpEOfqpwcVkXiTog8RkVsXBgyGvETDx',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        }
      ]
    };
    Campaigns.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }
    render () {
      return (
        <div className="main-content-inner">
          <div className="content-container recentCampaigns">
            <h2>Recent Campaigns</h2>
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
