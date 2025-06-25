"use client";
import { AuthCard } from "@/components/layouts/auth/auth-card";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div className="bg-slate-100 min-h-screen flex items-center justify-center p-0 lg:p-8 lg:h-screen">
			<AuthCard>{children}</AuthCard>
		</div>
	);
};

export default AuthLayout;
