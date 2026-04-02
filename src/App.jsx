import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CoupleDetails from './components/CoupleDetails';
import EventDetails from './components/EventDetails';
import Venue from './components/Venue';
import Timeline from './components/Timeline';
import Countdown from './components/Countdown';
import Closing from './components/Closing';
import './App.css';

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="loading-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" width="80" height="80">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#800000" strokeWidth="0.5" strokeDasharray="4 6" />
          </svg>
        </motion.div>
        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="script-lg" style={{ fontSize: '2rem', color: 'var(--maroon)' }}>
            K & S
          </span>
        </motion.p>
        <motion.div
          className="loading-bar-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="loading-bar-fill"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <CoupleDetails />
          <EventDetails />
          <Venue />
          <Timeline />
          <Countdown />
          <Closing />
        </motion.main>
      )}
    </div>
  );
}
