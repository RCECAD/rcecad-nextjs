import { Card } from "@/components/card";
import { Button, Input, InputFile, Label } from "@/components/general";
import { Save } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen w-full p-4">
			<Card.Root>
				<Card.Header>
					<Card.Title>Dados Gerais</Card.Title>
				</Card.Header>
				<form className="space-y-4">
					<Card.Content>
						<div className="flex flex-col gap-1.5">
							<Label>Nome do Projeto</Label>								
							<Input type="text" id="project-name" />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Nome do Projetista</Label>	
							<Input id="designer-name" />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Nome da Empresa</Label>	
							<Input id="enterprise-name" />
						</div>

						<div className="flex flex-col gap-2">
							<Label>Nome da Bacia</Label>	
							<Input id="basin-name" />
						</div>

						<InputFile />

						<Card.Footer>
							<Button type="submit" className="w-fit">
								<Save />
								Salvar Alterações
							</Button>
						</Card.Footer>
					</Card.Content>
				</form>
			</Card.Root>
		</div>
	);
}
