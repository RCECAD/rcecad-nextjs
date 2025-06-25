"use server";

import { backendUrl, type DomainFeature } from ".";
import type { User } from "../entities/user";

type Input = {
	user: Omit<
		User,
		"created" | "role" | "token" | "expiresIn" | "id" | "cpf" | "userType"
	>;
};

type Output = {
	user: Pick<User, "status" | "id" | "cnpj" | "email" | "name">;
};

type Setup = DomainFeature<Input, Output>;

// feito por xx_anagamer_xx
export const signUpBusiness: Setup = async ({ user }) => {
	if (!backendUrl) {
		console.error("[signUpBusiness] backendUrl não configurado");
		return {
			success: false,
			data: undefined,
		};
	}
	try {
		const res = await fetch(backendUrl.concat("/api/user/company"), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				tradeName: user.name,
				legalName: user.name,
				...user,
			}),
		});
		if (!res.ok) {
			console.error(
				`[signUpBusiness] Erro ${res.status} ao autenticar: ${res.statusText}`,
			);
			return {
				success: false,
				data: undefined,
			};
		}
		const resUser: Output = await res.json();
		return {
			success: true,
			data: resUser,
		};
	} catch (err) {
		console.error("[signUpBusiness] erro desconhecido ", err);
		return {
			success: false,
			data: undefined,
		};
	}
};
