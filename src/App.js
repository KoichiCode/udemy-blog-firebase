import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home.js';
import CreatePost from './components/CreatePost.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Navbar from './components/Navbar.js';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
  <Router>
    <Navbar isAuth={isAuth} />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />}>
      </Route>
      <Route path="/logout" element={<Logout setIsAuth={setIsAuth}/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
