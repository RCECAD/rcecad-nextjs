"use server";

import { backendUrl, type DomainFeature } from ".";
import type { Project } from "../entities/project";
import type { User } from "../entities/user";

type Input = {
	user: Pick<User, "id" | "token">;
};

type Output = Array<Project>;
type Setup = DomainFeature<Input, Output>;

export const retrieveProjects: Setup = async ({ user }) => {
	if (!backendUrl) {
		console.error("[retrieveProjects] backendUrl não configurado");
		return { success: false, data: undefined };
	}

	try {
		const res = await fetch(`${backendUrl}/api/project/list/user/${user.id}`, {
			method: "GET",
			headers: { Authorization: `Bearer + ${user.token}` },
		});

		if (!res.ok) {
			console.error(
				`[retrieveProjects] Erro ${res.status} ao buscar projetos: ${res.statusText}`,
			);
			return { success: false, data: undefined };
		}

		const projects: Array<Project> = await res.json();

		return { success: true, data: projects };
	} catch (err) {
		console.error("[retrieveProjects] Exceção ao buscar projetos:", err);
		return { success: false, data: undefined };
	}
};
