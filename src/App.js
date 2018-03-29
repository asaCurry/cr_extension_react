import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import MainContent from './MainContent';



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
        subContent: {
          currentSub:'Step 1',
          subContentOptions:["Step 1","Step 2","Step 3","Step 4"]
        },
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
        <div class="app-wrapper">
          <div className="nav-wrapper">
            <Navigation
              role="navigation"
              className="nav-wrapper"
              handleNavClick={this.handleNavClick.bind(this)}
              navItems={this.state.navItems} />
          </div>
          <div class="content-wrapper">
            <MainContent
              className="main-content"
              navItems={this.state.navItems}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
