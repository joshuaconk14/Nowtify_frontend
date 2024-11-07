import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

// , {useState, useEffect}

function App() {
  // creating routes for importing pages
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route path= "/" element={<Home />} />
          <Route path= "/login" element={<Login />} />
          <Route path= "/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );

}


export default App

// http://localhost:3000/