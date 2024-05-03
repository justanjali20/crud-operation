
import React from 'react';
import './App.css';
import Home from './Component/Home';
import Add from './Component/Add';
import Edit from './Component/Edit';
import NotFound from './Component/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Add />} />
          <Route path="/edit" element={<Edit />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
