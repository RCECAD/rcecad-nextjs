import type { ReactNode } from "react";

interface CardContentProps {
	children: ReactNode | Array<ReactNode>;
}

export const CardContent = ({ children }: Readonly<CardContentProps>) => {
	return <div className="flex flex-col gap-1 py-1">{children}</div>;
};
