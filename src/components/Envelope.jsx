import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Envelope Component
 * SECTION 1 - INTRO
 * Sealed 3D Envelope with Gold Wax Seal & Opening Animation.
 * 
 * PLACEHOLDER CUSTOMIZATION:
 * Change `recipientInitial` or `recipientName` prop to personalize for the recipient.
 */
export default function Envelope({
  onOpen,
  recipientInitial = "P", /* REPLACE: recipient initial */
  recipientName = "Pattani" /* REPLACE: recipient name */
}) {

  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Wait for flap opening and letter peek animation before triggering page transition
      setTimeout(() => {
        onOpen();
      }, shouldReduceMotion ? 300 : 900);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0c0b0a] px-4 py-8 overflow-hidden select-none">
      {/* Soft background radial ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(201,161,59,0.08)_0%,transparent_70%)]" />

      {/* Sealed Envelope Container */}
      <motion.div
        initial={shouldReduceMotion ? {} : { y: 0 }}
        animate={
          isOpen || shouldReduceMotion
            ? { y: 0 }
            : { y: [-6, 6, -6] }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={handleEnvelopeClick}
        className="relative cursor-pointer group perspective-1000 w-full max-w-[280px] xs:max-w-[330px] sm:max-w-[420px] md:max-w-[480px] responsive-envelope aspect-[4/3] touch-manipulation"
      >
        {/* Outer Shadow with Gold Accent Glow */}
        <div className="absolute inset-0 bg-[#000000]/60 rounded-lg blur-xl group-hover:bg-[#c9a13b]/20 transition-all duration-700" />

        {/* Envelope Base Body */}
        <div className="relative w-full h-full bg-[#1b1917] rounded-lg shadow-2xl overflow-hidden border border-[#c9a13b]/30 transform-style-3d">
          
          {/* Paper Letter Sliding Out (Inside Envelope) */}
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={
              isOpen
                ? { y: -140, opacity: 1, scale: 1.02 }
                : { y: 0, opacity: 0 }
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 1, 0.5, 1],
              delay: 0.3,
            }}
            className="absolute left-[5%] right-[5%] top-[10%] h-[80%] bg-[#f2e9d8] rounded p-6 shadow-md z-10 flex flex-col justify-between border border-[#c9a13b]/20"
          >
            <div className="space-y-2">
              <div className="h-2 w-24 bg-[#c9a13b]/30 rounded" />
              <div className="h-1.5 w-full bg-[#2a2725]/20 rounded" />
              <div className="h-1.5 w-4/5 bg-[#2a2725]/20 rounded" />
              <div className="h-1.5 w-3/4 bg-[#2a2725]/20 rounded" />
            </div>
            <div className="flex justify-end">
              <div className="h-3 w-16 bg-[#c9a13b]/40 rounded font-handwriting text-xs text-[#2a2725] text-right">
                With love...
              </div>
            </div>
          </motion.div>

          {/* Bottom & Side Pocket Flaps (CSS Triangle Folds) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Left Pocket Side */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1/2 bg-gradient-to-r from-[#171513] to-[#221f1c]"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              }}
            />
            {/* Right Pocket Side */}
            <div
              className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-[#171513] to-[#221f1c]"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
              }}
            />
            {/* Bottom Pocket Fold */}
            <div
              className="absolute left-0 right-0 bottom-0 h-3/5 bg-gradient-to-t from-[#141211] to-[#25221e]"
              style={{
                clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              }}
            />
          </div>

          {/* Top Flap (Animated Opening) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={isOpen ? { rotateX: -180 } : { rotateX: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              transformOrigin: 'top center',
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
            className="absolute top-0 left-0 right-0 h-3/5 bg-gradient-to-b from-[#2e2a26] to-[#1c1a18] z-30 shadow-md border-b border-[#c9a13b]/40"
          />

          {/* Gold Wax Seal (Centered on Flap) */}
          <motion.div
            initial={{ scale: 1 }}
            animate={
              isOpen
                ? { scale: 0.8, opacity: 0 }
                : { scale: [1, 1.04, 1] }
            }
            transition={{
              duration: isOpen ? 0.3 : 3,
              repeat: isOpen ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#dfb857] via-[#c9a13b] to-[#8c6b1b] flex items-center justify-center shadow-xl border-2 border-[#f2e9d8]/30 cursor-pointer group-hover:scale-105 transition-transform"
          >
            {/* Inner Ring Seal Design */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-[#f2e9d8]/40 flex items-center justify-center bg-[#c9a13b]/40 shadow-inner">
              <span className="font-display font-bold text-lg sm:text-xl text-[#f2e9d8] drop-shadow-md">
                {recipientInitial}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtitle / Interaction Helper Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="mt-8 text-center"
      >
        <p className="text-[#c9a13b]/80 text-xs sm:text-sm font-light tracking-widest uppercase flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c9a13b] animate-ping" />
          Tap to open envelope
        </p>
      </motion.div>
    </section>
  );
}
