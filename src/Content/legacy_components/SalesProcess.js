import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Discovery from './ProcessSteps/Discovery';
import NewBusinessMeeting from './ProcessSteps/NewBusinessMeeting';
import TechnicalDeepDive from './ProcessSteps/TechnicalDeepDive';
import BusinessValueAssessment from './ProcessSteps/BusinessValueAssessment';
import GoNoGo from './ProcessSteps/GoNoGo';
import ProofOfConcept from './ProcessSteps/ProofOfConcept';
import Close from './ProcessSteps/Close';

export default class SalesProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subContentRoutes: [
        {
          subRoute: Discovery
        },
        {
          subRoute: NewBusinessMeeting
        },
        {
          subRoute: TechnicalDeepDive
        },
        {
          subRoute: BusinessValueAssessment
        },
        {
          subRoute: GoNoGo
        },
        {
          subRoute: ProofOfConcept
        },
        {
          subRoute: Close
        }
      ]
    };
    SalesProcess.propTypes = {
      navItems: PropTypes.array.isRequired,
      salesProcessIndex: PropTypes.number.isRequired
    }
  }
    render () {

      const RenderSubContent = this.state.subContentRoutes[this.props.salesProcessIndex].subRoute ;
      return (
        <RenderSubContent navItems={this.props.navItems}
          />
    );
  }
}
