// Pure compute helpers — read attendance + recipes + inventory, return shopping list.

(function () {
  function weightedPeople(attendance) {
    const m = window.PORTION_MULTIPLIERS;
    return (
      attendance.chicas   * m.chicas   +
      attendance.medianas * m.medianas +
      attendance.grandes  * m.grandes
    );
  }

  function totalPeople(attendance) {
    return attendance.chicas + attendance.medianas + attendance.grandes;
  }

  // Build per-ingredient demand map { ingredientId: { needed, unit, byRecipe: [...] } }
  function computeDemand(recipes, attendance) {
    const wp = weightedPeople(attendance);
    const out = {};
    recipes.forEach((r) => {
      r.ingredients.forEach((ing) => {
        const need = ing.qtyPerPerson * wp;
        if (!out[ing.id]) out[ing.id] = { id: ing.id, needed: 0, unit: ing.unit, byRecipe: [] };
        out[ing.id].needed += need;
        out[ing.id].byRecipe.push({ recipeId: r.id, recipeName: r.name, qty: need });
      });
    });
    return out;
  }

  // Build the suggested shopping list — needed minus available stock.
  function computeShoppingList(recipes, inventory, attendance) {
    const demand = computeDemand(recipes, attendance);
    const invById = Object.fromEntries(inventory.map((i) => [i.id, i]));
    const rows = [];
    Object.values(demand).forEach((d) => {
      const inv = invById[d.id];
      const name = inv ? inv.name : d.id;
      const stock = inv ? inv.qty : 0;
      const deficit = d.needed - stock;
      const status = deficit > 0
        ? "comprar"
        : stock < d.needed * 1.15
          ? "ajustado"
          : "suficiente";
      rows.push({
        id: d.id,
        name,
        unit: d.unit,
        needed: d.needed,
        stock,
        suggested: Math.max(0, deficit),
        byRecipe: d.byRecipe,
        status,
      });
    });
    // Sort: things to buy first (largest deficit), then tight, then sufficient.
    rows.sort((a, b) => {
      const order = { comprar: 0, ajustado: 1, suficiente: 2 };
      if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
      return b.suggested - a.suggested;
    });
    return rows;
  }

  function fmtQty(n, unit) {
    if (n == null || isNaN(n)) return "—";
    let s;
    if (unit === "pieza") s = Math.round(n).toString();
    else if (n >= 100) s = n.toFixed(0);
    else if (n >= 10) s = n.toFixed(1);
    else s = n.toFixed(2);
    return s;
  }

  // ISO week helper, just for the header
  function isoWeek(d) {
    const date = new Date(d.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7);
  }

  window.CM = {
    weightedPeople,
    totalPeople,
    computeDemand,
    computeShoppingList,
    fmtQty,
    isoWeek,
  };
})();
