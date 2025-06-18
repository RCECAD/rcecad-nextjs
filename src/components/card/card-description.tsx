import type { ReactNode } from "react";

interface CardDescriptionProps {
	children: ReactNode | Array<ReactNode>;
}

export const CardDescription = ({
	children,
}: Readonly<CardDescriptionProps>) => {
	return <p className="text-lg text-slate-500">{children}</p>;
};
