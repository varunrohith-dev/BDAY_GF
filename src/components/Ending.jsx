import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Ending Component
 * SECTION 3 - ENDING (Signature & P.S. Closing Note)
 * Intimate closing with glowing gold signature and still, quiet frame.
 * 
 * PLACEHOLDER CUSTOMIZATION:
 * Change `senderName` or `psMessage` to personalize the closing signature and final note.
 */
export default function Ending({
  senderName = "Kannukutty",
  psMessage = "May this year bring you as much brightness as you bring to everyone around you."
}) {

  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-transparent to-[#0c0b0a] z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full space-y-8"
      >
        {/* Divider Flourish */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a13b]/40" />
          <div className="w-2 h-2 rounded-full bg-[#c9a13b]/60" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a13b]/40" />
        </div>

        {/* Signature Line */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-[#c9a13b]/80 font-medium">
            With love,
          </p>
          <h3 className="font-signature text-3xl sm:text-4xl text-[#dfb857] gold-text-glow pt-2 pb-1">
            {senderName}
          </h3>
        </div>

        {/* P.S. Final Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-4 px-6 border-t border-[#c9a13b]/15"
        >
          <p className="font-handwriting text-lg sm:text-xl text-[#f2e9d8]/90 italic leading-relaxed">
            {psMessage}
          </p>
        </motion.div>

        {/* Quiet Closing Soft Glow Frame (No CTAs, No Chrome) */}
        <div className="pt-8">
          <div className="w-1.5 h-1.5 mx-auto rounded-full bg-[#c9a13b]/40 animate-pulse" />
        </div>
      </motion.div>
    </footer>
  );
}
