# Soumyata's Proposal Portfolio

A clean, minimal React + Vite portfolio website for hosting strategic product management proposals.

## Tech Stack

- React 18 (JavaScript)
- Vite 5 for bundling
- Tailwind CSS for styling
- React Router DOM for routing

## Project Structure

```
src/
├── main.jsx                # React entry point
├── App.jsx                 # Router with landing + Apple route
├── index.css               # Tailwind directives
├── pages/
│   ├── LandingPage.jsx     # Minimal home page
│   └── for-Apple.jsx       # Sample proposal page

Configuration Files:
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env                    # Environment variables (optional)
└── index.html              # HTML template
```

## Setup & Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure Google Analytics:
   - Add your GA4 Measurement ID (`G-XXXXXXXXXX`) to `.env` as `VITE_GA_MEASUREMENT_ID`.

3. Start development server:
   ```bash
   npm run dev
   ```
   App will open at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   ```

## Adding New Proposal Pages

To add another company:

1. Create a new file in `src/pages/` named `for-[Company].jsx`.
2. Copy the structure from `for-Apple.jsx` and update the header/title.
3. Import and add a route in `src/App.jsx`:
   ```jsx
   import ForMicrosoft from './pages/for-Microsoft'
   // …
   <Route path="/for-microsoft" element={<ForMicrosoft />} />
   ```

4. Update the landing page link if desired.

## Routing

- `/` – landing page
- `/for-apple` – example proposal
- Add more routes in `App.jsx` as needed

## Notes

- This repo now contains only the essential “app shell.”
- Landing page and proposal page are intentionally barebones so you can plug in your existing code.
- No analytics, extra components, or folders remain.

Happy building! 🎯