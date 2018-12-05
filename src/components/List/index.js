import React from 'react';
import { Card, Badge } from 'antd-mobile';
import { getDateDiff } from '@/utils/index';

import './index.less';

const { Header, Body, Footer } = Card;

const MyBadge = ({ top, tab }) => {
  const tabs = {
    share: '分享',
    ask: '问答',
    job: '招聘',
    good: '精华'
  };

  const BadgeText = top ? '置顶' : tabs[tab];

  const bg = top ? '#33a3f4' : '#94948e';


  return (
    <Badge
      text={BadgeText}
      style={{
        marginLeft: 12,
        padding: '0 3px',
        backgroundColor: bg,
        borderRadius: 2
      }}
    />
  );
};


export default function ({ dataSource }) {
  const {
    title,
    author: {
      loginname,
      avatar_url
    },
    reply_count,
    visit_count,
    create_at,
    last_reply_at,
    top,
    tab
  } = dataSource;

  const Title = () => (
    <div className="title-wrapper">
      <div className="title-wrapper__top">
        <span className="title-wrapper__name">{loginname}</span>
      </div>
      <div className="title-wrapper__bottom">
        最新回复
        ·
        {getDateDiff(last_reply_at)}
      </div>
    </div>
  );

  const FooterContent = () => {
    return (
      <React.Fragment>
        <span style={{ marginRight: '8px' }}>
          <i className="iconfont icon-eye" style={{ marginRight: '3px' }} />
          {visit_count}
        </span>
        <i className="iconfont icon-message" style={{ marginRight: '3px' }} />
        {reply_count}
      </React.Fragment>
    );
  };

  const createAt = create_at.split("T")[0];
  return (
    <Card>
      <Header
        thumb={avatar_url}
        thumbStyle={{ width: 32, height: 32 }}
        title={<Title />}
        extra={<MyBadge tab={tab} top={top} />}
      />
      <Body>
        {title}
      </Body>
      <Footer
        content={<FooterContent />}
        extra={createAt}
      />
    </Card>
  );
}
