import type { ReactNode } from "react";

interface PageTitleProps {
	children: ReactNode;
}

export const PageTitle = ({ children }: PageTitleProps) => {
	return (
		<h1 className="text-5xl font-bold tracking-wide leading-tight">
			{children}
		</h1>
	);
};
