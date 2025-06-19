import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogManager from './pages/BlogManager';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manage" element={<BlogManager />} />
    </Routes>
  </Router>
);

export default App;
