import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme';
import { useDarkMode } from './hooks/useDarkMode';
import { PrivateRoute, PublicRoute, NoMatch } from './routes/index';

import CustomTopbar from './components/features/CustomTopbar';
import CustomSidebar from './components/features/CustomSidebar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Routine from './pages/Routine';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    authenticateUser();
  }, [authenticated]);

  const authenticateUser = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        { authenticated ? <CustomSidebar theme={theme} toggleTheme={toggleTheme} /> : <CustomTopbar theme={theme} toggleTheme={toggleTheme} /> }
        <Switch>
          <PublicRoute exact path="/" authenticated={authenticated} component={LandingPage} />
          <PublicRoute path="/login" authenticated={authenticated} component={Login} />
          <PublicRoute path="/register" authenticated={authenticated} component={Registration} />
          <PrivateRoute path="/dashboard" authenticated={authenticated} component={Dashboard} />
          <PrivateRoute path="/profile" authenticated={authenticated} component={Profile} />
          <PrivateRoute path="/routine/:id" authenticated={authenticated} component={Routine} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </>
    </ThemeProvider>
  );
}