import React, { Component } from 'react';
import './index.less';

import Tabbar from '@/components/Tabbar';
import Home from '../Home';

const dataSource = [
  {
    title: '首页',
    key: 'home',
    icon: 'home',
    component: Home
  },
  {
    title: '收藏',
    key: 'collect',
    icon: 'collect',
    component: null
  },
  {
    title: '消息',
    key: 'message',
    icon: 'message',
    component: null
  },
  {
    title: '个人中心',
    key: 'my',
    icon: 'my',
    component: null
  },
];

export default class MainContainer extends Component {
  state = { }

  componentDidMount() {
  }

  render() {
    return (
      <Tabbar dataSource={dataSource} />
    );
  }
}
