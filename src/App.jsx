import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import CareersPage from './pages/CareersPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App; 