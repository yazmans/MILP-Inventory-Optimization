

req_prot_comida = sum(personas_talla[l] * gram_prot[l] for l in L)
req_comp_comida = sum(personas_talla[l] * gram_comp[l] for l in L)

#Inicialización del modelo
model = pulp.LpProblem("CasaMonarca_3Comidas", pulp.LpMinimize)

# VARIABLES DE DECISIÓN

x_store = pulp.LpVariable.dicts("X_Store", (I, J), lowBound=0, cat='Continuous')
inv_inicial = pulp.LpVariable.dicts("Inv_Inicial", (I, J), lowBound=0, cat='Continuous')
inv = pulp.LpVariable.dicts("Inv", (I, J, K), lowBound=0, cat='Continuous')
transfer = pulp.LpVariable.dicts("Transfer", (I, K), lowBound=0, cat='Continuous')
consumo_amb = pulp.LpVariable.dicts("ConsumoAmb", (I, K), lowBound=0, cat='Continuous')
consumo_refri = pulp.LpVariable.dicts("ConsumoRefri", (I, K), lowBound=0, cat='Continuous')
consumo_total = pulp.LpVariable.dicts("ConsumoTotal", (I, K), lowBound=0, cat='Continuous')

y_prot = pulp.LpVariable.dicts("Y_Prot", (I, K, C), lowBound=0, cat='Continuous')
w = pulp.LpVariable.dicts("W", (U, K, C), lowBound=0, cat='Continuous')

# Variables Binarias
b_prot = pulp.LpVariable.dicts("B_Prot", (I, K, C), cat='Binary')
b_comp = pulp.LpVariable.dicts("B_Comp", (U, K, C), cat='Binary')

# FUNCIÓN OBJETIVO

model += pulp.lpSum(costo[i] * x_store[i][j] for i in I for j in J), "Z_CostoTotal"

#RESTRICCIONES

# Inventario inicial
for i in I:
    model += pulp.lpSum(inv_inicial[i][j] for j in J) == restante[i]
    for j in J:
        if vida_util[i][j] == 0:
            model += inv[i][j]["d1"] + inv_inicial[i][j] + x_store[i][j] == 0

# Balances de Inventario
for i in I:
    model += inv[i]["Congelado"]["d1"] == inv_inicial[i]["Congelado"] + x_store[i]["Congelado"] * gramos[i] - transfer[i]["d1"]
    model += inv[i]["Refrigerado"]["d1"] == inv_inicial[i]["Refrigerado"] + x_store[i]["Refrigerado"] * gramos[i] - consumo_refri[i]["d1"]
    model += inv[i]["Ambiente"]["d1"] == inv_inicial[i]["Ambiente"] + x_store[i]["Ambiente"] * gramos[i] - consumo_amb[i]["d1"]

    for k_idx in range(1, len(K)):
        k = K[k_idx]
        k_prev = K[k_idx - 1]
        model += inv[i]["Congelado"][k] == inv[i]["Congelado"][k_prev] - transfer[i][k]
        model += inv[i]["Refrigerado"][k] == inv[i]["Refrigerado"][k_prev] + transfer[i][k_prev] - consumo_refri[i][k]
        model += inv[i]["Ambiente"][k] == inv[i]["Ambiente"][k_prev] - consumo_amb[i][k]

# Consumo total
for i in I:
    for k in K:
        model += consumo_total[i][k] == consumo_amb[i][k] + consumo_refri[i][k]
        if i in P:
            model += consumo_total[i][k] == pulp.lpSum(y_prot[i][k][c] for c in C)
        else:
            model += consumo_total[i][k] == pulp.lpSum(w[u][k][c] * receta_comp.get(i, {}).get(u, 0) for u in U for c in C)

# Demandas
M = 100000
for k in K:
    for c in C:

        req_prot_actual = req_prot_comida * factor_porcion[c]
        req_comp_actual = (req_comp_comida * 2) * factor_porcion[c]

        model += pulp.lpSum(y_prot[i][k][c] for i in valid_P[c]) >= req_prot_actual
        model += pulp.lpSum(w[u][k][c] for u in valid_U[c]) >= req_comp_actual

        # Exactamente 1 proteína y 1 receta por comida
        model += pulp.lpSum(b_prot[i][k][c] for i in valid_P[c]) == 1
        model += pulp.lpSum(b_comp[u][k][c] for u in valid_U[c]) == 1

        # Apagado de opciones inválidas
        for i in P:
            if i not in valid_P[c]:
                model += b_prot[i][k][c] == 0
                model += y_prot[i][k][c] == 0
            else:
                model += y_prot[i][k][c] <= M * b_prot[i][k][c]
                model += y_prot[i][k][c] >= req_prot_actual * b_prot[i][k][c]

        for u in U:
            if u not in valid_U[c]:
                model += b_comp[u][k][c] == 0
                model += w[u][k][c] == 0
            else:
                model += w[u][k][c] <= M * b_comp[u][k][c]
                model += w[u][k][c] >= req_comp_actual * b_comp[u][k][c]

