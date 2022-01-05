// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import React, { useContext } from 'react';
import Header from "./components/Hraer2.jsx";
import Login from "./components/Login2.jsx";
import {AuthProvider, AuthContext} from "./components/AuthContext.jsx";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? 'welcome' : <Login />}
    </div>
  );
}

function AppWithStore(){
  return (<AuthProvider>
    <App />
  </AuthProvider>);
}

export default AppWithStore;

// export default App;
