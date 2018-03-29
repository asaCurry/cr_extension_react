import React from 'react';
import PropTypes from 'prop-types';
import ContentSelector from './contentSelector';
import DropdownPage from './contentSelectorMB'

const MainContent = props =>

<div className="mainContentWrapper">
  <div className="subheader-selector">
    {props.navItems
      .filter(item => item.isActive )
      .map((item, index) => {

        if (item.subContent !== undefined) {

          return (
              // <ContentSelector subItems={item.subContent.subContentOptions}/>
              <DropdownPage subItems={item.subContent.subContentOptions}/>
          );
        } else {
          return (
            <h2 key={index}>{item.name}</h2>
          )
        }
      }
    )}
    </div>
  <div className="main-content-inner">
    <div className="content-container recentCampaigns">
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
    </div>
    <div className="content-container resources">
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
      <div className="contentItem">
        <h3>Example Campaign</h3>
        <p>A brief description of the example campaign.</p>
      </div>
    </div>
  </div>
</div>;

  MainContent.propTypes = {
    navItems: PropTypes.array.isRequired,
  }

  export default MainContent
