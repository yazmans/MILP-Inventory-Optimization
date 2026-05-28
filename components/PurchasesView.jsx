var { useState, useMemo, useEffect, useRef } = React;

const PurchasesView = ({ recipes, inventory, attendance, recomputeKey }) => {
  const list = useMemo(
    () => window.CM.computeShoppingList(recipes, inventory, attendance),
    [recipes, inventory, attendance]
  );
  const [expanded, setExpanded]   = useState(null);
  const [recomputing, setRecomputing] = useState(false);
  const [milpRunning, setMilpRunning] = useState(false);
  const [milpError,   setMilpError]   = useState(null);
  const [milpResult,  setMilpResult]  = useState(() => {
    try { return JSON.parse(localStorage.getItem("cm:milpResult")) || null; }
    catch { return null; }
  });

  const handleRunMilp = async () => {
    setMilpRunning(true);
    setMilpError(null);
    setMilpResult(null);

    const payload = {
      personas_talla: {
        Pequena: attendance.chicas   || 0,
        Mediana: attendance.medianas || 0,
        Grande:  attendance.grandes  || 0,
      },
      inventario: inventory.map(item => ({
        slug: item.id,
        qty:  item.qty,
        unit: item.unit,
      })),
    };

    try {
      const res = await window.electronAPI.milpRun(payload);
      if (res.ok) {
        localStorage.setItem("cm:milpResult", JSON.stringify(res));
        setMilpResult(res);
      } else {
        setMilpError(res.error || "Error desconocido");
      }
    } catch (e) {
      setMilpError(e.message);
    } finally {
      setMilpRunning(false);
    }
  };

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    setRecomputing(true);
    const t = setTimeout(() => setRecomputing(false), 700);
    return () => clearTimeout(t);
  }, [recomputeKey]);

  const visible = list.filter((r) => r.stock > 0 || r.needed > 0);
  const toBuy = visible.filter((l) => l.status === "comprar");
  const tight = visible.filter((l) => l.status === "ajustado");
  const ok    = visible.filter((l) => l.status === "suficiente");

  const totalCost = toBuy.reduce((s, r) => s + r.suggested * (pricePer[r.id] || 0), 0);

  return (
    <div>
      <div className="cm-purchase-head">
        <div className="cm-hero-impact">
          <div className="eyebrow">Algoritmo semanal · resultado</div>
          <h2 className="title">
            Compra <em>{toBuy.length}</em> insumos para cubrir la semana.
          </h2>
          <div className="meta">
            <div className="m">
              <div className="v">{window.CM.totalPeople(attendance)}</div>
              <div className="k">personas registradas</div>
            </div>
            <div className="m">
              <div className="v">{recipes.length}</div>
              <div className="k">recetas activas</div>
            </div>
            <div className="m">
              <div className="v">${totalCost.toFixed(0)}</div>
              <div className="k">costo estimado MXN</div>
            </div>
          </div>
        </div>
        <div className="cm-summary-stack">
          <div className="cm-summary-tile alert">
            <div className="k">Comprar urgente</div>
            <div className="v">{toBuy.length}</div>
          </div>
          <div className="cm-summary-tile tight">
            <div className="k">Stock ajustado</div>
            <div className="v">{tight.length}</div>
          </div>
          <div className="cm-summary-tile">
            <div className="k">Cubiertos</div>
            <div className="v">{ok.length}</div>
          </div>
        </div>
      </div>

      {/* ── Sección MILP ───────────────────────────────────────────────── */}
      <div className="cm-card flush" style={{ marginTop: 16 }}>
        <div style={{ padding: "20px 22px" }}>
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Optimización MILP · CBC Solver</div>
              <h2 style={{ marginTop: 6 }}>Plan semanal óptimo</h2>
              <p className="desc">
                Genera el menú de 7 días (desayuno, comida y cena) minimizando el costo total
                de compras, respetando variedad, caducidad y capacidad de almacén.
              </p>
            </div>
            {window.electronAPI && (
              <button
                className="cm-btn primary"
                onClick={handleRunMilp}
                disabled={milpRunning}
                style={{ whiteSpace: "nowrap" }}
              >
                {milpRunning
                  ? <><span className="cm-spinner" />Calculando…</>
                  : <><Icon name="check" size={14} /> Optimizar semana</>
                }
              </button>
            )}
          </div>
        </div>

        {milpError && (
          <div className="cm-milp-error">{milpError}</div>
        )}

        {milpResult && (
          <>
            <div className="cm-milp-stats">
              <div className="m">
                <div className="v">${milpResult.costo.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</div>
                <div className="k">costo total MXN</div>
              </div>
              <div className="m">
                <div className="v">{milpResult.compras.length}</div>
                <div className="k">productos a comprar</div>
              </div>
              {/* <div className="m">
                <div className="v">{milpResult.tiempo}s</div>
                <div className="k">tiempo de cómputo</div>
              </div> */}
              <div className="m" style={{ marginLeft: "auto" }}>
                <div className="v" style={{ color: "var(--cm-success)", fontSize: 13 }}>{milpResult.status}</div>
                <div className="k">estado del solver</div>
              </div>
            </div>

            {/* Menú semanal */}
            <div style={{ padding: "16px 22px 4px" }}>
              <div className="cm-eyebrow">Menú generado</div>
            </div>
            <table className="cm-table cm-menu-table" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ width: "12%" }}>Día</th>
                  <th style={{ width: "29%" }}>Desayuno</th>
                  <th style={{ width: "29%" }}>Comida</th>
                  <th style={{ width: "30%" }}>Cena</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(milpResult.menu).map(([key, day]) => (
                  <tr key={key}>
                    <td>{day.dia}</td>
                    {["Desayuno", "Comida", "Cena"].map(c => (
                      <td key={c}>
                        <div className="cm-menu-cell">
                          <span className="prot">{day[c].proteina}</span>
                          <span className="comp">{day[c].complemento}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Lista de compras MILP */}
            {milpResult.compras.length > 0 && (
              <>
                <div style={{ padding: "16px 22px 4px" }}>
                  <div className="cm-eyebrow">Compras sugeridas por el modelo</div>
                </div>
                <table className="cm-table" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th style={{ width: "28%" }}>Ingrediente</th>
                      <th className="right" style={{ width: "14%" }}>Paquetes</th>
                      <th className="right" style={{ width: "16%" }}>Total (g)</th>
                      <th style={{ width: "18%" }}>Ubicación</th>
                      <th className="right" style={{ width: "16%" }}>Costo MXN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milpResult.compras.map((c, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{c.ingrediente}</td>
                        <td className="right num">{c.paquetes}</td>
                        <td className="right num muted">{c.gramos.toLocaleString()}</td>
                        <td className="muted">{c.ubicacion}</td>
                        <td className="right num">${c.costo.toLocaleString("es-MX", { minimumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// rough demo prices per unit, MXN. Just for the cost estimate badge.
const pricePer = {
  frijol: 38, arroz: 28, cebolla: 22, aceite: 45, pollo: 78,
  mole: 95, tortilla: 1.5, zanahoria: 18, calabaza: 20, caldo: 22,
  lechuga: 28, tomate: 24, pepino: 18, carne: 165, papa: 22,
  jamaica: 220, azucar: 26, sal: 12,
};

window.PurchasesView = PurchasesView;
