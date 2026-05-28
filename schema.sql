-- Enable foreign keys (SQLite has them disabled by default)
PRAGMA foreign_keys = ON;

-- Ingredients (catalog + inventory reference)
CREATE TABLE ingredients (
    id                    INTEGER PRIMARY KEY AUTOINCREMENT,
    slug                  TEXT    UNIQUE,              -- app-level string identifier
    name                  TEXT    NOT NULL,
    base_unit             TEXT    NOT NULL DEFAULT 'kg', -- kg, L, pieza
    amount_per_portion    REAL    NOT NULL DEFAULT 0,
    par                   REAL    NOT NULL DEFAULT 0    -- reorder target
);

-- People (beneficiaries of Casa Monarca)
CREATE TABLE people (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT    NOT NULL,
    age           INT     NOT NULL,
    portion_type  TEXT    NOT NULL CHECK (portion_type IN ('S', 'M', 'L')),
    arrival       DATETIME,   -- last check-in timestamp
    departure     DATETIME    -- last check-out timestamp; NULL = currently present
);

-- Recipes
CREATE TABLE recipes (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    slug          TEXT    UNIQUE,
    name          TEXT    NOT NULL,
    category      TEXT    NOT NULL DEFAULT 'Plato fuerte',
    note          TEXT    NOT NULL DEFAULT '',
    instructions  TEXT
);

-- Recipe-ingredient bridge table
-- base_portions = qtyPerPerson for a medium portion
CREATE TABLE recipe_ingredient (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    recipe_id       INTEGER NOT NULL,
    ingredient_id   INTEGER NOT NULL,
    base_portions   REAL    NOT NULL DEFAULT 1,
    FOREIGN KEY (recipe_id)     REFERENCES recipes(id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id),
    UNIQUE (recipe_id, ingredient_id)
);

-- Inventory (current stock per ingredient)
CREATE TABLE inventory_item (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    ingredient_id   INTEGER NOT NULL,
    portion         REAL    NOT NULL DEFAULT 0,  -- current qty in base_unit
    location        TEXT,                         -- bodega, refrigerador, congelador
    expiration_date DATE,
    last_updated    DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);

-- Suggested purchases (calculated, not persisted permanently)
CREATE TABLE suggested_purchase (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    ingredient_id   INTEGER NOT NULL,
    portion         REAL    NOT NULL,
    generated_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id)
);
