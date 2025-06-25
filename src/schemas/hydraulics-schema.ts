import z from "zod";

export const hydraulicsSchema = z.object({
	population: z.object({
		initialPopulation: z.number().min(0, "Valor mínimo é 0"),
		saturationPopulation: z.number().min(0, "Valor mínimo é 0"),
	}),
	perCapita: z.object({
		initialPerCapita: z.number().min(0, "Valor mínimo é 0"),
		finalPerCapita: z.number().min(0, "Valor mínimo é 0"),
	}),
	roadCoating: z.object({
		maximumCoating: z.number().min(0, "Valor mínimo é 0"),
		minimumCoating: z.number().min(0, "Valor mínimo é 0"),
	}),
	coefficient: z.object({
		k1Coefficient: z.number().min(0, "Valor mínimo é 0"),
		k2Coefficient: z.number().min(0, "Valor mínimo é 0"),
	}),
	infiltration: z.object({
		initialInfiltration: z.number().min(0, "Valor mínimo é 0"),
		finalInfiltration: z.number().min(0, "Valor mínimo é 0"),
	}),
	material: z.enum(["pvc", "aluminum", "ceramic"]),
	returnCoefficient: z.number().min(0, "Valor mínimo é 0"),
});

export type HydraulicsFormValues = z.infer<typeof hydraulicsSchema>;
