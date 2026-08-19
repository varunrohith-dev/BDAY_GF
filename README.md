# Envelope — A Birthday Letter Web App

"Envelope" is a minimalist, intimate single-page React birthday letter website built with **React (Vite)**, **Framer Motion**, **Howler.js**, and **Tailwind CSS**.

---

## 🚀 Quick Start (Local Setup)

To run the application locally:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎵 Customizing Audio (Background Music)

1. Drop your custom music file (e.g. `bg-music.mp3`) into the `public/` directory:
   ```
   pattani/
   ├── public/
   │   └── bg-music.mp3   <-- Drop your soft piano / lofi MP3 file here
   ```
2. If no custom file is provided, the app automatically plays a soft ambient Web Audio synth loop so audio works out-of-the-box!
3. To customize the audio file path or volume, open `src/components/AudioToggle.jsx` and edit:
   ```javascript
   const AUDIO_SRC = '/bg-music.mp3'; // Replace with your custom filename
   ```

---

## ✍️ Customizing Letter Content & Names

All recipient details and letter text are marked with clearly visible `{/* REPLACE: ... */}` comments:

- **Recipient Initial & Name**: Edit props or default values in `src/components/Envelope.jsx` and `src/components/Letter.jsx`:
  ```jsx
  recipientInitial = "P", {/* REPLACE: recipient initial */}
  recipientName = "Pattani", {/* REPLACE: recipient name */}
  ```
- **Letter Body Paragraphs**: Edit paragraphs inside `src/components/Letter.jsx`.
- **Closing Signature & P.S. Note**: Edit `senderName` and `psMessage` in `src/components/Ending.jsx`:
  ```jsx
  senderName = "Your Name", {/* REPLACE: your name */}
  psMessage = "P.S. May this year bring you as much brightness as you bring to everyone around you."
  ```

---

## 🖼️ Adding Photos (Optional)

If you'd like to add photos to the letter:
1. Place photo images in `public/photos/` (e.g. `public/photos/memory.jpg`).
2. In `src/components/Letter.jsx`, insert standard HTML/JSX `<img>` tags inside the paper container:
   ```jsx
   <img src="/photos/memory.jpg" alt="A special memory" className="rounded shadow-md my-4 rotate-1 max-w-full" />
   ```

---

## 🎨 Color Palette & Fonts

- **Paper Background**: `#f2e9d8`
- **Deep Charcoal**: `#0c0b0a`
- **Muted Gold Accent**: `#c9a13b`
- **Headings Font**: `'Playfair Display'` via Google Fonts
- **Handwriting Font**: `'Caveat'` and `'Homemade Apple'` via Google Fonts
