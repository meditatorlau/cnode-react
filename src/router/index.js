import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import asyncComponent from '@/utils/asyncComponent';
import MainContainer from '@/pages/MainContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: MainContainer,
  },
  {
    path: '/article/:id',
    exact: true,
    component: () => import('@/pages/Article'),
  }
];

const RouterConfig = () => (
  <HashRouter>
    <Switch>
      {
        routes.map((route) => {
          return <Route {...route} key={route.path} />;
        })
      }
    </Switch>
  </HashRouter>
);

export default RouterConfig;
