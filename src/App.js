import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import MainContent from './MainContent';

import QuickLinks from './Content/QuickLinks';
import Resources from './Content/Resources';
import Campaigns from './Content/Campaigns';
import EmployeeResources from './Content/EmployeeResources';
import SalesProcess from './Content/SalesProcess';
import Wingbats from './Content/Wingbats';

class App extends Component {

  state ={
    currentIndex: 0,
    salesProcessIndex:0,
    navItems: [
      {
        name: 'Quick Links',
        route: QuickLinks,
        isActive: true
      },
      {
        name: 'Resources',
        route: Resources,
        isActive: false
      },
      {
        name: 'Campaigns',
        route: Campaigns,
        isActive: false
      },
      {
        name: 'Sales Process',
        route: SalesProcess,
        subContent: {
          subContentOptions:["Step 1","Step 2","Step 3","Step 4"]
        },
        isActive: false
      },
      {
        name: 'Employee Resources',
        route: EmployeeResources,
        isActive: false
      },
      {
        name: 'Wingbats',
        route: Wingbats,
        isActive: false
      }
    ]
  }

  handleNavClick = indexToChange =>
    this.setState({
      currentIndex: indexToChange,
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
      <div className="App">
        <div className="app-wrapper">
          <div className="nav-wrapper">
            <Navigation
              role="navigation"
              className="nav-wrapper"
              handleNavClick={this.handleNavClick.bind(this)}
              currentIndex={this.state.currentIndex}
              navItems={this.state.navItems} />
          </div>
          <div className="content-wrapper">
            <MainContent
              className="main-content"
              navItems={this.state.navItems}
              currentIndex={this.state.currentIndex}
              salesProcessIndex={this.state.salesProcessIndex}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
