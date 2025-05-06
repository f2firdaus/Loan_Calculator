
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'; 
import ExchangeTable from './components/ExchangeRateTable'; 
import NotFound from './pages/NotFound'; 
import Navbar from './components/Navbar'; 

import About from './pages/About';

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
        <Route path="/about" element={<About/>} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;