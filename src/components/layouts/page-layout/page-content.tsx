import type { ReactNode } from "react";

interface PageContentProps {
	children: ReactNode | Array<ReactNode>;
}

export const PageContent = ({ children }: PageContentProps) => {
	return (
		<div className="flex flex-col w-full h-full gap-8 mt-20">{children}</div>
	);
};
