import type { ReactNode } from "react";

interface CardHeaderProps {
	children: ReactNode | Array<ReactNode>;
}

export const CardHeader = ({ children }: Readonly<CardHeaderProps>) => {
	return <div className="space-y-1">{children}</div>;
};
