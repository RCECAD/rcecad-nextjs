import { z } from "zod";

export const projectSchema = z.object({
	name: z.string().min(1, "O nome do projeto é obrigatório"),
	businessName: z.string().min(1, "O nome da empresa é obrigatório"),
	riverBasinName: z.string().min(1, "O nome da bacia é obrigatório"),
	city: z.string().min(1, "A cidade é obrigatória"),
	state: z.string().min(1, "O estado é obrigatório"),
	engineerName: z.string().min(1, "O nome do projetista é obrigatório"),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