# Variedad
for k in K:
    for i in P:
        model += pulp.lpSum(b_prot[i][k][c] for c in C) <= 1
    for u in U:
        model += pulp.lpSum(b_comp[u][k][c] for c in C) <= 1

for k_idx in range(len(K) - 1):
    k = K[k_idx]
    k_next = K[k_idx + 1]
    for c in C:
        for i in P:
            model += b_prot[i][k][c] + b_prot[i][k_next][c] <= 1
        for u in U:
            model += b_comp[u][k][c] + b_comp[u][k_next][c] <= 1

# Asegurar consumo de Res y Mojarra
model += pulp.lpSum(b_prot["Res"][k]["Comida"] for k in K) >= 1
model += pulp.lpSum(b_prot["Mojarra"][k]["Comida"] for k in K) >= 1

#Capacidad máxima
for j in J:
    if j != "Ambiente":
        for k in K:
            model += pulp.lpSum((inv[i][j][k] / 1000) * factor_vol[i] for i in I) <= capacidad[j]

# Mínimos de Emergencia
total_mult_dia = sum(factor_porcion.values())
model += pulp.lpSum(inv[i][j]["d7"] for i in P for j in J) >= porc_emergencia * (req_prot_comida * total_mult_dia)

emergencia_comp_rhs = porc_emergencia * sum(
    sum(receta_comp.get(i, {}).get(u, 0) * (req_comp_comida * 2 * total_mult_dia) for u in U)
    for i in No_P
)
model += pulp.lpSum(inv[i][j]["d7"] for i in No_P for j in J) >= emergencia_comp_rhs

# Caducidad
for i in I:
    v_amb = vida_util[i]["Ambiente"]
    if 0 < v_amb < len(K):
        for k_idx in range(len(K)):
            k = K[k_idx]
            if (k_idx + 1) >= v_amb:
                model += inv[i]["Ambiente"][k] == 0

    v_cong = vida_util[i]["Congelado"]
    if 0 < v_cong < len(K):
        for k_idx in range(len(K)):
            k = K[k_idx]
            if (k_idx + 1) >= v_cong:
                model += inv[i]["Congelado"][k] == 0

    v_ref = vida_util[i]["Refrigerado"]
    if 0 < v_ref < len(K):
        for k_idx in range(len(K)):
            k = K[k_idx]
            dia_actual = k_idx + 1
            t_min = dia_actual - v_ref + 2
            inflows_validos = []
            if t_min <= 1:
                inflows_validos.append(inv_inicial[i]["Refrigerado"] + x_store[i]["Refrigerado"] * gramos[i])
            for t_llegada in range(max(2, t_min), dia_actual + 1):
                t_idx = t_llegada - 2
                inflows_validos.append(transfer[i][K[t_idx]])
            model += inv[i]["Refrigerado"][k] <= pulp.lpSum(inflows_validos)

#RESOLUCIÓN Y RESULTADOS

model.solve(pulp.PULP_CBC_CMD(msg=False))

print(f"Estado de la solución: {pulp.LpStatus[model.status]}")
if model.status == pulp.LpStatusOptimal:
    print(f"Costo Total Optimizado (Z): ${pulp.value(model.objective):,.2f}")

    print("\n" + "="*70)
    print(f"{'REPORTE DE MENÚ (3 Comidas al Día - Sin Repeticiones)':^70}")
    print("="*70)

    for k in K:
        print(f"\n--- DÍA: {k} ---")
        for c in C:
            p_elegida = [i for i in P if pulp.value(b_prot[i][k][c]) == 1]
            u_elegida = [u for u in U if pulp.value(b_comp[u][k][c]) == 1]

            p_str = p_elegida[0] if p_elegida else "Error"
            u_str = u_elegida[0] if u_elegida else "Error"

            print(f"  [{c:<8}] -> Proteína: {p_str:<8} | Complemento: {u_str}")
    print("\n--- Compras Necesarias ---")
    for i in I:
        for j in J:
            if x_store[i][j].varValue is not None and x_store[i][j].varValue > 0.01:
                print(f"Comprar {x_store[i][j].varValue:.2f} paquetes de {i} para {j}")
print(f"Tiempo de ejecución: {time.time() - start_time:.2f} segundos")
