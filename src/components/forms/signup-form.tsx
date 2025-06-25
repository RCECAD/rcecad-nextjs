"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../general/input";
import { Button } from "../general/button";
import { type SignupFormValues, signupSchema } from "@/schemas/signup-schema";
import { useState } from "react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

export function SignupForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<SignupFormValues>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			userType: "person",
			name: "",
			cpf: "",
			cnpj: "",
			email: "",
			password: "",
		},
	});

	const userType = form.watch("userType");

	async function onSubmit(data: SignupFormValues) {
		setLoading(true);
		const signUpPayload = { success: false, data }; // chamada api
		if (!signUpPayload.success) {
			setLoading(false);
			toast.error("Opa! Ocorreu um erro...", {
				description:
					"Ocorreu um erro ao tentar cadastrar sua conta, por favor, tente novamente.",
			});
		}
		setLoading(false);
		toast.success(
			"Cadastro realizado com sucesso! Agora, entre no RCECAD com sua conta.",
		);
		form.reset();
		redirect("/auth/signin");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 max-w-md mx-auto"
			>
				<FormField
					control={form.control}
					name="userType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipo de Conta</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex space-x-4"
								>
									<FormItem>
										<RadioGroupItem value="person" id="person" />
										<Label htmlFor="person">Pessoa Física</Label>
									</FormItem>
									<FormItem>
										<RadioGroupItem value="business" id="business" />
										<Label htmlFor="business">Pessoa Jurídica</Label>
									</FormItem>
								</RadioGroup>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome</FormLabel>
							<FormControl>
								<Input placeholder="Seu nome completo" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{userType === "person" && (
					<FormField
						control={form.control}
						name="cpf"
						render={({ field }) => (
							<FormItem>
								<FormLabel>CPF</FormLabel>
								<FormControl>
									<Input placeholder="000.000.000-00" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				{userType === "business" && (
					<FormField
						control={form.control}
						name="cnpj"
						render={({ field }) => (
							<FormItem>
								<FormLabel>CNPJ</FormLabel>
								<FormControl>
									<Input placeholder="00.000.000/0000-00" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="email@exemplo.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input type="password" placeholder="********" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={loading}>
					{loading && <Loader2 className="animate-spin" />} Criar conta
				</Button>
			</form>
		</Form>
	);
}
