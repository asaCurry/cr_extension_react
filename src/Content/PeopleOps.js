import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContentCard from '../ContentCard';
export default class PeopleOps extends Component {

  constructor(props) {
    super(props);


    this.state = {
      employeeResources: [
        {
          resourceCategory:'People Ops Resources',
          resourceItems: [
            {
              header:'Cybereason Org Chart',
              description:'Up-to-date internal org chart',
              href: 'https://app.pingboard.com/s/5Y6j4rujmm0YiTGI6z8UTKgnzOBxcGe2wrKS67QY5xbzgC9rwdloLpz0WTPWB1z9seQhZfs8qHclRT4oB9PZfw/org_chart',
              imgSource:'https://www.cybereason.com/hubfs/Email%20Images/email-logo-64.png'
            },
            {
              header:'People Ops Wiki',
              description:'Overview of People Ops',
              href: 'https://cybereason.atlassian.net/wiki/spaces/PO/overview',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/atlassian_icon.png'
            }
          ]
        },
        {
          resourceCategory:'Benefits',
          resourceItems: [
            {
              header:'Namely',
              description:'HR Portal',
              href: 'https://cybereason.namely.com/users/login',
              imgSource:'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/meta-namely-logo.jpg'
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
            },
            {
              header:'Delta Dental',
              description:'Dental Insurance',
              href: 'https://www.deltadental.com/',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/delta-dental.png'
            },
            {
              header:'VSP',
              description:'Eye Insurance',
              href: 'https://www.vsp.com/',
              imgSource: 'https://www.cybereason.com/hubfs/Chrome%20Extension/button%20backgrounds/vsp_logo.jpg'
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
      }
    ]
    };
    PeopleOps.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }
    render () {
      let competitiveStyle = {
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
