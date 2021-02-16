/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, BrowserRouter, Link, NavLink} from 'react-router-dom';
import { Router } from '@reach/router';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { createStore } from 'redux';
import GlobalStyle from '../../global-styles';
import Navbar from '../../components/Navbar';
import BackGround from '../../components/Background';
import Content from '../../components/Content';
import Top from '../../components/Top';
import PageContent from '../../components/PageContent';
import PageTitle from '../../components/PageTitle';
import Main from '../../components/Main';
import MainInstagram from '../../components/MainInstagram';
import MainFacebook from '../../components/MainFacebook';
import MainTwitter from '../../components/MainTwitter';

export default function App() {
  return (
    <div>
      <BackGround>
        <Navbar />
        <Content>
          <Top />
          <PageContent>
            <PageTitle />
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Main} exact />
                <Route path="/instagram" component={MainInstagram} />
                <Route path="/facebook" component={MainFacebook} />
                <Route path="/twitter" component={MainTwitter} />
              </Switch>
            </BrowserRouter>
            {/*<Switch>*/}
            {/*  <Route exact path="/" component={HomePage} />*/}
            {/*  <Route component={NotFoundPage} />*/}
            {/*</Switch>*/}
          </PageContent>
        </Content>
      </BackGround>
      <GlobalStyle />
    </div>
  );
}
