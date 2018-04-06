import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContentCard extends Component {

  constructor(props) {
    super(props);

    ContentCard.propTypes = {
      content: PropTypes.array.isRequired,
      cardKey: PropTypes.number.isRequired
    }
  }
    render () {
      return (

              <div className="vertical flip-container"  key={this.props.cardKey}>
                <div className="vertical flipper">
                  <a href={this.props.content.href} target="_blank" >
                    <div className="contentItem front">
                      <div className="cardCopy">
                        <h3>{this.props.content.header}</h3>
                        <p>{this.props.content.description}</p>
                      </div>
                      <img src={this.props.content.imgSource} />
                    </div>
                  </a>
                  <a href={this.props.content.href} target="_blank" >
                    <div className="vertical contentItem back">
                      <img src={this.props.content.imgSource} />
                    </div>
                  </a>
                </div>
              </div>

    );
  }
}
