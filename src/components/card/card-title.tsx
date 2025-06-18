import type { ReactNode } from "react";

interface CardTitleProps {
	children: ReactNode | Array<ReactNode>;
}

export const CardTitle = ({ children }: Readonly<CardTitleProps>) => {
	return <h1 className="text-2xl font-bold">{children}</h1>;
};
