import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class Sales extends Component {

  constructor(props) {
    super(props);


    this.state = {
      employeeResources: [

        {
          resourceCategory:'Quick Links',
          resourceItems: [
            {
              header:'My Dashboard',
              description:'Easy access to your Leads, Accounts & Opportunities in Salesforce',
              href: 'https://cybereason.my.salesforce.com/01Zf10000011SAC',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
            },
            {
              header:'My Leads and Contacts',
              description:'Lead and Contact list in SFDC',
              href: 'https://na55.salesforce.com/00v?fcf=00Bf1000004Mzip',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
            },
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
        },
        {
          resourceCategory:'Files and Folders',
          resourceItems: [
            {
              header:'PPT Template',
              description:'Up-to-Date Starter template and slides for presentations',
              href: 'https://www.cybereason.com/hubfs/Chrome%20Extension/assets/2018_04_20_CR_Powerpoint_Template.potx',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/2000px-Microsoft_PowerPoint_2013_logo.svg.png'
            },
            {
              header:'PPT | Business Proposals',
              description:'Business proposal deck for sales use',
              href: 'https://www.cybereason.com/hubfs/Chrome%20Extension/assets/Cybereason%20Business%20Proposal_V1.6.pdf',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/2000px-Microsoft_PowerPoint_2013_logo.svg.png'
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
              header:'Extension Static Link',
              description:'Link to share with others to download the Extension',
              href: 'https://chrome.google.com/webstore/detail/cybereason-resources-exte/abohglopajmdbaaoojikmpmjaocbephg?authuser=1',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
            },
            {
              header:'Cybereason Blog',
              description:'Case studies listings on cybereason.com',
              href: 'https://www.cybereason.com/blog',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            }
          ]
        },
        {
          resourceCategory:'Sales Tools',
          resourceItems: [
            {
              header:'Salesforce',
              description:'CRM',
              href: 'https://cybereason.my.salesforce.com',
              imgSource:'https://pbs.twimg.com/profile_images/716283264881700865/voT_NePC_400x400.jpg'
            },
            {
              header:'HighSpot',
              description:'Sales Documents',
              href: 'https://cybereason.highspot.com',
              imgSource: 'https://pbs.twimg.com/profile_images/776162171331809280/-YnsVptl_400x400.jpg'
            },
            {
              header:'Clari',
              description:'Pipeline Management',
              href: 'https://app.clari.com/dashboard',
              imgSource:'https://pbs.twimg.com/profile_images/540921773059891200/y3YSyrEl_400x400.jpeg'
            },
            {
              header:'Groove',
              description:'Email templates: Field Sales',
              href: 'https://app.grooveapp.com',
              imgSource: 'https://pbs.twimg.com/profile_images/856637648793776128/baiD4YOu_400x400.jpg'
            },
            {
              header:'Outreach.io',
              description:'Email templates: Inside Sales',
              href: 'https://accounts.outreach.io/users/sign_in',
              imgSource:'https://pbs.twimg.com/profile_images/861986015359127552/ENp5_d7w_400x400.jpg'
            },
            {
              header:'Owler',
              description:'Competitive Intelligence',
              href: 'https://www.owler.com/home',
              imgSource: 'https://pbs.twimg.com/profile_images/867423013205135360/ue4TUyTK_400x400.jpg'
            },
            {
              header:'LeadLander',
              description:'Website visitors',
              href: 'https://app.leadlander.com/dashboard',
              imgSource:'https://pbs.twimg.com/profile_images/851479255636598784/7i0HvVpP_400x400.jpg'
            },
            {
              header:'DiscoverOrg',
              description:'Contact & Company data',
              href: 'https://go.discoverydb.com',
              imgSource: 'https://pbs.twimg.com/profile_images/616276429555171328/jsHN4SJY_400x400.png'
            },
          ]
        },
        {
          resourceCategory:'Competitive Intelligence',
          resourceItems: [
            {
              header:'Crowdstrike Battlecard',
              description:'Competitive Selling Information on Crowdstrike',
              href: 'https://cybereason.highspot.com/items/58e28579f3d80658d90c662f',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/crowdstrike.png'
            },
            {
              header:'Cylance Battlecard',
              description:'Competitive Selling Information on Cylance',
              href: 'https://cybereason.highspot.com/items/5886591860376b0d3f523d7f',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Cylance_Logo2x-t=1469471792187.png'
            },
            {
              header:'Carbon Black Battlecard',
              description:'Competitive Selling Information on Carbon Black ',
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
              href: 'https://cybereason.highspot.com/items/5af57f9d3e255f66d9fae063?lfrm=urec.4',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/SentinelOne-Logo-TM-rgb.svg'
            },
            {
              header:'Microsoft Battlecard',
              description:'Competitive Selling Information on Microsoft',
              href: 'https://cybereason.highspot.com/items/5aec4e01af772d7a6b508f74',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/2000px-Microsoft_logo_(2012).svg.png'
            }
          ]
        }
      ]
    };
    Sales.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }


        render () {
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
