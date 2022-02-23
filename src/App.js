import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import Home from './Pages/home';
import AccountInfo from './Pages/accountInfo';

function App() {
  return <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/accountInfo" element={<AccountInfo />} />
      </Routes>
    </Router>;
  
}

export default App;
