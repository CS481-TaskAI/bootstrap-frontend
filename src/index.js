import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from './Pages/home';
import * as serviceWorker from "./serviceWorker";
import Contacts from "./Pages/contacts";
import Projects from "./Pages/project"

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
        </Route>
        <Route path="/home" element={ <Home/> }>
        </Route>
        <Route path="/project" element={ <Projects/> }>
        </Route>
        <Route path="/contacts" element={ <Contacts/> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
