import { Card } from "@/components/card";
import { Button, Input, InputFile } from "@/components/general";
import { Save } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen w-full">
			<Card.Root>
				<Card.Header>
					<Card.Title>Dados Gerais</Card.Title>
				</Card.Header>
				<form className="space-y-4">
					<Card.Content>
						<div className="flex flex-col gap-1.5">
							<label htmlFor="project-name" className="text-lg">
								Nome do Projeto
							</label>
							<Input type="text" id="project-name" />
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="designer-name" className="text-lg">
								Nome do Projetista
							</label>
							<Input id="designer-name" />
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="enterprise-name" className="text-lg">
								Nome da Empresa
							</label>
							<Input id="enterprise-name" />
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="basin-name" className="text-lg">
								Nome da Bacia
							</label>
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
