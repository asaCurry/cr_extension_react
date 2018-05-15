import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tutorials extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tutorialIndex: 0,
      loomLinks : [
        {
            tutorialName: "Select a Tutorial",
            tutorialEmbedCode: ""
        },
        {
            tutorialName: "How to Use Loom",
            tutorialEmbedCode:"https://www.useloom.com/embed/2e4c1d6498af4e439e100a3a7f5e75ee"
        },
        {
            tutorialName: "Manually Update Extensions",
            tutorialEmbedCode:"https://www.useloom.com/embed/54a2622da64245c3a3600a8c575b45eb"
        }
      ]
    };
    Tutorials.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }

      handleTutorialClick = e =>
        this.setState({tutorialIndex: e.target.value});

    render () {
      return (
        <div className="main-content-inner">
          <div className="tutorial-wrapper">
          <select onChange={ this.handleTutorialClick } >
            {this.state.loomLinks.map((clip, index) => {
              return (
                <option value={index} key={index + 'tutorialIndex'}
                  className=""
                  >
                  <a>{clip.tutorialName}</a>
                </option>
              )
            })
          }
            <option value="more" disabled>More Coming Soon!</option>
          </select>
          <iframe width="500" height="300" src={this.state.loomLinks[this.state.tutorialIndex].tutorialEmbedCode} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

          </div>
        </div>
    );
  }
}
