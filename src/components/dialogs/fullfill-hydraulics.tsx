"use client";

import { FileWarning } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../general/dialog";
import { FulfillHydraulicsForm } from "../forms/fulfill-hydraulics-form";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { useState } from "react";

export const FulfillHydraulics = () => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<DropdownMenuItem>
					<FileWarning className="h-4 w-4 text-amber-600" />
					Dados hidráulicos
				</DropdownMenuItem>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Dados Hidráulicos</DialogTitle>
					<DialogDescription>
						Preencha abaixo todos os parâmetros hidráulicos do projeto.
					</DialogDescription>
				</DialogHeader>
				<FulfillHydraulicsForm onOpenChange={setOpen} />
			</DialogContent>
		</Dialog>
	);
};
