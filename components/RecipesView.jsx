var { useState, useMemo, useEffect } = React;

const EMPTY_ING = { name: "", unit: "kg", location: "bodega", qty: 0, par: 0 };

const IngredientRegister = ({ inventory, setInventory, recipes, onToast }) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_ING);
  const [editingId, setEditingId] = useState(null);

  const usedIds = useMemo(() => {
    const s = new Set();
    recipes.forEach((r) => r.ingredients.forEach((i) => s.add(i.id)));
    return s;
  }, [recipes]);

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const startEdit = (item) => {
    setForm({ name: item.name, unit: item.unit, location: item.location, qty: item.qty, par: item.par || 0 });
    setEditingId(item.id);
    setShowForm(true);
  };

  const cancelForm = () => { setShowForm(false); setEditingId(null); setForm(EMPTY_ING); };

  const saveForm = () => {
    if (!form.name.trim()) { onToast("El ingrediente necesita un nombre", "warn"); return; }
    if (editingId) {
      setInventory(inventory.map((i) => i.id === editingId ? { ...i, ...form, qty: parseFloat(form.qty) || 0, par: parseFloat(form.par) || 0 } : i));
      onToast(`"${form.name}" actualizado`);
    } else {
      const id = form.name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").slice(0, 30) || ("ing-" + Date.now());
      if (inventory.find((i) => i.id === id)) { onToast("Ya existe un ingrediente con ese nombre", "warn"); return; }
      setInventory([...inventory, { id, ...form, qty: parseFloat(form.qty) || 0, par: parseFloat(form.par) || 0 }]);
      onToast(`"${form.name}" añadido al catálogo`);
    }
    cancelForm();
  };

  const deleteItem = (item) => {
    if (usedIds.has(item.id)) {
      onToast(`"${item.name}" está en uso en una receta — elimínalo de las recetas primero`, "warn");
      return;
    }
    if (!confirm(`¿Eliminar "${item.name}" del catálogo?`)) return;
    setInventory(inventory.filter((i) => i.id !== item.id));
    onToast(`"${item.name}" eliminado`);
  };

  return (
    <div>
      <div className="cm-card flush">
        <div style={{ padding: "20px 22px 0" }}>
          <div className="cm-card-head">
            <div>
              <div className="cm-eyebrow">Catálogo de materia prima</div>
              <h2 style={{ marginTop: 6 }}>Ingredientes registrados</h2>
              <p className="desc" style={{ marginTop: 4, color: "var(--cm-ink-mute)", fontSize: 13 }}>
                Todos los insumos disponibles para asignar a recetas.
              </p>
            </div>
            {!showForm && (
              <button className="cm-btn accent" onClick={() => { setShowForm(true); setEditingId(null); setForm(EMPTY_ING); }}>
                <Icon name="plus" size={14} /> Nuevo ingrediente
              </button>
            )}
          </div>
        </div>

        {showForm && (
          <div style={{ margin: "16px 22px", padding: "18px 20px", background: "var(--cm-paper)", borderRadius: 12, border: "1px solid var(--cm-border)" }}>
            <div className="cm-eyebrow" style={{ marginBottom: 12 }}>{editingId ? "Editar ingrediente" : "Nuevo ingrediente"}</div>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 10, alignItems: "end" }}>
              <div className="cm-field">
                <label>Nombre</label>
                <input className="cm-input" placeholder="Ej. Chile ancho" value={form.name} onChange={(e) => setField("name", e.target.value)} />
              </div>
              <div className="cm-field">
                <label>Unidad</label>
                <select className="cm-select" value={form.unit} onChange={(e) => setField("unit", e.target.value)}>
                  {window.UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
              <div className="cm-field">
                <label>Ubicación</label>
                <select className="cm-select" value={form.location} onChange={(e) => setField("location", e.target.value)}>
                  {window.LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div className="cm-field">
                <label>Stock inicial</label>
                <input className="cm-input mono" type="number" min="0" step="0.1" value={form.qty} onChange={(e) => setField("qty", e.target.value)} />
              </div>
              <div className="cm-field">
                <label>Par</label>
                <input className="cm-input mono" type="number" min="0" step="0.1" value={form.par} onChange={(e) => setField("par", e.target.value)} />
              </div>
            </div>
            <div className="row gap-8" style={{ marginTop: 14, justifyContent: "flex-end" }}>
              <button className="cm-btn sm ghost" onClick={cancelForm}>Cancelar</button>
              <button className="cm-btn sm accent" onClick={saveForm}>
                <Icon name="save" size={13} /> {editingId ? "Actualizar" : "Guardar ingrediente"}
              </button>
            </div>
          </div>
        )}

        <table className="cm-table" style={{ marginTop: showForm ? 0 : 8 }}>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Unidad</th>
              <th>Ubicación</th>
              <th className="right">Stock</th>
              <th className="right">Par</th>
              <th>En recetas</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td style={{ fontWeight: 600 }}>{item.name}</td>
                <td className="muted mono">{item.unit}</td>
                <td>
                  <span className="cm-tag ghost" style={{ fontSize: 11.5 }}>
                    {item.location === "congelador" && <Icon name="snowflake" size={11} />}
                    {item.location === "refrigerador" && <Icon name="fridge" size={11} />}
                    {item.location === "bodega" && <Icon name="warehouse" size={11} />}
                    {" "}{item.location}
                  </span>
                </td>
                <td className="right mono">{item.qty} <span className="muted" style={{ fontSize: 11 }}>{item.unit}</span></td>
                <td className="right mono muted">{item.par || "—"}</td>
                <td>
                  {usedIds.has(item.id)
                    ? <span className="cm-tag success" style={{ fontSize: 11.5 }}><span className="dot"></span>en uso</span>
                    : <span className="muted" style={{ fontSize: 12 }}>—</span>}
                </td>
                <td>
                  <div className="row gap-8" style={{ justifyContent: "flex-end" }}>
                    <button className="cm-btn ghost sm" style={{ padding: "5px 10px" }} onClick={() => startEdit(item)}>
                      Editar
                    </button>
                    <button
                      className="cm-btn danger sm"
                      style={{ padding: "5px 10px", opacity: usedIds.has(item.id) ? 0.4 : 1 }}
                      onClick={() => deleteItem(item)}
                    >
                      <Icon name="trash" size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RecipesView = ({ recipes, inventory, setRecipes, setInventory, onToast }) => {
  const [subView, setSubView] = useState("recetas");
  const [selectedId, setSelectedId] = useState(recipes[0]?.id || null);
  const [draft, setDraft] = useState(null); // null = editing existing; object = new draft
  const [isDirty, setIsDirty] = useState(false);

  const editing = draft || recipes.find((r) => r.id === selectedId);

  const startNew = () => {
    setDraft({
      id: "new-" + Date.now(),
      name: "",
      category: "Plato fuerte",
      note: "",
      ingredients: [{ id: inventory[0]?.id || "", qtyPerPerson: 0.05, unit: inventory[0]?.unit || "kg" }],
      _isNew: true,
    });
    setSelectedId(null);
    setIsDirty(true);
  };

  const updateField = (k, v) => {
    if (draft) setDraft({ ...draft, [k]: v });
    else {
      setRecipes(recipes.map((r) => (r.id === selectedId ? { ...r, [k]: v } : r)));
    }
    setIsDirty(true);
  };

  const updateIng = (idx, patch) => {
    const apply = (r) => {
      const ings = r.ingredients.map((ing, i) => {
        if (i !== idx) return ing;
        const next = { ...ing, ...patch };
        if (patch.id) {
          const inv = inventory.find((x) => x.id === patch.id);
          if (inv) next.unit = inv.unit;
        }
        return next;
      });
      return { ...r, ingredients: ings };
    };
    if (draft) setDraft(apply(draft));
    else setRecipes(recipes.map((r) => (r.id === selectedId ? apply(r) : r)));
    setIsDirty(true);
  };

  const addIng = () => {
    const used = new Set(editing.ingredients.map((i) => i.id));
    const next = inventory.find((i) => !used.has(i.id)) || inventory[0];
    const apply = (r) => ({
      ...r,
      ingredients: [...r.ingredients, { id: next.id, qtyPerPerson: 0.05, unit: next.unit }],
    });
    if (draft) setDraft(apply(draft));
    else setRecipes(recipes.map((r) => (r.id === selectedId ? apply(r) : r)));
    setIsDirty(true);
  };

  const removeIng = (idx) => {
    const apply = (r) => ({ ...r, ingredients: r.ingredients.filter((_, i) => i !== idx) });
    if (draft) setDraft(apply(draft));
    else setRecipes(recipes.map((r) => (r.id === selectedId ? apply(r) : r)));
    setIsDirty(true);
  };

  const saveRecipe = () => {
    if (!editing.name.trim()) {
      onToast("La receta necesita un nombre", "warn");
      return;
    }
    if (editing.ingredients.length === 0) {
      onToast("Añade al menos un ingrediente", "warn");
      return;
    }
    if (draft) {
      const finalId = editing.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30) || ("r-" + Date.now());
      const newRec = { ...draft, id: finalId };
      delete newRec._isNew;
      setRecipes([...recipes, newRec]);
      setDraft(null);
      setSelectedId(finalId);
      onToast(`Receta "${newRec.name}" guardada`);
    } else {
      onToast(`Cambios en "${editing.name}" guardados`);
    }
    setIsDirty(false);
  };

  const deleteRecipe = () => {
    if (draft) {
      setDraft(null);
      setSelectedId(recipes[0]?.id);
      setIsDirty(false);
      return;
    }
    if (!confirm(`¿Eliminar "${editing.name}"?`)) return;
    const rest = recipes.filter((r) => r.id !== editing.id);
    setRecipes(rest);
    setSelectedId(rest[0]?.id);
    onToast("Receta eliminada");
    setIsDirty(false);
  };

  const tabBar = (
    <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
      {[
        { id: "recetas",      label: "Recetas",              icon: "book" },
        { id: "ingredientes", label: "Catálogo de ingredientes", icon: "box" },
      ].map((t) => (
        <button
          key={t.id}
          className={"cm-btn" + (subView === t.id ? " accent" : " ghost")}
          style={{ padding: "8px 16px" }}
          onClick={() => setSubView(t.id)}
        >
          <Icon name={t.icon} size={14} /> {t.label}
        </button>
      ))}
    </div>
  );

  if (subView === "ingredientes") {
    return (
      <div>
        {tabBar}
        <IngredientRegister inventory={inventory} setInventory={setInventory} recipes={recipes} onToast={onToast} />
      </div>
    );
  }

  if (!editing) {
    return (
      <div>
        {tabBar}
        <div className="cm-card">
          <p className="muted">No hay recetas. <button className="cm-btn accent" onClick={startNew}>Crear la primera</button></p>
        </div>
      </div>
    );
  }

  return (
    <div>
    {tabBar}
    <div className="cm-recipes-layout">
      {/* LEFT: recipe list */}
      <div className="cm-recipes-list">
        <div className="cm-eyebrow" style={{ padding: "0 4px 6px" }}>
          {recipes.length} receta{recipes.length === 1 ? "" : "s"} activa{recipes.length === 1 ? "" : "s"}
        </div>
        {recipes.map((r) => (
          <div
            key={r.id}
            className={"cm-rl-card" + (selectedId === r.id && !draft ? " is-active" : "")}
            onClick={() => { setDraft(null); setSelectedId(r.id); setIsDirty(false); }}
          >
            <h4>{r.name}</h4>
            <div className="meta">
              <span>{r.category}</span>
              <span className="mono">{r.ingredients.length} ing.</span>
            </div>
          </div>
        ))}
        <button className="cm-rl-new" onClick={startNew}>
          <Icon name="plus" size={16} /> Nueva receta
        </button>
      </div>

      {/* RIGHT: editor */}
      <div className="cm-card cm-recipe-editor">
        <div className="cm-card-head">
          <div>
            <div className="cm-eyebrow">{draft ? "Nueva receta" : "Editando receta"}</div>
            <h2 style={{ marginTop: 6 }}>
              <input
                className="cm-input"
                style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 400, padding: "4px 8px", border: "1px solid transparent", background: "transparent" }}
                placeholder="Nombre de la receta"
                value={editing.name}
                onChange={(e) => updateField("name", e.target.value)}
                onFocus={(e) => { e.target.style.borderColor = "var(--cm-border)"; }}
                onBlur={(e) => { e.target.style.borderColor = "transparent"; }}
              />
            </h2>
          </div>
          <div className="row gap-8">
            <button className="cm-btn danger sm" onClick={deleteRecipe}>
              <Icon name="trash" size={14} /> {draft ? "Descartar" : "Eliminar"}
            </button>
            <button
              className={"cm-btn accent" + (isDirty ? "" : " sm")}
              disabled={!isDirty}
              onClick={saveRecipe}
              style={{ opacity: isDirty ? 1 : 0.55 }}
            >
              <Icon name="save" size={14} /> Guardar receta
            </button>
          </div>
        </div>

        <div className="form-grid">
          <div className="cm-field">
            <label>Categoría</label>
            <div className="row gap-8">
              {window.CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={"cm-tag " + (editing.category === c ? (c === "Plato fuerte" ? "magenta" : "coral") : "ghost")}
                  style={{ padding: "8px 14px", fontSize: 12.5, cursor: "pointer", border: editing.category === c ? "none" : "1px solid var(--cm-border)" }}
                  onClick={() => updateField("category", c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="cm-field">
            <label>Nota interna</label>
            <input
              className="cm-input"
              placeholder="Ej. Domingos y festivos"
              value={editing.note || ""}
              onChange={(e) => updateField("note", e.target.value)}
            />
          </div>
        </div>

        <div className="cm-section-title">
          Ingredientes
          <small>cantidad por persona · porción mediana</small>
        </div>

        <div className="cm-ing-header">
          <span>Insumo</span>
          <span>Cantidad</span>
          <span>Unidad</span>
          <span></span>
        </div>

        {editing.ingredients.map((ing, idx) => {
          const inv = inventory.find((i) => i.id === ing.id);
          return (
            <div className="cm-ing-row" key={idx}>
              <select
                className="cm-select"
                value={ing.id}
                onChange={(e) => updateIng(idx, { id: e.target.value })}
              >
                {inventory.map((i) => (
                  <option key={i.id} value={i.id}>{i.name}</option>
                ))}
              </select>
              <input
                className="cm-input mono"
                type="number"
                step="0.001"
                min="0"
                value={ing.qtyPerPerson}
                onChange={(e) => updateIng(idx, { qtyPerPerson: parseFloat(e.target.value) || 0 })}
              />
              <div className="cm-tag ghost" style={{ justifyContent: "center", padding: "10px 12px", fontFamily: "var(--font-mono)" }}>
                {inv ? inv.unit : ing.unit}
              </div>
              <button className="x" onClick={() => removeIng(idx)} title="Eliminar">
                <Icon name="x" size={14} />
              </button>
            </div>
          );
        })}

        <button
          className="cm-btn ghost"
          style={{ marginTop: 12, border: "1px dashed var(--cm-border-strong)", width: "100%", justifyContent: "center", padding: "12px" }}
          onClick={addIng}
        >
          <Icon name="plus" size={14} /> Añadir Ingrediente
        </button>

        {/* Preview: weekly weight for current attendance */}
        <div style={{
          marginTop: 26, padding: "16px 18px",
          borderRadius: 14, background: "var(--cm-paper)",
          border: "1px dashed var(--cm-border-strong)",
        }}>
          <div className="cm-eyebrow">Cálculo automático</div>
          <div className="row" style={{ marginTop: 6, gap: 16, flexWrap: "wrap" }}>
            <div className="muted" style={{ fontSize: 13 }}>
              Con la asistencia registrada esta semana, esta receta consumirá:
            </div>
          </div>
          <div className="row" style={{ marginTop: 12, gap: 22, flexWrap: "wrap" }}>
            {editing.ingredients.map((ing, idx) => {
              const wp = window.CM.weightedPeople(window._att || window.INITIAL_ATTENDANCE);
              const total = ing.qtyPerPerson * wp;
              const inv = inventory.find((i) => i.id === ing.id);
              return (
                <div key={idx} className="col">
                  <span className="muted" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {inv ? inv.name : ing.id}
                  </span>
                  <span className="mono" style={{ fontSize: 16, fontWeight: 600 }}>
                    {window.CM.fmtQty(total, ing.unit)} <span className="muted" style={{ fontSize: 12 }}>{ing.unit}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

window.RecipesView = RecipesView;
