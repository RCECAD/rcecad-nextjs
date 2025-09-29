import { z } from "zod";

export const hydraulicSchema = z.object({
  id: z.string().uuid(),
  population: z.object({
    initialPopulation: z.number().int().nonnegative(),
    saturationPopulation: z.number().int().nonnegative(),
  }),
  perCapita: z.object({
    initialPerCapita: z.number().nonnegative(),
    finalPerCapita: z.number().nonnegative(),
  }),
  roadCoating: z.object({
    maximumCoating: z.number().nonnegative(),
    minimumCoating: z.number().nonnegative(),
  }),
  coefficient: z.object({
    k1Coefficient: z.number(),
    k2Coefficient: z.number(),
  }),
  material: z.enum(["pvc", "aluminum", "ceramic"]),
  infiltration: z.object({
    initialInfiltration: z.number().nonnegative(),
    finalInfiltration: z.number().nonnegative(),
  }),
  returnCoefficient: z.number(),
});

export const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  businessName: z.string().min(1),
  riverBasinName: z.string().min(1),
  city: z.string().min(1),
  state: z.string().length(2),
  engineerName: z.string().min(1),
  userId: z.string().uuid(),
  hydraulicId: z.string().uuid().optional().nullable(),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type HydraulicInput = z.infer<typeof hydraulicSchema>;
