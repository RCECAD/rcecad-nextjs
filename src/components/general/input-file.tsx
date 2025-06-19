import { Button } from "./button";

export const InputFile = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-2 p-4 border-2 border-slate-300 border-dashed rounded-lg min-h-44">
			<p>Arraste e solte seu arquivo aqui</p>
			<p>ou</p>
			<Button variant="secondary">Escolha um arquivo</Button>
		</div>
	);
};
