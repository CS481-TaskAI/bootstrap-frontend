import {Button, Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import home from './Pages/home';
import profile from './Pages/profile';
import login from './Pages/login';


function App() {
  return (<Router>
      <Routes>
        <Route path="/" element={<login />} />
        <Route path="/home" element={<home />} />
        <Route path="/profile" element={<profile />} />
      </Routes>
  </Router>
    
  );
}

export default App;
