import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';



class App extends Component {

  state ={
    navItems: [
      {
        name: 'Quick Links',
        isActive: true
      },
      {
        name: 'Resources',
        isActive: false
      },
      {
        name: 'Campaigns',
        isActive: false
      },
      {
        name: 'Sales Process',
        isActive: false
      },
      {
        name: 'Employee Resources',
        isActive: false
      },
      {
        name: 'Wingbats',
        isActive: false
      }
    ]
  }

  handleNavClick = indexToChange =>
    this.setState({
      navItems: this.state.navItems.map((item, index) => {
        if (index === indexToChange) {
          return {
            ...item,
            isActive: true
          };
        } else {
          return {
            ...item,
            isActive: false
          };
        }
        return item;
      })
    });


  render() {
    return (
      <div class="App">
        <div className="nav-wrapper">
          <Navigation
            className="nav-wrapper"
            handleNavClick={this.handleNavClick.bind(this)}
            navItems={this.state.navItems} />
        </div>
      </div>
    );
  }
}

export default App;
