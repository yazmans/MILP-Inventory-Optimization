var { useMemo } = React;

const DashboardView = ({ recipes, inventory, attendance, onNavigate }) => {
  const list = useMemo(
    () => window.CM.computeShoppingList(recipes, inventory, attendance),
    [recipes, inventory, attendance]
  );
  const demand = useMemo(
    () => window.CM.computeDemand(recipes, attendance),
    [recipes, attendance]
  );
  const toBuy = list.filter((l) => l.status === "comprar");
  const tight = list.filter((l) => l.status === "ajustado");
  const wp = window.CM.weightedPeople(attendance);
  const total = window.CM.totalPeople(attendance);

  // top 3 items most in demand
  const topDemand = Object.values(demand)
    .map((d) => ({ ...d, name: inventory.find((i) => i.id === d.id)?.name || d.id }))
    .sort((a, b) => b.needed - a.needed)
    .slice(0, 5);

  return (
    <div>
      <div className="cm-stat-row">
        <div className="cm-stat">
          <div className="l">Personas atendidas</div>
          <div className="v">{total}</div>
          <div className="muted mono" style={{ fontSize: 11.5, marginTop: 4 }}>
            {wp.toFixed(0)} equivalentes medianos
          </div>
        </div>
        <div className="cm-stat" style={{ background: "var(--cm-magenta-tint)", borderColor: "transparent" }}>
          <div className="l" style={{ color: "var(--cm-magenta-deep)" }}>Por comprar</div>
          <div className="v" style={{ color: "var(--cm-magenta-deep)" }}>
            {toBuy.length} <small style={{ color: "var(--cm-magenta-deep)", opacity: 0.6 }}>insumos</small>
          </div>
        </div>
        <div className="cm-stat" style={{ background: "var(--cm-warn-soft)", borderColor: "transparent" }}>
          <div className="l" style={{ color: "var(--cm-warn)" }}>Stock ajustado</div>
          <div className="v" style={{ color: "var(--cm-warn)" }}>{tight.length}</div>
        </div>
        <div className="cm-stat">
          <div className="l">Recetas activas</div>
          <div className="v">{recipes.length}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 22 }}>
        <div className="cm-card">
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Lo más urgente</div>
              <h2 style={{ marginTop: 6 }}>Top 5 insumos a reabastecer</h2>
            </div>
            <button className="cm-btn sm" onClick={() => onNavigate("purchases")}>
              Ver lista completa <Icon name="chev-right" size={12} />
            </button>
          </div>
          <table className="cm-table">
            <thead>
              <tr>
                <th>Insumo</th>
                <th className="right">Sugerido</th>
                <th>Unidad</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {list.slice(0, 5).map((r) => (
                <tr key={r.id}>
                  <td style={{ fontWeight: 600 }}>{r.name}</td>
                  <td className="right num">
                    {r.suggested > 0 ? window.CM.fmtQty(r.suggested, r.unit) : "—"}
                  </td>
                  <td className="num muted">{r.unit}</td>
                  <td>
                    {r.status === "comprar"    && <span className="cm-tag magenta"><span className="dot"></span>Comprar</span>}
                    {r.status === "ajustado"   && <span className="cm-tag warn"><span className="dot"></span>Ajustado</span>}
                    {r.status === "suficiente" && <span className="cm-tag success"><span className="dot"></span>Cubierto</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cm-card">
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Asistencia semanal</div>
              <h2 style={{ marginTop: 6 }}>Distribución de porciones</h2>
            </div>
            <button className="cm-btn sm" onClick={() => onNavigate("attendance")}>
              Editar <Icon name="chev-right" size={12} />
            </button>
          </div>
          {[
            { id: "chicas",   label: "Chicas",   color: "var(--cm-magenta)" },
            { id: "medianas", label: "Medianas", color: "var(--cm-coral)" },
            { id: "grandes",  label: "Grandes",  color: "#7A36B3" },
          ].map((row) => {
            const v = attendance[row.id];
            const pct = (v / Math.max(total, 1)) * 100;
            return (
              <div key={row.id} style={{ marginBottom: 14 }}>
                <div className="row between" style={{ marginBottom: 6 }}>
                  <div style={{ fontWeight: 600 }}>{row.label}</div>
                  <div className="mono">
                    {v} <span className="muted" style={{ fontSize: 12, marginLeft: 6 }}>{pct.toFixed(0)}%</span>
                  </div>
                </div>
                <div style={{ height: 8, background: "var(--cm-surface-2)", borderRadius: 999 }}>
                  <div style={{
                    width: pct + "%", height: "100%",
                    background: row.color, borderRadius: 999,
                    transition: "width 0.4s cubic-bezier(0.2,0.9,0.3,1.1)",
                  }} />
                </div>
              </div>
            );
          })}

          <div style={{
            marginTop: 22, padding: 14, borderRadius: 12,
            background: "var(--cm-paper)", border: "1px dashed var(--cm-border-strong)",
            display: "flex", alignItems: "center", gap: 12, fontSize: 12.5, color: "var(--cm-ink-mute)",
          }}>
            <Icon name="spark" size={16} />
            <div>
              El ciclo semanal cruza estos números con cada receta para sugerir la compra.
              Si cambia la asistencia, las compras se actualizan al instante.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.DashboardView = DashboardView;
