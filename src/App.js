import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import SignUp from './Pages/signup';
import Home from './Pages/home';
import AccountInfo from './Pages/accountInfo';

function App() {
  return (
        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/accountInfo" element={<AccountInfo />} />
          </Routes>
        </div>
  );
  
}

export default App;
