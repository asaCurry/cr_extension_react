import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Marketing extends Component {

  constructor(props) {
    super(props);


    this.state = {
      recentArray: [
        {
          header:'Campaign Calendar',
          description:'Master Calendar for all upcoming Campaigns',
          href: 'https://cybereason.atlassian.net/wiki/spaces/MKTG/pages/357302313/The+Campaign+Calendar',
          imgSource:'https://pbs.twimg.com/profile_images/907269120823103488/7BShure2_400x400.jpg'
        },
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
          header:'HubSpot',
          description:'Marketing CRM and Automation',
          href: 'https://app.hubspot.com/reports-dashboard/3354902/marketing',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/hubspot-sprocket-logo%20(1).png'
        },
        {
          header:'HighSpot',
          description:'Sales and Marketing Documents',
          href: 'https://cybereason.highspot.com',
          imgSource: 'https://pbs.twimg.com/profile_images/776162171331809280/-YnsVptl_400x400.jpg'
        },
        {
          header:'Linkedin',
          description:'Cybereason on LinkedIn',
          href: 'https://www.linkedin.com/company/cybereason',
          imgSource:'https://pbs.twimg.com/profile_images/614583061448036352/CBpFkPaz_400x400.png'
        },
        {
          header:'Twitter',
          description:'Cybereason on Twitter',
          href: 'https://twitter.com/cybereason',
          imgSource: 'https://pbs.twimg.com/profile_images/875087697177567232/Qfy0kRIP_400x400.jpg'
        },
        {
          header:'Facebook',
          description:'Cybereason on Facebook',
          href: 'https://www.facebook.com/Cybereason',
          imgSource:'https://pbs.twimg.com/profile_images/3513354941/24aaffa670e634a7da9a087bfa83abe6_400x400.png'
        },
        {
          header:'Youtube',
          description:'Cybereason on Youtube',
          href: 'https://www.youtube.com/channel/UCOm7AaB0HiNH4Phe66sK0Ew',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/697037-youtube-512.png'
        }
      ]
    };
    Marketing.propTypes = {
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
            <h2>Campaigns</h2>
            {this.state.recentArray.map((content, index) =>
              <ContentCard content={content} key={'recent' + index} />
            )}
          </div>
          <div className="content-container resources">
            <h2>Tools and Social Media</h2>
              {this.state.secondaryArray.map((content, index) =>
              <ContentCard content={content} key={'secondary' + index} />
              )}
          </div>
        </div>
    );
  }
}
