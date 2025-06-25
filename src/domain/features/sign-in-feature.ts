"use server";

import { backendUrl, type DomainFeature } from ".";
import type { User } from "../entities/user";

export type Input = {
	user: Pick<User, "email" | "password">;
};

export type Output = Pick<User, "token" | "created" | "expiresIn" | "role">;

type Setup = DomainFeature<Input, Output>;

export const signIn: Setup = async ({ user }) => {
	if (!backendUrl) {
		console.error("[loginUser] backendUrl não configurado");
		return { success: false, data: undefined };
	}

	try {
		const res = await fetch(`${backendUrl}/api/user/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: user.email, password: user.password }),
		});

		if (!res.ok) {
			console.error(
				`[loginUser] Erro ${res.status} ao autenticar: ${res.statusText}`,
			);
			return { success: false, data: undefined };
		}

		const data: Output = await res.json();
		return { success: true, data };
	} catch (err) {
		console.error("[loginUser] Exceção ao autenticar usuário:", err);
		return { success: false, data: undefined };
	}
};
