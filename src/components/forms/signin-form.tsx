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
import { Input } from "../general/input";
import { Button } from "../general/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
<<<<<<< HEAD
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";
import { SigninFormValues } from "@/schemas/signin-schema";

export function SigninForm() {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm<SigninFormValues>({
		resolver: zodResolver(signupSchema),
=======
import { useRouter } from "next/navigation";

import { type SigninFormValues, signinSchema } from "@/schemas/signin-schema";
import Link from "next/link";
import { Anchor } from "../general/anchor";

export const SigninForm = () => {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm<SigninFormValues>({
		resolver: zodResolver(signinSchema),
>>>>>>> refs/remotes/origin/main
		defaultValues: {
			email: "",
			password: "",
		},
	});

<<<<<<< HEAD
	const userType = form.watch("userType");

=======
>>>>>>> refs/remotes/origin/main
	async function onSubmit(data: SigninFormValues) {
		setLoading(true);
		router.push("/projects");
		try {
			const res = await fetch("/api/auth/signin", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				const err = await res.json();
				throw new Error(err.error || "Falha no login");
			}

			toast.success("Login realizado!");
			router.push("/projects");
			// biome-ignore lint/suspicious/noExplicitAny: <its required>
		} catch (err: any) {
			toast.error("Credenciais inválidas", {
				description: err.message,
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 min-w-full mx-auto"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input type="email" placeholder="seu@email.com" {...field} />
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

				<Button type="submit" disabled={loading} className="w-full">
					{loading && <Loader2 className="animate-spin mr-2 h-4 w-4" />} Entrar
				</Button>
				<div className="flex items-center gap-2 flex-wrap">
					<p className="font-medium text-slate-400 text-lg">
						Ainda não possui uma conta?
					</p>
					<Anchor href="/auth/sign-up">Registre-se</Anchor>
				</div>
			</form>
		</Form>
	);
};
