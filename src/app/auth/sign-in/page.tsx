import { SigninForm } from "@/components/forms/signin-form";
import { TextHeader } from "@/components/layouts/text-header";
import { LogIn } from "lucide-react";

export default function Page() {
	return (
		<div className="flex flex-col gap-6 w-full p-8 max-w-lg lg:px-0">
			<TextHeader
				title="Entrar"
				description="Insira seus dados para acessar sua conta"
				icon={LogIn}
			/>
			<SigninForm />
		</div>
	);
}
