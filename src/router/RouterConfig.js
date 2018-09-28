import React, { Component } from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

import MainContainer from '@/pages/MainContainer';
import List from '@/pages/List';

export default class RouterConfig extends Component {
  state={} 

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={MainContainer} />
        </Switch>
      </HashRouter>
    );
  }
}
