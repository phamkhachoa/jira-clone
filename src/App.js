import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs';
import LoadingComponent from './components/GlobalSetting/LoadingComponent';
import Home from './pages/CyberBugs/ProjectCyberBugs/Home';


export default function App() {

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <UserLoginTemplate>
            <LoginCyberBugs />
          </UserLoginTemplate>
        }
      />

      <Route
        path="/home"
        element={
          <UserLoginTemplate>
            <Home />
          </UserLoginTemplate>
        }
      />
    </Routes>
  );
}
