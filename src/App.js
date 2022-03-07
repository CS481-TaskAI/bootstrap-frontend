import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';
import AccountInfo from './Pages/accountInfo';
import CreateAccount from './Pages/createAccount';
import Contacts from './Pages/contacts';

function App() {
  return <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        {/*<Route path="/project" element={<Project />} />*/}
        <Route path="/accountInfo" element={<AccountInfo />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </Router>;
  
}

export default App;
