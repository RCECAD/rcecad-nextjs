"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ProjectRowUI = {
  id: string;
  name: string;
  businessName: string;
  riverBasinName: string;
  city: string;
  state: string;
  engineerName: string;
  hydraulicId: string | null;
};

export const columns: ColumnDef<ProjectRowUI>[] = [
  { accessorKey: "name", header: "Nome" },
  { accessorKey: "businessName", header: "Empresa" },
  { accessorKey: "riverBasinName", header: "Bacia" },
  {
    header: "Cidade/UF",
    cell: ({ row }) => {
      const r = row.original;
      return (
        <span>
          {r.city}/{r.state}
        </span>
      );
    },
  },
  { accessorKey: "engineerName", header: "Engenheiro" },
  {
    header: "Hidráulica",
    cell: ({ row }) =>
      row.original.hydraulicId ? (
        <Badge variant="secondary">Preenchida</Badge>
      ) : (
        <Badge variant="outline">Pendente</Badge>
      ),
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const p = row.original;
      return (
        <div className="flex gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href={`/projects/${p.id}/edit`}>Editar</Link>
          </Button>
          {p.hydraulicId ? (
            <Button asChild size="sm" variant="secondary">
              <Link href={`/projects/${p.id}/hydraulic`}>Ver hidráulica</Link>
            </Button>
          ) : (
            <Button asChild size="sm">
              <Link href={`/projects/${p.id}/hydraulic`}>
                Preencher dados hidráulicos
              </Link>
            </Button>
          )}
        </div>
      );
    },
  },
];
