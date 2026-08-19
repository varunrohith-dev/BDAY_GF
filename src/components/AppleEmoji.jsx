import React from 'react';

/**
 * Map of common emojis to their exact Apple (iOS) Emoji CDN filename hex codes
 */
const EMOJI_TO_APPLE_HEX = {
  '👋': '1f44b',
  '💖': '1f496',
  '✨': '2728',
  '🗣️': '1f5e3-fe0f',
  '🗣': '1f5e3',
  '❤️': '2764-fe0f',
  '❤': '2764',
  '🌸': '1f338',
  '😍': '1f60d',
  '🥺': '1f97a',
  '💫': '1f4ab',
  '💍': '1f48d',
  '💌': '1f48c',
  '🥰': '1f970',
  '👑': '1f451',
  '🎉': '1f389',
  '🎂': '1f382',
  '🥳': '1f973',
  '🎁': '1f381',
  '🎈': '1f388',
  '📈': '1f4c8',
  '🌿': '1f33f',
  '💪': '1f4aa',
  '🙇‍♂️': '1f647-200d-2642-fe0f',
  '🙇': '1f647',
  '🙏': '1f64f',
  '💳': '1f4b3',
  '🏡': '1f3e1',
  '💰': '1f4b0',
  '🎯': '1f3af',
  '📊': '1f4ca',
  '💼': '1f4bc',
  '🚀': '1f680',
  '🌐': '1f310',
  '🔥': '1f525',
  '🤝': '1f91d',
  '👫': '1f46b',
  '🛡️': '1f6e1-fe0f',
  '🛡': '1f6e1',
  '🌟': '1f31f',
  '📖': '1f4d6',
  '💬': '1f4ac',
  '💭': '1f4ad',
  '💔': '1f494',
  '⭐': '2b50',
};

/**
 * Get Apple iOS Emoji CDN Image URL
 */
export function getAppleEmojiUrl(symbol) {
  if (EMOJI_TO_APPLE_HEX[symbol]) {
    return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${EMOJI_TO_APPLE_HEX[symbol]}.png`;
  }
  
  // Convert symbol to Unicode Hex string dynamically for fallbacks
  const codePoints = Array.from(symbol)
    .map((char) => char.codePointAt(0).toString(16))
    .filter((code) => code !== 'fe0f') // strip variation selector
    .join('-');
    
  return `https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/${codePoints}.png`;
}

/**
 * AppleEmoji Component
 * Renders authentic 100% iOS Apple Emoji image inline seamlessly with text.
 */
export default function AppleEmoji({ symbol, className = "w-6 h-6 inline-block align-middle mx-0.5" }) {
  const src = getAppleEmojiUrl(symbol);
  
  return (
    <img
      src={src}
      alt={symbol}
      className={`${className} object-contain transition-transform duration-200 hover:scale-110`}
      loading="lazy"
      onError={(e) => {
        // Fallback to text symbol if CDN fails to load
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}

/**
 * Helper to replace emoji string in text with AppleEmoji components
 */
export function renderWithAppleEmojis(text, emojiClassName = "w-5 h-5 inline-block align-middle mx-0.5") {
  if (typeof text !== 'string') return text;

  // Regex to match emojis
  const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

  const parts = text.split(emojiRegex);
  return parts.map((part, index) => {
    if (emojiRegex.test(part)) {
      return <AppleEmoji key={index} symbol={part} className={emojiClassName} />;
    }
    return part;
  });
}
