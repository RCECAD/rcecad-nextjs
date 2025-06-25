import { Plus } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../general/dialog";
import { Button } from "../general/button";
import { CreateProjectForm } from "../forms/create-project-form";

export const CreateProject = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<Plus />
					Criar Projeto
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Criar novo Projeto</DialogTitle>
					<DialogDescription>
						Insira as informações abaixo para criar um novo projeto. <br />
						<span className="text-amber-400">
							Será necessário informar os dados hidráulicos após a criação.
						</span>
					</DialogDescription>
				</DialogHeader>
				<CreateProjectForm />
			</DialogContent>
		</Dialog>
	);
};
