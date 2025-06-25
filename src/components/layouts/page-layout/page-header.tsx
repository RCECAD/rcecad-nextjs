import type { ReactNode } from "react";

interface PageHeaderProps {
	children: ReactNode | Array<ReactNode>;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
	return (
		<div className="flex w-full justify-between items-center">{children}</div>
	);
};
