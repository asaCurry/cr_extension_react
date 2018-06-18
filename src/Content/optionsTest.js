import React, { Component } from 'react';

/* global chrome */

import PropTypes from 'prop-types';

export default class Resources extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
    Resources.propTypes = {
      navItems: PropTypes.array.isRequired
    }
  }


      setRole = () => {
        var isSales = document.getElementById('sales').checked;
        var isMarketing = document.getElementById('marketing').checked;
        var isOther = document.getElementById('Other').checked;
        chrome.storage.sync.set({
          roleSales: isSales,
          roleMarketing: isMarketing,
          roleOther: isOther
        }, function(){
            chrome.storage.sync.get(['roleSales'], function(result) {
            console.log('Value currently is ' + result.roleSales);
          });
        });
      }

      toggleThisRole = (e) => {
        var roleIsChecked = e.target.checked;
        var roleChanging = e.target.name;

        chrome.storage.sync.set({
          roleChanging: roleIsChecked
        }, function(){
            chrome.storage.sync.get([roleChanging], function(result) {
            console.log('Value currently is ' + result.roleChanging);
          });
        });
      }


    render () {
        return (
          <div className="role-wrapper">
            <input onChange={(e) => {this.toggleThisRole(e)}} name="roleSales" type="checkbox" id="sales" value="sales"/>
            <label for="sales">Sales</label>
            <input onChange={(e) => {this.toggleThisRole(e)}} name="roleMarketing" type="checkbox" id="marketing" value="marketing"/>
            <label for="marketing">marketing</label>
            <input onChange={(e) => {this.toggleThisRole(e)}} name="roleOther" type="checkbox" id="Other" value="other"/>
            <label for="Other">Other</label>
          </div>


        )
  }
}
