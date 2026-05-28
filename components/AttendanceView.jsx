var { useState, useMemo } = React;

const PORTION_LABEL = { S: "Chica", M: "Mediana", L: "Grande" };
const PORTION_FACTOR = { S: "×0.7", M: "×1.0", L: "×1.3" };
const PORTION_CLASS  = { S: "chicas", M: "medianas", L: "grandes" };

const PersonRow = ({ person, onCheckin, onCheckout, onDelete }) => {
  const present = person.arrival && !person.departure;

  const fmtTime = iso => {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleTimeString("es-MX", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className="cm-person-row"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto 90px 90px auto",
        gap: 12,
        alignItems: "center",
        padding: "10px 16px",
        borderRadius: 10,
        background: present ? "var(--cm-green-tint, #f0fdf4)" : "var(--cm-surface)",
        border: "1px solid " + (present ? "var(--cm-green-soft, #bbf7d0)" : "var(--cm-border)"),
        marginBottom: 8,
      }}
    >
      <div style={{ fontWeight: 500 }}>{person.name}</div>
      <span className="mono" style={{ fontSize: 13, color: "var(--cm-text-2)" }}>{person.age} años</span>
      <span className={"cm-tag " + PORTION_CLASS[person.portion_type]} style={{ minWidth: 72, textAlign: "center" }}>
        {PORTION_LABEL[person.portion_type]} {PORTION_FACTOR[person.portion_type]}
      </span>
      <span style={{ fontSize: 12, color: "var(--cm-text-2)", textAlign: "center" }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Entrada</div>
        {fmtTime(person.arrival)}
      </span>
      <span style={{ fontSize: 12, color: "var(--cm-text-2)", textAlign: "center" }}>
        <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>Salida</div>
        {fmtTime(person.departure)}
      </span>
      <div style={{ display: "flex", gap: 6 }}>
        {present ? (
          <button className="cm-btn ghost" style={{ fontSize: 12, padding: "4px 10px" }} onClick={() => onCheckout(person.id)}>
            Salida
          </button>
        ) : (
          <button className="cm-btn accent" style={{ fontSize: 12, padding: "4px 10px" }} onClick={() => onCheckin(person.id)}>
            Entrada
          </button>
        )}
        <button
          className="cm-btn ghost"
          style={{ fontSize: 12, padding: "4px 8px", color: "var(--cm-danger, #dc2626)" }}
          onClick={() => onDelete(person.id)}
          title="Eliminar persona"
        >
          ×
        </button>
      </div>
    </div>
  );
};

const AddPersonForm = ({ onAdd, onCancel }) => {
  const [form, setForm] = useState({ name: "", age: "", portion_type: "M" });
  const valid = form.name.trim() && form.age > 0;

  const submit = () => {
    if (!valid) return;
    onAdd({ name: form.name.trim(), age: parseInt(form.age, 10), portion_type: form.portion_type });
    setForm({ name: "", age: "", portion_type: "M" });
  };

  return (
    <div
      style={{
        padding: "18px 20px", borderRadius: 12, marginBottom: 20,
        background: "var(--cm-surface)", border: "1px solid var(--cm-border)",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 14 }}>Agregar persona</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 90px 1fr auto auto", gap: 10, alignItems: "end" }}>
        <div>
          <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cm-text-2)", display: "block", marginBottom: 4 }}>Nombre</label>
          <input
            className="cm-input"
            placeholder="Nombre completo"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div>
          <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cm-text-2)", display: "block", marginBottom: 4 }}>Edad</label>
          <input
            className="cm-input"
            type="number"
            min="1"
            max="120"
            placeholder="Edad"
            value={form.age}
            onChange={e => setForm(f => ({ ...f, age: e.target.value }))}
          />
        </div>
        <div>
          <label style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--cm-text-2)", display: "block", marginBottom: 4 }}>Porción</label>
          <select
            className="cm-input"
            value={form.portion_type}
            onChange={e => setForm(f => ({ ...f, portion_type: e.target.value }))}
          >
            <option value="S">Chica (×0.7) — niños y reducidas</option>
            <option value="M">Mediana (×1.0) — estándar</option>
            <option value="L">Grande (×1.3) — trabajadores y reforzadas</option>
          </select>
        </div>
        <button className="cm-btn accent" onClick={submit} disabled={!valid}>
          Agregar
        </button>
        <button className="cm-btn ghost" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

