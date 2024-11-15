import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/homepage/HomePage';
import ProductDetails from '../src/components/productdetailpage/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
