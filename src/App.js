import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Home from './Pages/Home';
import AccountInfo from './Pages/AccountInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

//import React, { useState } from 'react';

function App() {
  return (<Router>
          <Routes>
            <Route exact path='/' element={Login} />
            <Route path="/sign-in" element={Login} />
            <Route path="/sign-up" element={SignUp} />
            <Route path="/accountInfo" element={AccountInfo} />
            <Route path="/home" element={Home} />
          </Routes>
      </Router>
      
  );
  
}

export default App;
