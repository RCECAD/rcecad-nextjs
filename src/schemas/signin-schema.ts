import { z } from "zod";

export const signinSchema = z.object({
	email: z.string().email("E-mail inválido"),
	password: z
		.string()
		.min(8, "A senha deve possuir pelo menos 8 caracteres")
		.regex(
			/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
			"A senha deve conter uma letra maiúscula e um símbolo",
		),
});

export type SigninFormValues = z.infer<typeof signinSchema>;
