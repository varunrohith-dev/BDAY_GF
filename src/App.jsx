import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from './components/Envelope';
import CelebrationLanding from './components/CelebrationLanding';
import Letter from './components/Letter';
import Ending from './components/Ending';

/**
 * App Component
 * Multi-Stage Birthday Experience:
 * 
 * Stage 1: First Sealed Envelope (Intro Landing Page)
 * Stage 2: Celebration Landing Page ("Happy Birthday Pattani (எ) Anandhi Rajanbabu", Emojis & Second Envelope at bottom)
 * Stage 3: Main Birthday Letter & Ending Section
 */
export default function App() {
  // stage: 1 = First Envelope, 2 = Celebration Page, 3 = Main Letter Revealed
  const [stage, setStage] = useState(1);

  const handleFirstEnvelopeOpen = () => {
    // Transition from Stage 1 -> Stage 2
    setStage(2);
    // Smooth scroll to top of window for Stage 2
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSecondEnvelopeOpen = () => {
    // Transition from Stage 2 -> Stage 3
    setStage(3);

    // Smooth scroll to letter section
    setTimeout(() => {
      const letterElement = document.getElementById('letter-section');
      if (letterElement) {
        letterElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0c0b0a] text-[#2a2725] transition-colors duration-1000 relative">
      {/* Main Content Layout */}
      <main className="relative w-full flex flex-col items-center min-h-screen">
        <AnimatePresence mode="wait">
          {/* STAGE 1: FIRST ENVELOPE */}
          {stage === 1 && (
            <motion.div
              key="stage-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7 }}
              className="w-full min-h-screen flex items-center justify-center"
            >
              <Envelope onOpen={handleFirstEnvelopeOpen} />
            </motion.div>
          )}

          {/* STAGE 2 & STAGE 3: CELEBRATION LANDING & LETTER */}
          {stage >= 2 && (
            <motion.div
              key="stage-2-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center"
            >
              {/* Celebration Landing View with Big Title & Emojis & Second Envelope */}
              <CelebrationLanding onOpenLetter={handleSecondEnvelopeOpen} />

              {/* STAGE 3: REVEALED LETTER & ENDING */}
              <AnimatePresence>
                {stage === 3 && (
                  <motion.div
                    id="letter-section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    className="w-full flex flex-col items-center pt-8 pb-16 bg-transparent"
                  >
                    <Letter />
                    <Ending />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