const AttendanceView = ({ people, attendance, onCheckin, onCheckout, onAddPerson, onDeletePerson }) => {
  const [showForm, setShowForm]   = useState(false);
  const [filter, setFilter]       = useState("all"); // all | present | absent
  const [search, setSearch]       = useState("");

  const total     = attendance.chicas + attendance.medianas + attendance.grandes;
  const weighted  = window.CM.weightedPeople(attendance);

  const present  = people.filter(p => p.arrival && !p.departure);
  const absent   = people.filter(p => !p.arrival || p.departure);

  const visible = useMemo(() => {
    let list = filter === "present" ? present : filter === "absent" ? absent : people;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    return list;
  }, [people, filter, search, present, absent]);

  const handleAdd = person => {
    onAddPerson(person);
    setShowForm(false);
  };

  return (
    <div>
      {/* Summary */}
      <div className="cm-card" style={{ marginBottom: 18 }}>
        <div className="cm-card-head" style={{ marginBottom: 0 }}>
          <div className="cm-att-summary" style={{ flex: 1 }}>
            <div className="stat">
              <div className="v">{total} <small>presentes</small></div>
              <div className="k">Total en Casa Monarca ahora</div>
            </div>
            <div className="stat">
              <div className="v">{attendance.chicas} <small className={"cm-tag chicas"} style={{ fontSize: 11 }}>Chicas</small></div>
              <div className="k">Porciones pequeñas ×0.7</div>
            </div>
            <div className="stat">
              <div className="v">{attendance.medianas} <small className={"cm-tag medianas"} style={{ fontSize: 11 }}>Medianas</small></div>
              <div className="k">Porciones estándar ×1.0</div>
            </div>
            <div className="stat">
              <div className="v">{attendance.grandes} <small className={"cm-tag grandes"} style={{ fontSize: 11 }}>Grandes</small></div>
              <div className="k">Porciones reforzadas ×1.3</div>
            </div>
            <div className="stat">
              <div className="v">{weighted.toFixed(0)} <small>equiv.</small></div>
              <div className="k">Porciones medianas equivalentes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16, alignItems: "center" }}>
        <input
          className="cm-input"
          placeholder="Buscar persona…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ maxWidth: 220 }}
        />
        <div style={{ display: "flex", gap: 4 }}>
          {[["all","Todos"], ["present","Presentes"], ["absent","Ausentes"]].map(([v, l]) => (
            <button
              key={v}
              className={"cm-btn " + (filter === v ? "accent" : "ghost")}
              style={{ fontSize: 13 }}
              onClick={() => setFilter(v)}
            >
              {l} {v === "present" ? `(${present.length})` : v === "absent" ? `(${absent.length})` : `(${people.length})`}
            </button>
          ))}
        </div>
        <button
          className="cm-btn accent"
          style={{ marginLeft: "auto" }}
          onClick={() => setShowForm(v => !v)}
        >
          <Icon name="plus" size={14} /> Agregar persona
        </button>
      </div>

      {showForm && (
        <AddPersonForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
      )}

      {/* People list */}
      <div>
        {visible.length === 0 && (
          <div style={{ padding: "40px 0", textAlign: "center", color: "var(--cm-text-2)" }}>
            {search ? "Sin resultados para tu búsqueda." : "No hay personas registradas aún."}
          </div>
        )}
        {visible.map(person => (
          <PersonRow
            key={person.id}
            person={person}
            onCheckin={onCheckin}
            onCheckout={onCheckout}
            onDelete={onDeletePerson}
          />
        ))}
      </div>
    </div>
  );
};

window.AttendanceView = AttendanceView;
