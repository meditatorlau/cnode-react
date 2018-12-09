import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from '@/components/Header';
import {
  Tabs, PullToRefresh, ListView, Icon
} from 'antd-mobile';
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
    data: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  }

  static getDerivedStateFromProps({ topics }, state) {
    return {
      data: state.data.cloneWithRows(topics.all.data)
    };
  }

  componentDidMount() {
    this.props.fetchTopics({});
  }

  onEndReached = () => {
    this.props.fetchTopics({ page: this.props.topics.all.page + 1 });
  }

  onRefresh = () => {
    this.props.fetchTopics({ type: 'TOPICS_REFRESH' });
  }

  render() {
    const {
      topics: {
        all,
      }
    } = this.props;

    const row = (rowData) => {
      return <List dataSource={rowData} />;
    };


    return (
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <Header />
        <div style={{ height: 'calc(100% - 45px)' }}>
          <Tabs tabs={tabs}>
            <div style={{ height: '100%' }}>
              {
                (all.loading && !all.data.length) ? (
                  <Icon
                    type="loading"
                    style={{
                      position: "absolute",
                      left: '50%',
                      transform: "-50%",
                      marginTop: 8
                    }}
                  />
                ) : (
                  <ListView
                    dataSource={this.state.data}
                    renderFooter={() => (
                      <div style={{ padding: 30, textAlign: 'center' }}>
                        {all.loading ? 'Loading...' : ''}
                      </div>
                    )}
                    renderRow={row}
                    style={{ height: '100%' }}
                    pageSize={4}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    pullToRefresh={(
                      <PullToRefresh
                        refreshing={all.loading}
                        onRefresh={this.onRefresh}
                      />
                    )}
                  />
                )
              }
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
