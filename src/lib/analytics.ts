import type { ProjectWithHydraulic } from "@/domain/entities/project";

type Num = number;

export function kpis(rows: ProjectWithHydraulic[]) {
  const total = rows.length;
  const withHyd = rows.filter((r) => !!r.hydraulic).length;
  const withoutHyd = total - withHyd;
  const pctWith = total ? (withHyd / total) * 100 : 0;

  const materialCount = rows.reduce<Record<string, number>>((acc, r) => {
    const m = r.hydraulic?.material;
    if (m) acc[m] = (acc[m] ?? 0) + 1;
    return acc;
  }, {});

  return { total, withHyd, withoutHyd, pctWith, materialCount };
}

export function topStates(rows: ProjectWithHydraulic[], topN = 5) {
  const byUF = rows.reduce<Record<string, number>>((acc, r) => {
    acc[r.state] = (acc[r.state] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(byUF)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([state, count]) => ({ state, count }));
}

export function topCities(rows: ProjectWithHydraulic[], topN = 5) {
  const byCity = rows.reduce<Record<string, number>>((acc, r) => {
    const key = `${r.city} / ${r.state}`;
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(byCity)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([city, count]) => ({ city, count }));
}

export function perCapitaAvgByState(rows: ProjectWithHydraulic[]) {
  const bucket: Record<string, { initSum: Num; finSum: Num; n: number }> = {};
  for (const r of rows) {
    const uf = r.state;
    if (!bucket[uf]) bucket[uf] = { initSum: 0, finSum: 0, n: 0 };
    const pc = r.hydraulic?.perCapita;
    if (pc) {
      bucket[uf].initSum += pc.initialPerCapita;
      bucket[uf].finSum += pc.finalPerCapita;
      bucket[uf].n += 1;
    }
  }
  return Object.entries(bucket).map(([state, v]) => ({
    state,
    initialPerCapita: v.n ? v.initSum / v.n : 0,
    finalPerCapita: v.n ? v.finSum / v.n : 0,
  }));
}

export function returnCoefficientHistogram(rows: ProjectWithHydraulic[]) {
  const edges = [0, 0.2, 0.4, 0.6, 0.8, 1];
  const counts = Array(edges.length - 1).fill(0);
  for (const r of rows) {
    const rcRaw = r.hydraulic?.returnCoefficient;
    if (rcRaw == null) continue;
    const rc = typeof rcRaw === "number" ? rcRaw : Number(rcRaw);
    if (!Number.isFinite(rc)) continue;
    const idx = Math.max(
      0,
      Math.min(counts.length - 1, edges.findIndex((e) => rc < e) - 1),
    );
    counts[idx]++;
  }
  return counts.map((c, i) => ({
    range: `${edges[i]}–${edges[i + 1]}`,
    count: c,
  }));
}

export function anomalies(rows: ProjectWithHydraulic[]) {
  const outliers: { id: string; name: string; reason: string }[] = [];
  for (const r of rows) {
    const c = r.hydraulic?.coefficient;
    if (!c) continue;
    if (c.k1Coefficient < 0 || c.k1Coefficient > 5)
      outliers.push({
        id: r.id,
        name: r.name,
        reason: `k1=${c.k1Coefficient}`,
      });
    if (c.k2Coefficient < 0 || c.k2Coefficient > 5)
      outliers.push({
        id: r.id,
        name: r.name,
        reason: `k2=${c.k2Coefficient}`,
      });
  }
  return outliers;
}
