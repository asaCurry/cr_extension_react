import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './navigation';
import GuestList from './guestlist';



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

  render() {
    return (
      <div class="App">
        <Navigation
          className="nav-wrapper"
          navItems={this.state.navItems} />
      </div>
    );
  }
}

export default App;
