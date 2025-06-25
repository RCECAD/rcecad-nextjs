import { ProjectsPage } from "@/components/pages/projects/projects-page";
import type { Project } from "@/domain/entities/project";
// import { retrieveProjects } from "@/domain/features/retrieve-projects-feature";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export default async function Page() {
	// const token = (await cookies()).get("token")?.value;
	// if (!token) {
	// 	throw redirect("/auth/signin");
	// }

	// const projectsPayload = await retrieveProjects({
	// 	user: {
	// 		id: "foo",
	// 		token,
	// 	},
	// });

	// const projects = projectsPayload.data ?? [];
	const projects: Array<Project> = [
		{
			id: "proj-1",
			name: "Construção da Barragem Central",
			businessName: "Hidro Engenharia S/A",
			riverBasinName: "Bacia do Rio Amazonas",
			city: "Manaus",
			state: "AM",
			engineerName: "Eng. José da Silva",
			user: { id: "user-1" },
			hydraulic: { id: "hydraulic-1" },
		},
		{
			id: "proj-2",
			name: "Reservatório Norte",
			businessName: "Água Viva Construções",
			riverBasinName: "Bacia do Rio Tocantins",
			city: "Palmas",
			state: "TO",
			engineerName: "Eng. Maria Ferreira",
			user: { id: "user-2" },
			hydraulic: { id: undefined },
		},
		{
			id: "proj-3",
			name: "Canal de Irrigação Sul",
			businessName: "AgroCanal Ltda.",
			riverBasinName: "Bacia do Rio São Francisco",
			city: "Juazeiro",
			state: "BA",
			engineerName: "Eng. Carlos Pereira",
			user: { id: "user-3" },
			hydraulic: { id: "hydraulic-3" },
		},
	];
	return <ProjectsPage projects={projects} />;
}
