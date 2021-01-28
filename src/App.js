import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import UsersSeachPage from './pages/UsersSeachPage';
import ReposSeachPage from './pages/ReposSeachPage';

export function App() { 
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/users">
          <UsersSeachPage />
        </Route>
        <Route path = "/repos">
          <ReposSeachPage />
        </Route>
        <Redirect to = "/users" />
      </Switch>
    </BrowserRouter>
  );
}

