// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Events />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
