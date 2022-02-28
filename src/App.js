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
            <Route exact path='/' element={Login} />
            <Route path="/sign-in" element={Login} />
            <Route path="/sign-up" element={SignUp} />
            <Route path="/accountInfo" element={AccountInfo} />
            <Route path="/home" element={Home} />
          </Routes>
  </div>
  );
  
}

export default App;
