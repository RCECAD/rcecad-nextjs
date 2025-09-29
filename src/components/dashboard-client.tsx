"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProjectWithHydraulic } from "@/domain/entities/project";
import {
  anomalies,
  kpis,
  perCapitaAvgByState,
  returnCoefficientHistogram,
  topCities,
  topStates,
} from "@/lib/analytics";

type Props = { rows: ProjectWithHydraulic[] };

export default function DashboardClient({ rows }: Props) {
  const [q, setQ] = useState("");
  const [uf, setUf] = useState<string>("all");
  const [mat, setMat] = useState<string>("all");

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const okUf = uf === "all" ? true : r.state === uf;
      const okMat = mat === "all" ? true : r.hydraulic?.material === mat;
      const needle = q.toLowerCase();
      const okQ =
        !needle ||
        r.name.toLowerCase().includes(needle) ||
        r.city.toLowerCase().includes(needle) ||
        r.engineerName.toLowerCase().includes(needle);
      return okUf && okMat && okQ;
    });
  }, [rows, q, uf, mat]);

  const K = useMemo(() => kpis(filtered), [filtered]);
  const states = useMemo(() => topStates(filtered, 5), [filtered]);
  const cities = useMemo(() => topCities(filtered, 5), [filtered]);
  const perCapita = useMemo(() => perCapitaAvgByState(filtered), [filtered]);
  const rcHist = useMemo(
    () => returnCoefficientHistogram(filtered),
    [filtered],
  );
  const out = useMemo(() => anomalies(filtered), [filtered]);
  const materialData = useMemo(
    () =>
      Object.entries(K.materialCount).map(([name, value]) => ({ name, value })),
    [K.materialCount],
  );

  const ufs = useMemo(
    () => Array.from(new Set(rows.map((r) => r.state))).sort(),
    [rows],
  );

  return (
    <div className="space-y-6 mx-10">
      <div className="flex flex-col md:flex-row md:items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Resumo e análises do seu portfólio de projetos
          </p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/projects">Ir para Projetos</Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Filtros</CardTitle>
          <CardDescription>Refine os gráficos abaixo</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="space-y-1">
            <Label htmlFor="q">Buscar</Label>
            <Input
              id="q"
              placeholder="Nome, cidade, engenheiro..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>UF</Label>
            <Select value={uf} onValueChange={setUf}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {ufs.map((u) => (
                  <SelectItem key={u} value={u}>
                    {u}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Material</Label>
            <Select value={mat} onValueChange={setMat}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pvc">PVC</SelectItem>
                <SelectItem value="aluminum">Alumínio</SelectItem>
                <SelectItem value="ceramic">Cerâmica</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Total de Projetos" value={K.total} />
        <KpiCard title="Com Hidráulica" value={K.withHyd} />
        <KpiCard title="Sem Hidráulica" value={K.withoutHyd} />
        <KpiCard title="% Preenchido" value={`${K.pctWith.toFixed(1)}%`} />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Distribuição de Materiais">
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  data={materialData}
                  outerRadius={100}
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Top 5 Estados por nº de Projetos">
          <BarsSimple data={states} x="state" y="count" />
        </ChartCard>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Top 5 Cidades por nº de Projetos">
          <BarsSimple data={cities} x="city" y="count" />
        </ChartCard>

        <ChartCard title="Média de Per Capita por UF (Inicial x Final)">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={perCapita}>
                <XAxis dataKey="state" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="initialPerCapita" name="Inicial" />
                <Bar dataKey="finalPerCapita" name="Final" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard title="Histograma – Coeficiente de Retorno">
          <BarsSimple data={rcHist} x="range" y="count" height={260} />
        </ChartCard>

        <Card>
          <CardHeader>
            <CardTitle>Outliers (coeficientes fora da faixa)</CardTitle>
            <CardDescription>
              {out.length
                ? "Projetos que merecem atenção"
                : "Nenhum outlier encontrado"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {out.length ? (
              <ul className="list-disc pl-6 space-y-1">
                {out.map((o) => (
                  <li key={o.id}>
                    <Link href={`/projects/${o.id}/edit`} className="underline">
                      {o.name}
                    </Link>{" "}
                    – {o.reason}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-sm text-muted-foreground">
                Tudo certo por aqui meu mano
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


function KpiCard({ title, value }: { title: string; value: string | number }) {
  return (
    <Card className="border-muted-foreground/20">
      <CardHeader className="pb-1">
        <CardDescription className="text-xs">{title}</CardDescription>
        <CardTitle className="text-2xl">{value}</CardTitle>
      </CardHeader>
    </Card>
  );
}

function ChartCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function BarsSimple({
  data,
  x,
  y,
  height = 300,
}: {
  data: any[];
  x: string;
  y: string;
  height?: number;
}) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey={x} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={y} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
