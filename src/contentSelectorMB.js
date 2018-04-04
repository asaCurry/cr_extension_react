import React from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'mdbreact';
class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret="caret" color="amber">
        Deal Stage
      </DropdownToggle>
      <DropdownMenu>
        {
          this.props.subItems.map((subItem, index) =>
          <DropdownItem key={index} color="black">
            {subItem}
          </DropdownItem>)
        }
      </DropdownMenu>
    </Dropdown>);
  }
}

export default DropdownPage;
