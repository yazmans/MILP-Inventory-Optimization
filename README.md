# Cocina Casa Monarca

Desktop app for kitchen inventory and weekly shopping management. Built with Electron and React.

## Features

- Weekly attendance tracking by portion size (chicas, medianas, grandes)
- Recipe management with per-person ingredient quantities
- Automatic shopping list based on current inventory and expected demand
- Inventory management across storage locations (bodega, refrigerador, congelador)
- Dashboard with low-stock alerts

## Requirements

- [Node.js](https://nodejs.org/) 18 or higher
- npm (included with Node.js)

## Run in development

```bash
npm install
npm start
```

## Build for distribution

Each command produces a distributable in the `dist/` folder.

### macOS

```bash
npm run build -- --mac
```

Output: `dist/Cocina Casa Monarca-1.0.0.dmg`

Requires macOS to build. For code signing, set the `CSC_LINK` and `CSC_KEY_PASSWORD` environment variables with your Apple Developer certificate.

### Windows

```bash
npm run build -- --win
```

Output: `dist/Cocina Casa Monarca Setup 1.0.0.exe`

Can be built on Windows or macOS (cross-compilation). No code signing required to run, but Windows may show a SmartScreen warning on unsigned installers.

### Linux

```bash
npm run build -- --linux
```

Output: `dist/Cocina Casa Monarca-1.0.0.AppImage`

The AppImage is self-contained and runs on most modern Linux distributions without installation.

---

### Build all three at once

```bash
npm run build -- --mac --win --linux
```

> Note: building for all platforms at once works best on macOS with the required toolchains installed. Cross-compiling Windows targets may require [Wine](https://www.winehq.org/) on Linux/macOS.

## Project structure

```
.
├── main.js               # Electron main process
├── preload.js            # Electron preload script
├── app.jsx               # React root component
├── compute.js            # Pure business logic (window.CM)
├── data.js               # Seed data
├── styles.css            # All styles
├── Cocina Casa Monarca.html  # App shell
├── components/           # React components (loaded via Babel Standalone)
│   ├── DashboardView.jsx
│   ├── InventoryView.jsx
│   ├── RecipesView.jsx
│   ├── AttendanceView.jsx
│   ├── PurchasesView.jsx
│   ├── Sidebar.jsx
│   └── Icon.jsx
└── assets/               # Icons and images
```

## Tech stack

- [Electron](https://www.electronjs.org/) — desktop shell
- [React 18](https://react.dev/) — UI (loaded from CDN, no bundler)
- [Babel Standalone](https://babeljs.io/docs/babel-standalone) — JSX transpilation at runtime
- [sql.js](https://sql.js.org/) — SQLite in the browser context
