import type { ReactNode } from "react";

interface CardRootProps {
	children: ReactNode | Array<ReactNode>;
}

export const CardRoot = ({ children }: Readonly<CardRootProps>) => {
	return (
		<div className="bg-slate-200 p-6 rounded-lg w-full max-w-3xl border border-slate-300 shadow-2xl shadow-sky-500/40">
			{children}
		</div>
	);
};
