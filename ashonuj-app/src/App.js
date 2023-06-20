import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ChemistrySpinner from './components/FlaskLoader';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import Quality  from './components/pages/Quality';
import {useEffect,useState} from 'react';

const App=()=> {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        {loading ? (
        <ChemistrySpinner />
      ) : (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      )}
      </Router> 
    </>
  );
}

export default App;