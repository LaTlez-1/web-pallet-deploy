import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainApp from './pages/MainApp';
import ExcelDownload from './pages/ExcelDownload';
import CreditsPage from './components/CreditsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/download-excel" element={<ExcelDownload />} />
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
