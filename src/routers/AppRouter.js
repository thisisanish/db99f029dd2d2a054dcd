import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import Loader from 'components/loader';
import PageLoading from 'components/Loading/PageLoading'

import Example from '../pages/example';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';
import Page from '../pages/Page';

import Connector from 'utils/Connector';

function Router({ actions, checked, isLoggedIn, ...props }) {
  useEffect(async() => {
    let me = await localStorage.getItem("me");
    if (!!me) {
      me = JSON.parse(me);
      actions.saveMe(me);
      actions.authenticate();
    } else {
      actions.unauthenticate();
    }
  }, []);

  if (!checked) return <Loader />;

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PublicRoute path="/" component={Example} exact={true} />
          {/* <PublicRoute path="/example" component={Home}  /> */}
          <PrivateRoute path="/dashboard" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
};

const ConnectedRouter = props => (
  <Connector>
    {
      ({ actions, state: { auth: { isLoggedIn, checked } } }) => (
        <Router
          checked={checked}
          isLoggedIn={isLoggedIn}
          actions={actions.auth}
          {...props}
        />
      )
    }
  </Connector>
);

Router.propTypes = {
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
  actions: PropTypes.object,
};

Router.defaultProps = {
  checked: false,
  loggedIn: false,
  actions: {},
};

export default ConnectedRouter;
