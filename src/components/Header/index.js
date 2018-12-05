import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

export default class Header extends Component {
  state = { }

  render() {
    return (
      <NavBar 
        mode="light"
        // icon={<Icon type="left" />}
      >
        首页
      </NavBar>
    );
  }
}
