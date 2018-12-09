import React, { Component, Fragment } from 'react';

import { ListView, Icon, PullToRefresh } from 'antd-mobile';

import List from '@/components/List';

export default class ListPage extends Component {
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
    this.props.fetchTopics({ page: this.props.page + 1 });
  }

  onRefresh = () => {
    this.props.fetchTopics({ type: 'TOPICS_REFRESH' });
  }

  render() {
    const {
      loading,
      data
    } = this.props;

    const row = (rowData) => {
      return <List dataSource={rowData} />;
    };

    return (
      <Fragment>
        {
          (loading && !data.length) ? (
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
                  {data.loading ? 'Loading...' : ''}
                </div>
              )}
              renderRow={row}
              style={{ height: '100%' }}
              pageSize={4}
              scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              pullToRefresh={(
                <PullToRefresh
                  refreshing={loading}
                  onRefresh={this.onRefresh}
                />
              )}
            />
          )
        }
      </Fragment>
    );
  }
}
