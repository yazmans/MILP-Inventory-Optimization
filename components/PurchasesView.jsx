var { useState, useMemo, useEffect, useRef } = React;

const PurchasesView = ({ recipes, inventory, attendance, recomputeKey }) => {
  const list = useMemo(
    () => window.CM.computeShoppingList(recipes, inventory, attendance),
    [recipes, inventory, attendance]
  );
  const [expanded, setExpanded] = useState(null);
  const [recomputing, setRecomputing] = useState(false);

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    setRecomputing(true);
    const t = setTimeout(() => setRecomputing(false), 700);
    return () => clearTimeout(t);
  }, [recomputeKey]);

  const toBuy = list.filter((l) => l.status === "comprar");
  const tight = list.filter((l) => l.status === "ajustado");
  const ok    = list.filter((l) => l.status === "suficiente");

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

      <div className="cm-card flush">
        <div style={{ padding: "20px 22px 0" }}>
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Lista sugerida — semana 22</div>
              <h2 style={{ marginTop: 6 }}>Materia prima para reabastecer</h2>
              <p className="desc">
                Cruce entre asistencia, recetas activas e inventario actual.
                Haz clic en cualquier fila para ver el desglose por receta.
              </p>
            </div>
            <div className="row gap-8">
              <button className="cm-btn ghost"><Icon name="calendar" size={14} /> Posponer</button>
              <button className="cm-btn primary"><Icon name="check" size={14} /> Enviar a proveedores</button>
            </div>
          </div>
        </div>

        <table className="cm-table">
          <thead>
            <tr>
              <th style={{ width: "28%" }}>Insumo</th>
              <th className="right" style={{ width: "14%" }}>Requerido</th>
              <th className="right" style={{ width: "14%" }}>En inventario</th>
              <th className="right" style={{ width: "18%" }}>Cantidad sugerida</th>
              <th style={{ width: "10%" }}>Unidad</th>
              <th style={{ width: "12%" }}>Estado</th>
              <th style={{ width: "4%" }}></th>
            </tr>
          </thead>
          <tbody>
            {list.map((row) => {
              const open = expanded === row.id;
              return (
                <React.Fragment key={row.id}>
                  <tr
                    className={recomputing ? "cm-recomputing" : ""}
                    style={{ cursor: "pointer" }}
                    onClick={() => setExpanded(open ? null : row.id)}
                  >
                    <td>
                      <div style={{ fontWeight: 600 }}>{row.name}</div>
                      <div className="muted" style={{ fontSize: 11.5, marginTop: 2 }}>
                        usado en {row.byRecipe.length} receta{row.byRecipe.length === 1 ? "" : "s"}
                      </div>
                    </td>
                    <td className="right num">{window.CM.fmtQty(row.needed, row.unit)}</td>
                    <td className="right num muted">{window.CM.fmtQty(row.stock, row.unit)}</td>
                    <td className="right">
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 17,
                        fontWeight: 600,
                        color: row.status === "comprar" ? "var(--cm-magenta-deep)" : row.status === "ajustado" ? "var(--cm-warn)" : "var(--cm-ink-faint)",
                      }}>
                        {row.suggested > 0 ? window.CM.fmtQty(row.suggested, row.unit) : "—"}
                      </div>
                    </td>
                    <td className="num muted">{row.unit}</td>
                    <td>
                      {row.status === "comprar" && <span className="cm-tag magenta"><span className="dot"></span>Comprar</span>}
                      {row.status === "ajustado" && <span className="cm-tag warn"><span className="dot"></span>Ajustado</span>}
                      {row.status === "suficiente" && <span className="cm-tag success"><span className="dot"></span>Cubierto</span>}
                    </td>
                    <td className="right muted">
                      <Icon name={open ? "chev-down" : "chev-right"} size={14} />
                    </td>
                  </tr>
                  {open && (
                    <tr className="cm-row-expand">
                      <td colSpan={7}>
                        <div className="panel">
                          <div className="mini">
                            <div className="l">Desglose por receta</div>
                            <div className="q muted" style={{ fontSize: 12, fontWeight: 400 }}>
                              cuánto consume cada platillo
                            </div>
                          </div>
                          {row.byRecipe.map((br) => (
                            <div className="mini" key={br.recipeId}>
                              <div className="l">{br.recipeName}</div>
                              <div className="q">{window.CM.fmtQty(br.qty, row.unit)} <span className="muted" style={{ fontWeight: 400 }}>{row.unit}</span></div>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
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
