import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
