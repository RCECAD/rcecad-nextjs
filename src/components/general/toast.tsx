"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	return (
		<Sonner
			className="toaster group"
			toastOptions={{
				classNames: {
					toast:
						"group toast group-[.toaster]:bg-slate-100 group-[.toaster]:text-slate-600 group-[.toaster]:border-border group-[.toaster]:shadow-lg",
					description: "group-[.toast]:text-slate-500",
					actionButton:
						"group-[.toast]:bg-sky-400 group-[.toast]:text-slate-100",
					cancelButton:
						"group-[.toast]:bg-red-400 group-[.toast]:text-slate-100",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
