import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from './Pages/login';
import home from './Pages/home';
import accountInfo from './Pages/accountInfo';

function App() {
  return <Router>
      <Routes>
        <Route exact path="/" element={<login />} />
        <Route path="/home" element={<home />} />
        <Route path="/accountInfo" element={<accountInfo />} />
      </Routes>
    </Router>;
  
}

export default App;
