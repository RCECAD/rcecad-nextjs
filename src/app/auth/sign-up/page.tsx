import { SignupForm } from "@/components/forms/signup-form";
import { TextHeader } from "@/components/layouts/text-header";
import { LogIn } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col gap-6 w-full p-8 max-w-lg lg:px-0">
			<TextHeader
				title="Cadastro"
				description="Insira seus dados para criar sua conta"
				icon={LogIn}
			/>
			<SignupForm />
		</div>
	);
}
