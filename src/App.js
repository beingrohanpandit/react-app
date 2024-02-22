import './App.css';
import React, { useState } from 'react';
import Navbar from './compnonents/Navbar';
import Form from './compnonents/Form';
import About from './compnonents/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";

let NAME = "Text Utils"
let ABOUT = "About"

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handlerSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <BrowserRouter>
      <Navbar title={NAME} about={ABOUT} onSearchQueryChange={handlerSearchQuery} mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path='/' element={<Form searchQuery={searchQuery} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
