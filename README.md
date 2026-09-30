# NMT – National Machine Tools website

React 19 + Vite 6 + React Router + Framer Motion.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
npm run preview  # serve dist/ locally
```

## Editing content

All text, products, specs, services, clients, FAQs and contact details live in
`src/data/site.js`. Images are in `public/images/`.

## Images

- `public/images/` — NMT's own product photos, certificates and client logos (from the previous site).
- `public/images/stock/` — CC0 / public-domain industrial photos found via Openverse
  (sources: rawpixel.com CC0 collection and Wikimedia Commons "Holstein at Dusk"). Free for commercial use, no credit required.
- To replace any of them with AI-generated images, see `AI-IMAGE-PROMPTS.md`.

## Deploying

Upload the contents of `dist/` to any static host. SPA route rewrites are included for
Apache/cPanel (`.htaccess`), Netlify (`_redirects`) and Vercel (`vercel.json`).

## Forms

There is no backend: the quote wizard opens WhatsApp with the enquiry pre-filled, and the
contact form opens the visitor's email app. To collect submissions server-side, swap the
`submit` handlers in `src/components/QuoteModal.jsx` and `src/pages/Contact.jsx` for a
service such as Formspree, EmailJS or your own API.

## Note on this machine

Windows Application Control blocks the native binaries used by Vite's default toolchain, so
`package.json` overrides `rollup` and `esbuild` with their WebAssembly builds. On a normal
machine or CI you can remove the `overrides` block.
