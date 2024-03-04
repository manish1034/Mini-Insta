import React from "react";
import { Sidebar } from "./components";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Profile from "./components/Profile";
import Explore from "./components/Explore";


const App = () => {
  return (
    <>
      <div className="flex-row flex bg-[#121212]">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/explore" element={<Explore/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
