import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom';
import Login from './Pages/login.component';
import SignUp from './Pages/signup.component';
import Home from './Pages/home';
import AccountInfo from './Pages/accountInfo';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Routes>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/accountInfo" component={AccountInfo} />
            <Route path="/home" component={Home} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
  
}

export default App;
