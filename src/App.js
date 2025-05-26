import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <UserLoginTemplate>
                <LoginCyberBugs />
              </UserLoginTemplate>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
