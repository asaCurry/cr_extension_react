import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'mdbreact';
class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    DropdownPage.propTypes = {
      subItems: PropTypes.array.isRequired,
      salesProcessIndex: PropTypes.number.isRequired,
      handleSubNavClick: PropTypes.func.isRequired
    }
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret="caret" color="amber">
        {this.props.subItems[this.props.salesProcessIndex]}
      </DropdownToggle>
      <DropdownMenu>
        {
          this.props.subItems.map((subItem, index) =>
          <DropdownItem key={index} color="black" onClick={() => this.props.handleSubNavClick(index)}>
            {subItem}
          </DropdownItem>)
        }
      </DropdownMenu>
    </Dropdown>);
  }
}

export default DropdownPage;
