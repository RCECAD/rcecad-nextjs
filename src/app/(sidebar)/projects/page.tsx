import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { columns, type ProjectRowUI } from "@/components/projects/columns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getProjects(): Promise<ProjectRowUI[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/projects`,
    {
      cache: "no-store",
    },
  );
  const rows = (await res.json()) as any[];

  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    businessName: r.businessName,
    riverBasinName: r.riverBasinName,
    city: r.city,
    state: r.state,
    engineerName: r.engineerName,
    hydraulicId: r.hydraulicId ?? null,
  }));
}

export default async function ProjectsPage() {
  const data = await getProjects();

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Button asChild>
          <Link href="/projects/new">Novo Projeto</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            searchKey="name"
            placeholder="Buscar por nome..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
