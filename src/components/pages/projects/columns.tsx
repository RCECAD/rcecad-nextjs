import { Button } from "@/components/general/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Project } from "@/domain/entities/project";
import type { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const columns: Array<ColumnDef<Project>> = [
	{
		accessorKey: "name",
		header: "Nome do projeto",
	},
	{
		accessorKey: "businessName",
		header: "Nome do empresa",
	},
	{
		accessorKey: "engineerName",
		header: "Nome do engenheiro",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const foo = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(foo.id)}
						>
							copiar alguma coisa se pa
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Remover projeto</DropdownMenuItem>
						<DropdownMenuItem>Visualizar detalhes</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
