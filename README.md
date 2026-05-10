# UGAC Website (Vanilla SPA)

Single-page app (hash routing) built with vanilla JavaScript + Tailwind CSS. Prism background uses `ogl`.

## Prerequisites

- Node.js (npm)

## Install

```bash
npm install
```

## Run (dev)

Start static dev server:

```bash
npm run dev
```

Open:

- `http://localhost:5173/#home`

If port `5173` busy:

```bash
set PORT=5174&&npm run dev
```

## Tailwind CSS

Build CSS once:

```bash
cmd.exe /c npx tailwindcss -i .\\src\\input.css -o .\\dist\\output.css
```

Watch mode:

```bash
npm run start
```

## Notes

- Do not open `index.html` by double-click (`file://`) — browser blocks ES module imports. Use `npm run dev`.

