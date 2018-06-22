import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class General extends Component {

  constructor(props) {
    super(props);


    this.state = {
      employeeResources: [
        {
          resourceCategory:'Useful Links',
          resourceItems: [
            {
              header:'Cybereason Org Chart',
              description:'Up-to-date internal org chart',
              href: 'https://app.pingboard.com/s/5Y6j4rujmm0YiTGI6z8UTKgnzOBxcGe2wrKS67QY5xbzgC9rwdloLpz0WTPWB1z9seQhZfs8qHclRT4oB9PZfw/org_chart',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            },
            {
              header:'Global Calendar',
              description:'Global Calendar of Cybereason Events and Holidays',
              href: 'https://calendar.google.com/calendar/embed?src=cybereason.com_69qd4vh9n0h5frsbc7sb1i63d8%40group.calendar.google.com&ctz=America%2FNew_York',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/calendar-512.png'
            },
            {
              header:'Salesforce',
              description:'CRM',
              href: 'https://cybereason.my.salesforce.com',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/salesforce-logo-cloud.png'
            },
            {
              header:'PowerPoint Template',
              description:'Master PPT Template',
              href: 'https://www.cybereason.com/hubfs/Chrome%20Extension/assets/2018_04_20_CR_Powerpoint_Template.potx',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/2000px-Microsoft_PowerPoint_2013_logo.svg.png'
            },
            {
              header:'Google Drive',
              description:'Benefits',
              href: 'https://drive.google.com',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Google-Drive-icon.png'
            },
            {
              header:'Zoom',
              description:'Video Conferencing',
              href: 'https://zoom.us/meeting/schedule',
              imgSource:'https://pbs.twimg.com/profile_images/893247495534399490/iFJh5bRU_400x400.jpg'
            },
            {
              header:'Greenhouse',
              description:'Recruiting Portal',
              href: 'https://app.greenhouse.io/users/sign_in',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/Greenhouse_logo.png'
            },
            {
              header:'HighSpot',
              description:'Sales Documents',
              href: 'https://cybereason.highspot.com',
              imgSource: 'https://pbs.twimg.com/profile_images/776162171331809280/-YnsVptl_400x400.jpg'
            },
            {
              header:'Confluence',
              description:'Company Wiki/Intranet',
              href: 'https://cybereason.atlassian.net/wiki/discover/popular',
              imgSource:'https://pbs.twimg.com/profile_images/907269120823103488/7BShure2_400x400.jpg'
            },
            {
              header:'Logos',
              description:'Branding Guidelines and Logo Assets',
              href: 'https://cybereason.atlassian.net/wiki/spaces/MKTG/pages/110376232/Style+Guidelines',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            },
            {
              header:'Slack',
              description:'Internal Messaging App',
              href: 'https://cybereason.slack.com/team',
              imgSource: 'https://pbs.twimg.com/profile_images/885554951857946624/sd7GRyjY_400x400.jpg'
            }
          ]
        }
      ]
    };
    General.propTypes = {
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
