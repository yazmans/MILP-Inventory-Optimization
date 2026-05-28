var { useState, useMemo } = React;

const InventoryView = ({ inventory, setInventory, recipes, attendance, onToast }) => {
  const [filter, setFilter] = useState("todo");
  const [query, setQuery] = useState("");

  const demand = useMemo(
    () => window.CM.computeDemand(recipes, attendance),
    [recipes, attendance]
  );

  const filtered = inventory.filter((row) => {
    if (filter !== "todo" && row.location !== filter) return false;
    if (query && !row.name.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  const stockState = (row) => {
    const need = demand[row.id]?.needed || 0;
    if (need === 0) return { kind: "ok", pct: Math.min(100, (row.qty / Math.max(row.par, 1)) * 100), label: "no usado" };
    const cover = row.qty / need;
    if (cover < 0.7) return { kind: "low", pct: Math.min(100, cover * 100), label: "deficitario" };
    if (cover < 1.1) return { kind: "tight", pct: Math.min(100, cover * 100), label: "ajustado" };
    return { kind: "ok", pct: Math.min(100, cover * 70), label: "cubierto" };
  };

  const totals = {
    items: inventory.length,
    bodega: inventory.filter((i) => i.location === "bodega").length,
    refrigerador: inventory.filter((i) => i.location === "refrigerador").length,
    congelador: inventory.filter((i) => i.location === "congelador").length,
  };

  const setQty = (id, qty) => {
    setInventory(inventory.map((i) => (i.id === id ? { ...i, qty: Math.max(0, qty) } : i)));
  };

  const setLoc = (id, location) => {
    setInventory(inventory.map((i) => (i.id === id ? { ...i, location } : i)));
  };

  const locIcon = (loc) =>
    loc === "bodega" ? "warehouse" : loc === "refrigerador" ? "fridge" : "snowflake";

  return (
    <div>
      <div className="cm-stat-row">
        <div className="cm-stat">
          <div className="l">Insumos totales</div>
          <div className="v">{totals.items}</div>
        </div>
        <div className="cm-stat">
          <div className="l">En bodega</div>
          <div className="v">{totals.bodega} <small>insumos secos</small></div>
        </div>
        <div className="cm-stat">
          <div className="l">En refrigerador</div>
          <div className="v">{totals.refrigerador} <small>frescos</small></div>
        </div>
        <div className="cm-stat">
          <div className="l">En congelador</div>
          <div className="v">{totals.congelador} <small>cárnicos</small></div>
        </div>
      </div>

      <div className="cm-card flush">
        <div style={{ padding: "20px 22px 0" }}>
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Control de inventario</div>
              <h2 style={{ marginTop: 6 }}>Stock actual de cocina y bodega</h2>
              <p className="desc">
                Lo que hoy se encuentra disponible para preparar el menú de la semana.
                Edita la cantidad para reflejar la realidad — el módulo de compras se ajusta solo.
              </p>
            </div>
          </div>

          <div className="cm-inv-toolbar">
            {[
              { id: "todo",         label: "Todo el inventario" },
              { id: "bodega",       label: "Bodega" },
              { id: "refrigerador", label: "Refrigerador" },
              { id: "congelador",   label: "Congelador" },
            ].map((c) => (
              <button
                key={c.id}
                className={"cm-loc-chip" + (filter === c.id ? " is-active" : "")}
                onClick={() => setFilter(c.id)}
              >
                <span className="dot"></span>
                {c.label}
              </button>
            ))}
            <div style={{ flex: 1 }} />
            <div style={{ position: "relative", width: 260 }}>
              <span style={{ position: "absolute", left: 12, top: 12, color: "var(--cm-ink-faint)" }}>
                <Icon name="search" size={14} />
              </span>
              <input
                className="cm-input"
                style={{ paddingLeft: 34 }}
                placeholder="Buscar insumo…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <table className="cm-table">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>Insumo</th>
              <th style={{ width: "16%" }} className="right">Disponible</th>
              <th style={{ width: "10%" }}>Unidad</th>
              <th style={{ width: "18%" }}>Ubicación</th>
              <th style={{ width: "20%" }}>Cobertura semanal</th>
              <th style={{ width: "10%" }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => {
              const s = stockState(row);
              return (
                <tr key={row.id}>
                  <td>
                    <div style={{ fontWeight: 600 }}>{row.name}</div>
                    <div className="muted mono" style={{ fontSize: 11.5, marginTop: 2 }}>
                      {demand[row.id]
                        ? <>requiere {window.CM.fmtQty(demand[row.id].needed, row.unit)} {row.unit} esta semana</>
                        : "sin uso en menú actual"}
                    </div>
                  </td>
                  <td className="right">
                    <input
                      className="cm-input mono right"
                      type="number"
                      step={row.unit === "pieza" ? 1 : 0.5}
                      min="0"
                      value={row.qty}
                      onChange={(e) => setQty(row.id, parseFloat(e.target.value) || 0)}
                      style={{ width: 96, padding: "6px 10px", textAlign: "right", display: "inline-block" }}
                    />
                  </td>
                  <td className="num muted">{row.unit}</td>
                  <td>
                    <select
                      className="cm-select"
                      value={row.location}
                      onChange={(e) => setLoc(row.id, e.target.value)}
                      style={{ padding: "6px 10px", width: 150 }}
                    >
                      {window.LOCATIONS.map((l) => (
                        <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <div className={"cm-stock-bar " + s.kind}>
                      <div className="fill" style={{ width: s.pct + "%" }} />
                    </div>
                    <div className="muted mono" style={{ fontSize: 11.5, marginTop: 4 }}>
                      {demand[row.id]
                        ? `${Math.round((row.qty / demand[row.id].needed) * 100)}% de la demanda`
                        : "—"}
                    </div>
                  </td>
                  <td>
                    {s.kind === "low" && <span className="cm-tag danger"><span className="dot"></span>Comprar</span>}
                    {s.kind === "tight" && <span className="cm-tag warn"><span className="dot"></span>Ajustado</span>}
                    {s.kind === "ok" && <span className="cm-tag success"><span className="dot"></span>Cubierto</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

window.InventoryView = InventoryView;
