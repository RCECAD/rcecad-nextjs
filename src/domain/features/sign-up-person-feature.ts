"use server";

import { backendUrl, type DomainFeature } from ".";
import type { User } from "../entities/user";

type Input = {
	user: Omit<
		User,
		"created" | "role" | "token" | "expiresIn" | "id" | "cnpj" | "userType"
	>;
};

type Output = {
	user: Pick<User, "status" | "id" | "cpf" | "email" | "name">;
};

type Setup = DomainFeature<Input, Output>;

// feito por xx_anagamer_xx
export const signUpPerson: Setup = async ({ user }) => {
	if (!backendUrl) {
		console.error("[signUpPerson] backendUrl não configurado");
		return {
			success: false,
			data: undefined,
		};
	}
	try {
		const res = await fetch(backendUrl.concat("/api/user/person"), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		if (!res.ok) {
			console.error(
				`[signUpPerson] Erro ${res.status} ao autenticar: ${res.statusText}`,
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
		console.error("[signUpPerson] erro desconhecido ", err);
		return {
			success: false,
			data: undefined,
		};
	}
};
