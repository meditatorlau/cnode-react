import React, { Component } from 'react';
import Header from '@/components/Header';
import { Tabs, ListView } from 'antd-mobile';
import List from '@/components/List';
import { getTopics } from '@/service/api';

const tabs = [
  { title: '全部' },
  { title: '精华' },
  { title: '分享' },
  { title: '问答' },
  { title: '招聘' },
  { title: '其他' },
];

export default class Home extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    getTopics().then((data) => {
      this.setState({
        list: data
      });
    });
  }

  render() {
    console.log(this.state.list);
    return (
      <div style={{ height: '100%', overflow: 'hidden' }}>
        <Header />
        <div style={{ height: 'calc(100% - 45px)' }}>
          <Tabs tabs={tabs}>
            <div>
              {
                this.state.list.map((data) => {
                  return (
                    <List
                      key={data.id}
                      dataSource={data}
                    />
                  );
                })
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
