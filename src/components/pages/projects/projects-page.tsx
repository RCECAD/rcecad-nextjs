"use client";

import { CreateProject } from "@/components/dialogs/create-project";
import { DataTable } from "@/components/general/table";
import { PageLayout } from "@/components/layouts/page-layout";
import type { Project } from "@/domain/entities/project";
import { projectColumns } from "./columns";

interface ProjectsPageProps {
	projects: Array<Project>;
}

export const ProjectsPage = ({ projects }: Readonly<ProjectsPageProps>) => {
	return (
		<PageLayout.Root>
			<PageLayout.Header>
				<PageLayout.Title>Projetos</PageLayout.Title>
				<CreateProject />
			</PageLayout.Header>
			<PageLayout.Content>
				{projects && <DataTable columns={projectColumns} data={projects} />}
			</PageLayout.Content>
		</PageLayout.Root>
	);
};
