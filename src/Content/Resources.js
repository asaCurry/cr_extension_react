import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Resources extends Component {

  constructor(props) {
    super(props);


    this.state = {
      recentArray: [
        {
          header:'PPT Template',
          description:'Up-to-Date Starter template and slides for presentations',
          href: 'https://www.cybereason.com/hubfs/Chrome%20Extension/assets/2018_04_20_CR_Powerpoint_Template.potx',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'PPT | Business Proposals',
          description:'Business proposal deck for sales use',
          href: 'https://www.cybereason.com/hubfs/Chrome%20Extension/assets/Cybereason%20Business%20Proposal_V1.6.pdf',
          imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'SKO Materials',
          description:'Decks and recordings from SKO 2018',
          href: 'https://drive.google.com/drive/folders/150HOLS8UH7B46aTHJX3ED4PNT7hsCeMh',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
        },
        {
          header:'Case Studies',
          description:'Case studies listings on cybereason.com',
          href: 'https://www.cybereason.com/insights/tag/case-study',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/697037-youtube-512.png'
        },
        {
          header:'Cybereason Blog',
          description:'Case studies listings on cybereason.com',
          href: 'https://www.cybereason.com/blog',
          imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
        }
      ],
      secondaryArray: [
        {
          header:'Crowdstrike Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/58e28579f3d80658d90c662f',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/crowdstrike.png'
        },
        {
          header:'Cylance Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/5886591860376b0d3f523d7f',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Cylance_Logo2x-t=1469471792187.png'
        },
        {
          header:'Carbon Black Battlecard',
          description:'Competitive Selling Information on Crowdstrike',
          href: 'https://cybereason.highspot.com/items/5886594f60376b02ce78d455',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Carbon-Black-Tag-RGB-full-color.png'
        },
        {
          header:'Tanium Battlecard',
          description:'Competitive Selling Information on Tanium',
          href: 'https://cybereason.highspot.com/items/5aec4dd3af772d6be72c619b',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Tanium_Logo_FullColor_Positive.png'
        },
        {
          header:'SentinelOne Battlecard',
          description:'Competitive Selling Information on SentinelOne',
          href: 'https://cybereason.highspot.com/items/5aec4e01af772d7a6b508f74',
          imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/SentinelOne-Logo-TM-rgb.svg'
        }
      ]
    };
    Resources.propTypes = {
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
            <h2>Files and folders</h2>
            {this.state.recentArray.map((content, index) =>
              <ContentCard content={content} cardKey={'recent' + index} />
            )}
          </div>
          <div className="content-container resources">
            <h2>Competitve Intel</h2>
              {this.state.secondaryArray.map((content, index) =>
              <ContentCard content={content} cardKey={'secondary' + index} />
              )}
          </div>
        </div>
    );
  }
}
