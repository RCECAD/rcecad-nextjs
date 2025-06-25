"use client";

import type { Project } from "@/domain/entities/project";

interface ProjectsPageProps {
	projects: Array<Project>;
}

export const ProjectsPage = ({ projects }: Readonly<ProjectsPageProps>) => {
	return <div>asd</div>;
};
