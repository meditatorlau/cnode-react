import React, { Component } from 'react';
import Header from '@/components/Header';

export default class Home extends Component {
  state = { }

  handleClick = () => {
    alert('10');
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ color: 'red' }}>
          这是首页
          <span onClick={this.handleClick}>react-loader测试</span>
        </div>
      </div>
    );
  }
}
