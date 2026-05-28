# Cocina Casa Monarca

Aplicación de escritorio para gestión de inventario, menú semanal y compras de cocina. Construida con Electron y React.

## Funcionalidades

- Registro de asistencia por tamaño de porción (chica, mediana, grande)
- Catálogo de recetas con cantidades por persona
- Inventario por ubicación (bodega, refrigerador, congelador)
- Optimización automática del menú y compras semanales mediante MILP
- Panel de alertas de bajo stock

## Algoritmo de optimización (MILP)

La vista **Compras sugeridas** incluye un optimizador de programación lineal entera mixta (MILP) implementado en `milp_solver.py` con el solver CBC a través de [PuLP](https://coin-or.github.io/pulp/).

### Qué resuelve

Dado el inventario actual y la asistencia registrada, el modelo genera el **menú óptimo de 7 días** (desayuno, comida y cena) y la **lista de compras mínima** para cubrirlo, minimizando el costo total de adquisición.

### Conjuntos

| Símbolo | Descripción |
|---------|-------------|
| I | Ingredientes (arroz, pollo, frijoles, …) |
| K | Días de la semana (d1 … d7) |
| C | Tiempos de comida (Desayuno, Comida, Cena) |
| U | Platillos complemento (ArrozCalabacita, AvenaLeche, …) |
| P | Proteínas (Pollo, Res, Mojarra, Huevo, Jamón, Atún) |
| J | Ubicaciones de almacén (Ambiente, Refrigerado, Congelado) |

### Función objetivo

Minimizar el costo total de compras:

```
min  Σ costo[i] · x_store[i][j]   ∀ i ∈ I, j ∈ J
```

### Variables de decisión principales

| Variable | Descripción |
|----------|-------------|
| `x_store[i][j]` | Paquetes a comprar del ingrediente `i` para almacén `j` |
| `inv[i][j][k]` | Inventario de `i` en ubicación `j` al final del día `k` |
| `transfer[i][k]` | Gramos transferidos de Congelado → Refrigerado el día `k` |
| `b_prot[i][k][c]` | Binaria — proteína `i` seleccionada en comida `c` del día `k` |
| `b_comp[u][k][c]` | Binaria — complemento `u` seleccionado en comida `c` del día `k` |

### Restricciones principales

**Balance de inventario** — el stock de cada día se deriva del anterior más compras/transferencias menos consumo.

**Demanda nutricional** — cada tiempo de comida debe cubrir los gramos requeridos de proteína y complemento según la distribución de porciones (chica 100/52.5 g, mediana 180/92.5 g, grande 250/140 g). Desayuno y cena usan factor 0.5× respecto a comida.

**Selección de menú** — exactamente 1 proteína y 1 complemento por tiempo de comida y día, restringidos a las combinaciones válidas:

```
Desayuno → proteína: {Huevo, Jamón}         complemento: {FrijolesPapa, AvenaLeche, BolilloFrijol}
Comida   → proteína: {Pollo, Res, Mojarra}  complemento: {ArrozCalabacita, PapasZanahoria, ArrozJitomate}
Cena     → proteína: {Atún, Huevo, Jamón}   complemento: {PastaJitomate, PastaCalabacita, FrijolesPapa}
```

**Variedad** — ningún platillo se repite el mismo día ni en días consecutivos. Res y Mojarra deben aparecer al menos una vez en la semana.

**Capacidad de almacén** — el volumen total (en litros, ajustado por `factor_vol`) no supera la capacidad de refrigerador (550 L) y congelador (750 L) en ningún día.

**Vida útil** — cada ingrediente tiene una vida útil máxima (en días) por ubicación. El modelo usa una ventana deslizante que impide acumular inventario más antiguo que su vida útil en refrigerador, y fuerza a 0 el inventario de ubicaciones donde el ingrediente no puede almacenarse.

**Reserva de emergencia** — al final del día 7 debe quedar al menos el 15% de la demanda semanal total en proteínas y complementos, como colchón ante imprevistos.

### Requisito adicional

El script requiere Python 3 y PuLP:

```bash
pip install pulp
```

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
