"use client";

import { Dispatch, SetStateAction, useState } from "react";
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
import { DialogClose, DialogFooter } from "../general/dialog";
import {
	type HydraulicsFormValues,
	hydraulicsSchema,
} from "@/schemas/hydraulics-schema";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface FulfillHydraulicsProps {
	onOpenChange: Dispatch<SetStateAction<boolean>>;
}
export const FulfillHydraulicsForm = ({
	onOpenChange,
}: Readonly<FulfillHydraulicsProps>) => {
	const [loading, setLoading] = useState(false);
	const form = useForm<HydraulicsFormValues>({
		resolver: zodResolver(hydraulicsSchema),
		defaultValues: {
			population: { initialPopulation: 0, saturationPopulation: 0 },
			perCapita: { initialPerCapita: 0, finalPerCapita: 0 },
			roadCoating: { maximumCoating: 0, minimumCoating: 0 },
			coefficient: { k1Coefficient: 0, k2Coefficient: 0 },
			infiltration: { initialInfiltration: 0, finalInfiltration: 0 },
			material: "pvc",
			returnCoefficient: 0,
		},
	});

	async function onSubmit(data: HydraulicsFormValues) {
		setLoading(true);
		const payload = { success: false, data };
		if (!payload.success) {
			setLoading(false);
			toast.error("Ocorreu um erro ao submeter os dados hidráulicos", {
				description: "Tente novamente mais tarde.",
			});
			return;
		}
		onOpenChange(false);
		setLoading(false);
		toast.success("Dados hidráulicos enviados com sucesso!");
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
					name="population.initialPopulation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>População Inicial</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="population.saturationPopulation"
					render={({ field }) => (
						<FormItem>
							<FormLabel>População de Saturação</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="perCapita.initialPerCapita"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Per Capita Inicial</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="perCapita.finalPerCapita"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Per Capita Final</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="roadCoating.maximumCoating"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Revestimento Máximo</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="roadCoating.minimumCoating"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Revestimento Mínimo</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="coefficient.k1Coefficient"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Coeficiente k1</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="coefficient.k2Coefficient"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Coeficiente k2</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="infiltration.initialInfiltration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Infiltração Inicial</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="infiltration.finalInfiltration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Infiltração Final</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="material"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Material</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex space-x-4"
								>
									<FormItem>
										<RadioGroupItem value="pvc" id="material-pvc" />
										<FormLabel htmlFor="material-pvc">PVC</FormLabel>
									</FormItem>
									<FormItem>
										<RadioGroupItem value="aluminum" id="material-aluminum" />
										<FormLabel htmlFor="material-aluminum">Alumínio</FormLabel>
									</FormItem>
									<FormItem>
										<RadioGroupItem value="ceramic" id="material-ceramic" />
										<FormLabel htmlFor="material-ceramic">Cerâmica</FormLabel>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="returnCoefficient"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Coeficiente de Retorno</FormLabel>
							<FormControl>
								<Input type="number" step="any" placeholder="0.0" {...field} />
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
						{loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />}\
						Enviar Dados Hidráulicos
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};
