import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import layout components
import Layout from './components/layout/Layout';

// Import page components
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import PerformancePage from './pages/PerformancePage';
import GalleryPage from './pages/GalleryPage';
import MapPage from './pages/MapPage';
import AboutUsPage from './pages/AboutUsPage';
import FaqPage from './pages/FaqPage';

// Import UI components
import FloatingHelpButton from './components/ui/FloatingHelpButton';
import PWAInstallPrompt from './components/ui/PWAInstallPrompt';

function App() {
  return (
    <HelmetProvider>
      <Router basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/performance" element={<PerformancePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <FloatingHelpButton />
          <PWAInstallPrompt />
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;