import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import './index.less';

const TabBarItem = TabBar.Item;

export default class TabBarComponent extends Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired
  }

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
    const { dataSource } = this.props; 
    return (
      <div className="wrapper">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {
            dataSource.map(({
              title, key, icon, component: C
            }) => {
              return (
                <TabBarItem 
                  title={title}
                  key={key}
                  icon={<i className={`iconfont icon-${icon}`} />}
                  selectedIcon={<i className={`iconfont icon-${icon}`} />}
                  selected={this.isSelected(key)}
                  onPress={() => this.handleSelectedTab(key)}
                >
                  {C && <C />}
                </TabBarItem>
              );
            })
          }
        </TabBar>
      </div>
    );
  }
}
