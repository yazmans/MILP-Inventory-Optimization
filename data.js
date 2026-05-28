// Hardcoded seed data for the Casa Monarca prototype.
// Units: kg, L, pieza (pieces).
// Locations: bodega, refrigerador, congelador.

window.INITIAL_INVENTORY = [
  { id: "frijol",       name: "Frijol negro",       qty: 12,  unit: "kg",    location: "bodega",       par: 18 },
  { id: "arroz",        name: "Arroz",              qty: 18,  unit: "kg",    location: "bodega",       par: 22 },
  { id: "cebolla",      name: "Cebolla blanca",     qty: 5,   unit: "kg",    location: "refrigerador", par: 7 },
  { id: "aceite",       name: "Aceite vegetal",     qty: 8,   unit: "L",     location: "bodega",       par: 6 },
  { id: "pollo",        name: "Pollo en piezas",    qty: 14,  unit: "kg",    location: "congelador",   par: 30 },
  { id: "mole",         name: "Mole en pasta",      qty: 3,   unit: "kg",    location: "bodega",       par: 4 },
  { id: "tortilla",     name: "Tortilla de maíz",   qty: 200, unit: "pieza", location: "refrigerador", par: 600 },
  { id: "zanahoria",    name: "Zanahoria",          qty: 4,   unit: "kg",    location: "refrigerador", par: 8 },
  { id: "calabaza",     name: "Calabacita",         qty: 3,   unit: "kg",    location: "refrigerador", par: 5 },
  { id: "caldo",        name: "Caldo de pollo",     qty: 6,   unit: "L",     location: "refrigerador", par: 12 },
  { id: "lechuga",      name: "Lechuga",            qty: 2,   unit: "kg",    location: "refrigerador", par: 4 },
  { id: "tomate",       name: "Tomate saladette",   qty: 7,   unit: "kg",    location: "refrigerador", par: 10 },
  { id: "pepino",       name: "Pepino",             qty: 3,   unit: "kg",    location: "refrigerador", par: 4 },
  { id: "carne",        name: "Carne molida res",   qty: 5,   unit: "kg",    location: "congelador",   par: 12 },
  { id: "papa",         name: "Papa blanca",        qty: 10,  unit: "kg",    location: "bodega",       par: 14 },
  { id: "jamaica",      name: "Flor de jamaica",    qty: 1,   unit: "kg",    location: "bodega",       par: 1.5 },
  { id: "azucar",       name: "Azúcar estándar",    qty: 6,   unit: "kg",    location: "bodega",       par: 8 },
  { id: "sal",          name: "Sal de mesa",        qty: 4,   unit: "kg",    location: "bodega",       par: 3 },
];

// Recipes — qtyPerPerson is the base quantity assumed for one *medium* portion.
// Small (0.7x) and Large (1.3x) portion sizes are applied at compute time.
window.INITIAL_RECIPES = [
  {
    id: "frijol-arroz",
    name: "Frijoles charros con arroz",
    category: "Plato fuerte",
    note: "Receta base de la semana",
    ingredients: [
      { id: "frijol",  qtyPerPerson: 0.08, unit: "kg" },
      { id: "arroz",   qtyPerPerson: 0.06, unit: "kg" },
      { id: "cebolla", qtyPerPerson: 0.02, unit: "kg" },
      { id: "aceite",  qtyPerPerson: 0.01, unit: "L"  },
      { id: "sal",     qtyPerPerson: 0.003, unit: "kg" },
    ],
  },
  {
    id: "pollo-mole",
    name: "Pollo en mole rojo",
    category: "Plato fuerte",
    note: "Domingos y días festivos",
    ingredients: [
      { id: "pollo",    qtyPerPerson: 0.18, unit: "kg" },
      { id: "mole",     qtyPerPerson: 0.04, unit: "kg" },
      { id: "arroz",    qtyPerPerson: 0.06, unit: "kg" },
      { id: "tortilla", qtyPerPerson: 3,    unit: "pieza" },
    ],
  },
  {
    id: "picadillo",
    name: "Picadillo con papa",
    category: "Plato fuerte",
    note: "Cena del miércoles",
    ingredients: [
      { id: "carne",     qtyPerPerson: 0.15, unit: "kg" },
      { id: "papa",      qtyPerPerson: 0.08, unit: "kg" },
      { id: "zanahoria", qtyPerPerson: 0.04, unit: "kg" },
      { id: "tomate",    qtyPerPerson: 0.04, unit: "kg" },
      { id: "cebolla",   qtyPerPerson: 0.015, unit: "kg" },
    ],
  },
  {
    id: "sopa-verduras",
    name: "Sopa de verduras",
    category: "Complemento",
    note: "Acompañante del plato fuerte",
    ingredients: [
      { id: "zanahoria", qtyPerPerson: 0.05, unit: "kg" },
      { id: "calabaza",  qtyPerPerson: 0.05, unit: "kg" },
      { id: "caldo",     qtyPerPerson: 0.20, unit: "L"  },
    ],
  },
  {
    id: "ensalada",
    name: "Ensalada fresca mixta",
    category: "Complemento",
    note: "Servida fría",
    ingredients: [
      { id: "lechuga", qtyPerPerson: 0.04, unit: "kg" },
      { id: "tomate",  qtyPerPerson: 0.05, unit: "kg" },
      { id: "pepino",  qtyPerPerson: 0.03, unit: "kg" },
    ],
  },
  {
    id: "jamaica",
    name: "Agua de jamaica",
    category: "Complemento",
    note: "Bebida principal",
    ingredients: [
      { id: "jamaica", qtyPerPerson: 0.015, unit: "kg" },
      { id: "azucar",  qtyPerPerson: 0.04,  unit: "kg" },
    ],
  },
];

window.PORTION_MULTIPLIERS = { chicas: 0.7, medianas: 1.0, grandes: 1.3 };

window.INITIAL_ATTENDANCE = { chicas: 80, medianas: 120, grandes: 60 };

window.LOCATIONS = ["bodega", "refrigerador", "congelador"];
window.UNITS = ["kg", "L", "pieza"];
window.CATEGORIES = ["Plato fuerte", "Complemento"];
