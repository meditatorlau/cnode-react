import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '@/components/Header';
import { Tabs, PullToRefresh, ListView } from 'antd-mobile';
import List from '@/components/List';
import { fetchTopics } from '@/reducer/topics';

const tabs = [
  { title: '全部' },
  { title: '精华' },
  { title: '分享' },
  { title: '问答' },
  { title: '招聘' },
  { title: '其他' },
];

@connect((state) => {
  return {
    topics: state.topics,
  };
}, {
  fetchTopics
})
export default class Home extends Component {
  state = {
    refreshing: false,
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  onRefresh = () => {
    this.setState({
      refreshing: true
    });
    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 3000);
  }

  render() {
    const {
      topics: {
        all
      }
    } = this.props;
    console.log(all);
    const row = (rowData) => {
      return <List dataSource={rowData} />;
    };

    return (
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <Header />
        <div style={{ height: 'calc(100% - 45px)' }}>
          <Tabs tabs={tabs}>
            <div style={{ height: '100%' }}>
              <ListView
                dataSource={all.data}
                renderRow={row}
                style={{ height: '100%' }}
                pageSize={4}
                scrollRenderAheadDistance={500}
                pullToRefresh={(
                  <PullToRefresh
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                  />
                )}
              />
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Tabs>
        </div>
      </div>
    );
  }
}
