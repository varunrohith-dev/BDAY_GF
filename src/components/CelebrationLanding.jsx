import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * CelebrationLanding Component (Stage 2 & Full Screen View)
 * Features:
 * 1. Prominent "Happy Birthday Pattani (எ) Anandhi Rajanbabu" Title & Photo Card
 * 2. Animated floating birthday emojis across transparent page background
 * 3. Second Envelope with Transparent Background & Glassmorphism styling
 * 4. Full Screen View mode for 2nd Envelope entering with a transparent backdrop
 * 5. Tap-to-open interaction leading to the main birthday letter
 */
export default function CelebrationLanding({ onOpenLetter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        onOpenLetter();
      }, shouldReduceMotion ? 300 : 900);
    }
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    setIsFullScreen(!isFullScreen);
  };

  // Preset floating emojis array with dynamic positions & animation delays
  const floatingEmojis = [
    { symbol: '🎂', left: '8%', delay: 0, duration: 7, size: 'text-2xl sm:text-4xl' },
    { symbol: '🎉', left: '20%', delay: 1.5, duration: 8, size: 'text-3xl sm:text-5xl' },
    { symbol: '🥳', left: '35%', delay: 0.5, duration: 6.5, size: 'text-2xl sm:text-4xl' },
    { symbol: '✨', left: '48%', delay: 2, duration: 9, size: 'text-xl sm:text-3xl' },
    { symbol: '💖', left: '62%', delay: 1, duration: 7.5, size: 'text-2xl sm:text-4xl' },
    { symbol: '🎁', left: '75%', delay: 2.5, duration: 8, size: 'text-3xl sm:text-5xl' },
    { symbol: '🎈', left: '88%', delay: 0.8, duration: 7, size: 'text-2xl sm:text-4xl' },
    { symbol: '🎆', left: '14%', delay: 3, duration: 9, size: 'text-2xl sm:text-4xl' },
    { symbol: '💫', left: '82%', delay: 3.5, duration: 8.5, size: 'text-xl sm:text-3xl' },
    { symbol: '💖', left: '28%', delay: 4, duration: 7, size: 'text-xl sm:text-3xl' },
    { symbol: '🎂', left: '68%', delay: 4.5, duration: 8, size: 'text-2xl sm:text-4xl' },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#0c0b0a] px-3 sm:px-6 md:px-8 py-6 sm:py-10 overflow-hidden select-none">
      
      {/* FULL PAGE BRIGHTER TRANSPARENT BACKGROUND IMAGE (Pattani photo as full backdrop) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/pattani.jpg"
          alt="Pattani Background"
          className="w-full h-full object-contain object-top sm:object-cover sm:object-center opacity-70 filter brightness-115 contrast-105 saturate-110 sm:scale-105 transition-all duration-700"
        />
        {/* Lighter Transparent Overlay for brighter background photo view */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0b0a]/45 via-[#0c0b0a]/20 to-[#0c0b0a]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_25%,#0c0b0a_85%)] opacity-80" />
      </div>

      {/* Background Ambient Radial Glow & Shimmer */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_30%,rgba(212,160,23,0.25)_0%,rgba(168,40,70,0.15)_50%,transparent_85%)] z-0" />

      {/* Floating Emojis Animation Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {floatingEmojis.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: '105vh', opacity: 0, scale: 0.8 }}
            animate={
              shouldReduceMotion
                ? { opacity: 0.6 }
                : {
                    y: ['105vh', '-10vh'],
                    opacity: [0, 0.9, 0.9, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [0.9, 1.1, 0.95],
                  }
            }
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'linear',
            }}
            style={{ left: item.left }}
            className={`absolute ${item.size} filter drop-shadow-[0_4px_12px_rgba(201,161,59,0.3)]`}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* TOP & MIDDLE SECTION: Big Grand Heading with Text Transparency */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 0.92, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 my-auto text-center max-w-6xl mx-auto pt-4 sm:pt-6 px-2 flex flex-col items-center opacity-92 hover:opacity-100 transition-opacity duration-300"
      >
        {/* Large Main Heading with Semi-Transparency */}
        <h1 className="responsive-title font-display font-bold text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fef3c7]/90 via-[#f59e0b]/90 to-[#d97706]/90 drop-shadow-[0_4px_25px_rgba(217,119,6,0.4)] opacity-90">
          Happy Birthday
        </h1>

        {/* Big Name & Tamil Alias display with Semi-Transparency */}
        <div className="mt-2 sm:mt-5 space-y-2">
          <h2 className="responsive-name font-display font-extrabold text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff]/90 via-[#fef08a]/90 to-[#eab308]/90 drop-shadow-[0_6px_30px_rgba(234,179,8,0.5)] opacity-90">
            Pattani
          </h2>

          <p className="responsive-sub font-display font-bold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-3 opacity-90">
            <span className="text-xs sm:text-lg md:text-xl font-normal text-[#fda4af] bg-[#881337]/60 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full border border-[#f43f5e]/50 shadow-md font-serif">
              (எ)
            </span>
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#f43f5e]/90 via-[#fb7185]/90 to-[#fbcfe8]/90 drop-shadow-[0_4px_20px_rgba(244,63,94,0.5)]">
              ANANDHI RAJANBABU
            </span>
          </p>
        </div>
      </motion.div>

      {/* BOTTOM SECTION: Second Envelope with Transparent Background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="relative z-10 w-full flex flex-col items-center mt-auto pt-6 pb-4"
      >
        {/* SECOND ENVELOPE (Transparent Glass & Royal Burgundy Foil Design) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { y: 0 }}
          animate={
            isOpen || shouldReduceMotion
              ? { y: 0 }
              : { y: [-5, 5, -5] }
          }
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={handleEnvelopeClick}
          className="relative cursor-pointer group perspective-1000 w-full max-w-[280px] xs:max-w-[330px] sm:max-w-[420px] md:max-w-[480px] responsive-envelope aspect-[4/3] touch-manipulation"
        >
          {/* Crimson / Burgundy Ambient Glow */}
          <div className="absolute inset-0 bg-[#881337]/40 rounded-xl blur-xl group-hover:bg-[#f43f5e]/40 transition-all duration-700 pointer-events-none" />

          {/* Envelope Base Body (Transparent Background Glass Texture) */}
          <div className="relative w-full h-full bg-[#2a0812]/50 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border-2 border-[#f59e0b]/60 transform-style-3d bg-transparent">
            
            {/* Gold Filigree Corner Accents */}
            <div className="absolute top-2 left-2 z-10 w-6 h-6 border-t-2 border-l-2 border-[#dfb857]/80" />
            <div className="absolute top-2 right-2 z-10 w-6 h-6 border-t-2 border-r-2 border-[#dfb857]/80" />
            <div className="absolute bottom-2 left-2 z-10 w-6 h-6 border-b-2 border-l-2 border-[#dfb857]/80" />
            <div className="absolute bottom-2 right-2 z-10 w-6 h-6 border-b-2 border-r-2 border-[#dfb857]/80" />

            {/* Letter Paper Sliding Out (Transparent parchment style) */}
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={
                isOpen
                  ? { y: -130, opacity: 1, scale: 1.02 }
                  : { y: 0, opacity: 0 }
              }
              transition={{
                duration: 0.7,
                ease: [0.25, 1, 0.5, 1],
                delay: 0.3,
              }}
              className="absolute left-[6%] right-[6%] top-[10%] h-[80%] bg-[#fffbeb]/90 backdrop-blur-md rounded-lg p-5 shadow-lg z-10 flex flex-col justify-between border border-[#d97706]/50"
            >
              <div className="space-y-2">
                <div className="h-2.5 w-32 bg-[#d97706]/40 rounded" />
                <div className="h-1.5 w-full bg-[#451a03]/30 rounded" />
                <div className="h-1.5 w-5/6 bg-[#451a03]/30 rounded" />
                <div className="h-1.5 w-4/6 bg-[#451a03]/30 rounded" />
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg">💌</span>
                <span className="font-handwriting text-sm text-[#881337] font-bold">
                  To Anandhi...
                </span>
              </div>
            </motion.div>

            {/* Pocket Side Flaps with Translucent Red/Gold Gradient Folds */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div
                className="absolute left-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#1c040b]/80 via-[#370a18]/70 to-[#25050f]/60 backdrop-blur-xs"
                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
              />
              <div
                className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-[#1c040b]/80 via-[#370a18]/70 to-[#25050f]/60 backdrop-blur-xs"
                style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
              />
              <div
                className="absolute left-0 right-0 bottom-0 h-3/5 bg-gradient-to-t from-[#150207]/90 via-[#430b1e]/75 to-[#270611]/60 backdrop-blur-xs"
                style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
              />
            </div>

            {/* Animated Top Triangle Flap (Translucent gradient) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              style={{
                transformOrigin: 'top center',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
              className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-[#5c0d28]/90 via-[#4c0a20]/80 to-[#2a0512]/70 z-30 shadow-xl border-b-2 border-[#fbbf24]/70 backdrop-blur-xs"
            />

            {/* Royal Gold & Crimson Crown Wax Seal */}
            <motion.div
              initial={{ scale: 1 }}
              animate={
                isOpen
                  ? { scale: 0.8, opacity: 0 }
                  : { scale: [1, 1.05, 1] }
              }
              transition={{
                duration: isOpen ? 0.3 : 3,
                repeat: isOpen ? 0 : Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#fef08a] via-[#eab308] to-[#9a3412] flex items-center justify-center shadow-2xl border-2 border-[#fffbeb]/50 cursor-pointer group-hover:scale-110 transition-transform"
            >
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border-2 border-[#fef08a]/70 flex items-center justify-center bg-[#881337]/90 shadow-inner">
                <span className="text-xl sm:text-2xl filter drop-shadow-md">
                  👑
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>

      {/* FULL SCREEN VIEW MODAL FOR 2ND ENVELOPE WITH TRANSPARENT BACKGROUND */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-4 sm:p-8 overflow-y-auto"
            onClick={() => setIsFullScreen(false)}
          >
            {/* Full Screen View Container with Completely Transparent Background */}
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-transparent border border-[#f59e0b]/40 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col items-center backdrop-blur-md overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsFullScreen(false)}
                className="absolute top-4 right-4 text-[#fef08a] bg-[#881337]/80 hover:bg-[#881337] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-[#f59e0b]/50 shadow-md transition-transform hover:scale-110 active:scale-95 z-50 cursor-pointer"
                title="Close Full Screen View"
              >
                ✕
              </button>

              {/* Header Badge */}
              <div className="mb-4 bg-[#881337]/60 border border-[#f59e0b]/50 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[#fef08a] shadow-inner">
                Full Screen View ✉️
              </div>

              {/* Greeting Accent inside Full Screen View */}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#fef08a] drop-shadow-md">
                  2nd Birthday Envelope
                </h3>
                <p className="text-xs sm:text-sm text-[#fda4af] font-medium mt-1">
                  Special message for Anandhi Rajanbabu
                </p>
              </div>

              {/* Second Envelope Rendered inside Full Screen View with Transparent Backdrop */}
              <div className="w-full flex justify-center py-4">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  onClick={handleEnvelopeClick}
                  className="relative cursor-pointer group perspective-1000 w-full max-w-[340px] sm:max-w-[420px] aspect-[4/3] touch-manipulation"
                >
                  <div className="absolute inset-0 bg-[#881337]/50 rounded-xl blur-2xl group-hover:bg-[#f43f5e]/50 transition-all duration-700" />
                  <div className="relative w-full h-full bg-[#2a0812]/60 backdrop-blur-lg rounded-xl shadow-2xl border-2 border-[#f59e0b]/70 transform-style-3d overflow-hidden">
                    {/* Corner Accents */}
                    <div className="absolute top-2 left-2 z-10 w-6 h-6 border-t-2 border-l-2 border-[#dfb857]" />
                    <div className="absolute top-2 right-2 z-10 w-6 h-6 border-t-2 border-r-2 border-[#dfb857]" />
                    <div className="absolute bottom-2 left-2 z-10 w-6 h-6 border-b-2 border-l-2 border-[#dfb857]" />
                    <div className="absolute bottom-2 right-2 z-10 w-6 h-6 border-b-2 border-r-2 border-[#dfb857]" />

                    {/* Sliding letter peek */}
                    <div className="absolute left-[6%] right-[6%] top-[12%] h-[76%] bg-[#fffbeb]/95 rounded-lg p-5 shadow-lg z-10 flex flex-col justify-between border border-[#d97706]">
                      <div className="space-y-2">
                        <div className="h-3 w-36 bg-[#d97706]/40 rounded" />
                        <div className="h-2 w-full bg-[#451a03]/30 rounded" />
                        <div className="h-2 w-5/6 bg-[#451a03]/30 rounded" />
                        <div className="h-2 w-4/6 bg-[#451a03]/30 rounded" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xl">💌</span>
                        <span className="font-handwriting text-base text-[#881337] font-bold">
                          Tap seal to open letter...
                        </span>
                      </div>
                    </div>

                    {/* Crown Wax Seal */}
                    <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-[#fef08a] via-[#eab308] to-[#9a3412] flex items-center justify-center shadow-2xl border-2 border-[#fffbeb] cursor-pointer hover:scale-110 transition-transform">
                      <span className="text-2xl filter drop-shadow-md">👑</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Tap Instruction */}
              <p className="mt-4 text-xs sm:text-sm text-[#fef08a] font-semibold tracking-wider text-center bg-black/30 px-4 py-2 rounded-full border border-[#f59e0b]/30">
                Click the envelope above or tap seal to reveal full handwritten birthday letter ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

