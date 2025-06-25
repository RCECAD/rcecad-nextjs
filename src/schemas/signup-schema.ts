import { z } from "zod";

export const signupSchema = z.discriminatedUnion("userType", [
	z.object({
		userType: z.literal("person"),
		name: z.string().min(1, "O nome é obrigatório"),
		cpf: z.string().min(1, "CPF é obrigatório"),
		cnpj: z.string().optional(),
		email: z.string().email("E-mail inválido"),
		password: z
			.string()
			.min(8, "A senha deve possuir pelo menos 8 caracteres")
			.regex(
				/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
				"A senha deve conter uma letra maiúscula e um símbolo",
			),
	}),
	z.object({
		userType: z.literal("business"),
		name: z.string().min(1, "O nome é obrigatório"),
		cpf: z.string().optional(),
		cnpj: z.string().min(1, "CNPJ é obrigatório"),
		email: z.string().email("E-mail inválido"),
		password: z
			.string()
			.min(8, "A senha deve possuir pelo menos 8 caracteres")
			.regex(
				/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
				"A senha deve conter uma letra maiúscula e um símbolo",
			),
	}),
]);

export type SignupFormValues = z.infer<typeof signupSchema>;
