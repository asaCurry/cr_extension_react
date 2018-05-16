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
          resourceCategory:'Benefits',
          resourceItems: [
            {
              header:'Namely',
              description:'HR Portal',
              href: 'https://cybereason.namely.com/users/login',
              imgSource:'https://pbs.twimg.com/profile_images/978640645647724546/GqAZI_aR_400x400.jpg'
            },
            {
              header:'Blue Cross Blue Shield of Massachusetts',
              description:'Health Insurance Portal',
              href: 'https://www.bluecrossma.com/wps/portal/login/',
              imgSource: 'https://pbs.twimg.com/profile_images/428176188104638465/kvGTsQjU_400x400.png'
            },
            {
              header:'EaseCentral',
              description:'Benefits',
              href: 'https://cybereason.easecentral.com',
              imgSource: 'https://pbs.twimg.com/profile_images/641184035151200256/wKBKtsq4_400x400.png'
            },
            {
              header:'HRC Total Solutions',
              description:'Pre-tax benefits',
              href: 'https://employee.hrcts.com/login.aspx',
              imgSource:'https://pbs.twimg.com/profile_images/517378686996058112/iIFv8yml_400x400.jpeg'
            },
            {
              header:'Voya',
              description:'401k Portal',
              href: 'https://my.voya.com/voyasso/index.html',
              imgSource: 'https://pbs.twimg.com/profile_images/563074244406300672/dV1gRW-Y_400x400.jpeg'
            },
            {
              header:'Solium',
              description:'Stock Options',
              href: 'https://shareworks2.solium.com/solium/servlet/userLogin.do',
              imgSource: 'https://pbs.twimg.com/profile_images/967151743497678848/YLafVlNp_400x400.jpg'
            }
          ]
        },
        {
          resourceCategory:'Travel',
          resourceItems: [
            {
              header:'American Express Global Business Travel',
              description:'Travel Expenses and Booking',
              href: 'https://portal.amexgbt.com/login/CYRE',
              imgSource:'https://pbs.twimg.com/profile_images/928779992162476033/2maTLsJ__400x400.jpg'
            },
            {
              header:'Expensify',
              description:'Expenses',
              href: 'https://www.expensify.com/signin',
              imgSource: 'https://pbs.twimg.com/profile_images/928779992162476033/2maTLsJ__400x400.jpg'
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
          resourceCategory:'Internal Tools',
          resourceItems: [
            {
              header:'Confluence',
              description:'Company Wiki/Intranet',
              href: 'https://cybereason.atlassian.net/wiki/discover/popular',
              imgSource:'https://pbs.twimg.com/profile_images/907269120823103488/7BShure2_400x400.jpg'
            },
            {
              header:'Greenhouse',
              description:'Recruiting Portal',
              href: 'https://app.greenhouse.io/users/sign_in',
              imgSource: 'https://pbs.twimg.com/profile_images/880125461157756928/CLVKKiuS_400x400.jpg'
            },
            {
              header:'Zoom',
              description:'Video Conferencing',
              href: 'https://zoom.us/meeting/schedule',
              imgSource:'https://pbs.twimg.com/profile_images/893247495534399490/iFJh5bRU_400x400.jpg'
            },
            {
              header:'Slack',
              description:'Internal Messaging App',
              href: 'https://cybereason.slack.com/messages',
              imgSource: 'https://pbs.twimg.com/profile_images/885554951857946624/sd7GRyjY_400x400.jpg'
            }
          ]
        },
        {
          resourceCategory:'Social Media',
          resourceItems: [
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
