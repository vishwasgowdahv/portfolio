import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Preloader from './components/layout/Preloader';
import CustomCursor from './components/layout/CustomCursor';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = preloaderDone ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [preloaderDone]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="noise-overlay" />
        <CustomCursor />
        <AnimatePresence>
          {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
        </AnimatePresence>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
