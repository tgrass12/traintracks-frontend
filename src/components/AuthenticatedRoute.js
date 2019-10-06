import React from "react";
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, path, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  return isAuthenticated ? 
    <Route path={path} render={props => <Component {...props} />} {...rest} /> :
    <Redirect push to={{
      pathname: '/login',
      state: { referrer: path }
      }} 
    />;
};

export default AuthenticatedRoute;