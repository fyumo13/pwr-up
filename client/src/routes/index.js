import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => authenticated === true 
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    );
}
  
export const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => authenticated === false 
            ? <Component {...props} />
            : <Redirect to='/dashboard' />}
        />
    );
}

export const NoMatch = () => {
    let location = useLocation();

    return (
        <Redirect to="/login" />
    );
}