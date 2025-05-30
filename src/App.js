import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs';
import Home from './pages/CyberBugs/ProjectCyberBugs/Home';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
import CreateProject from './pages/CyberBugs/ProjectCyberBugs/CreateProject';
import ListProject from './pages/CyberBugs/ProjectCyberBugs/ListProject';
import ProjectManagement from './pages/CyberBugs/ProjectManagement/ProjectManagement';


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

      {/* <UserLoginTemplate path="/login" exact Component={LoginCyberBugs} /> */}
      {/* <CyberbugsTemplate path="/home" exact Component={Home} /> */}

      <Route
        path="/home"
        element={
          <CyberbugsTemplate>
            <Home />
          </CyberbugsTemplate>
        }
      />
      <Route
        path="/createProject"
        element={
          <CyberbugsTemplate>
            <CreateProject />
          </CyberbugsTemplate>
        }
      />

      <Route
        path="/listProject"
        element={
          <CyberbugsTemplate>
            <ProjectManagement />
          </CyberbugsTemplate>
        }
      />
    </Routes>
  );
}
