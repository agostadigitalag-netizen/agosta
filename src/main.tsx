import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import Websites from './pages/Websites.tsx';
import Qrcode from './pages/Qrcode.tsx';
import Social from './pages/Social.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/qrcode" element={<Qrcode />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
