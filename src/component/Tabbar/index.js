import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import Header from '@/component/Header';
import './index.less';

const TabBarItem = TabBar.Item

export default class TabBarComponent extends Component {
  state = {
    selectedTab: 'home'
  }

  handleSelectedTab = (val) => {
    this.setState({
      selectedTab: val
    });
  }

  isSelected = val => this.state.selectedTab === val;

  render() {
    return (
      <div className="wrapper">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBarItem
            title="首页"
            key="home"
            icon={<i className="iconfont icon-home" />}
            selectedIcon={<i className="iconfont icon-home" />}
            selected={this.isSelected('home')}
            onPress={() => this.handleSelectedTab('home')}
          >
            <Header />
          </TabBarItem>
          <TabBarItem
            title="个人中心"
            key="my"
            icon={<i className="iconfont icon-my" />}
            selectedIcon={<i className="iconfont icon-my" />}
            selected={this.isSelected('my')}
            onPress={() => this.handleSelectedTab('my')}
          >
            2
          </TabBarItem>
        </TabBar>
      </div>
    );
  }
}
