"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../general/input";
import { Button } from "../general/button";

import type { ProjectFormValues } from "@/schemas/project-schema";
import { projectSchema } from "@/schemas/project-schema";
import { DialogClose, DialogFooter } from "../general/dialog";

export const CreateProjectForm = () => {
	const [loading, setLoading] = useState(false);
	const form = useForm<ProjectFormValues>({
		resolver: zodResolver(projectSchema),
		defaultValues: {
			name: "",
			businessName: "",
			riverBasinName: "",
			city: "",
			state: "",
			engineerName: "",
		},
	});

	async function onSubmit(data: ProjectFormValues) {
		setLoading(true);
		const createProjectPayload = { success: false, data };
		if (!createProjectPayload.success) {
			setLoading(false);
			toast.error("Opa! Ocorreu um erro...", {
				description:
					"Ocorreu um erro ao tentar criar o projeto, por favor, tente novamente.",
			});
		}
		setLoading(false);
		toast.success("Projeto criado com sucesso!");
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 min-w-full mx-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome do Projeto</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Construção da Barragem" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="businessName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome da Empresa</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Hidro Engenharia S/A" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="riverBasinName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome da Bacia</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Bacia do Rio Amazonas" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Cidade</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Manaus" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="state"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Estado</FormLabel>
							<FormControl>
								<Input placeholder="Ex: AM" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="engineerName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome do Engenheiro</FormLabel>
							<FormControl>
								<Input placeholder="Ex: Eng. José da Silva" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="secondary">
							Fechar
						</Button>
					</DialogClose>
					<Button type="submit" disabled={loading}>
						{loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}
						Criar Projeto
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
