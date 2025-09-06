import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import './App.css';

// importing Pages
import Dashboard from "./pages/Dashboard";
import Checkins from "./pages/Checkins";
import Notes from "./pages/Notes";
import Progress from "./pages/Progress";

function App() {
  return (
  
    <div className='app'>
      <header className="header">
        <h1> Welcome to MentorsDesk</h1>
      </header>
      <div className="main">
        <aside className="sidebar">
          <h2 className="logo">MentorsDesk</h2>
           <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/checkins">Chek-ins</Link></li>
            <li><Link to="/notes">Your Notes</Link></li>
            <li><Link to="/progress">Your Progress</Link></li>
           </ul>
        </aside>
        <section className="content">
        <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/checkins" element={<Checkins />}/>
        <Route path="/notes" element={<Notes />}/>
        <Route path="/progress" element={<Progress />}/>
        </Routes>  
        </section>
      </div>
    </div>
    
  );
}

export default App
