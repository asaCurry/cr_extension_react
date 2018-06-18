import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import MainContent from './MainContent';

import Product from './Content/Product';
import Sales from './Content/Sales';
import Marketing from './Content/Marketing';
import General from './Content/General';
import PeopleOps from './Content/PeopleOps';

class App extends Component {

  state ={
    currentIndex: 0,
    salesProcessIndex:0,
    navItems: [
      {
        name: 'General',
        route: General,
        isActive: true
      },
      {
        name: 'Sales',
        route: Sales,
        isActive: false
      },
      {
        name: 'Marketing',
        route: Marketing,
        isActive: false
      },
      {
        name: 'Product',
        route: Product,
        isActive: false
      },
      {
        name: 'People Ops',
        route: PeopleOps,
        isActive: false,
        comingSoon: false
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

handleSubNavClick = newSubIndex =>
  this.setState({salesProcessIndex: newSubIndex });

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
              handleSubNavClick={this.handleSubNavClick}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
