import "./App.css";
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


//   // BACKEND API
//   const [message, setMessage] = useState("");

// useEffect(() => {
//   fetch("/home")
//     .then(res => res.json())
//     .then(message => {
//       setMessage(message); 
//       // console.log(message);
//     });
// }, []);


//   // HOME API
// const [homeContent, setHomeContent] = useState("");

// useEffect(() => {
//   fetch(`${process.env.PUBLIC_URL}/home.html`)
//     .then(res => res.text())
//     .then((home) => {
//       setHomeContent(home); // Store the HTML as a state variable
//     })
//     .catch((error) => console.error("Error loading Home Page:", error));
// }, []);




// // LOGIN API
// const [loginContent, setLoginContent] = useState("");

// useEffect(() => {
//   fetch(`${process.env.PUBLIC_URL}/login.html`)
//     .then(res => res.text())
//     .then((login) => {
//       setLoginContent(login); // Store the HTML as a state variable
//     })
//     .catch((error) => console.error("Error loading Login page:", error));
// }, []);



// return (
//   <div className="App">
//     <div dangerouslySetInnerHTML={{ __html: homeContent }} />
//     <button></button>
//   </div>
// );


}


export default App