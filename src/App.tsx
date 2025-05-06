import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; // Adjust path as needed
import ExchangeTable from './components/ExchangeRateTable'; // Adjust path as needed
import NotFound from './pages/NotFound'; // Adjust path as needed
import Navbar from './components/Navbar'; // Adjust path as needed

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== '/notfound';

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange_rates_live" element={<ExchangeTable />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;