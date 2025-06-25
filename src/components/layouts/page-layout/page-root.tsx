import type { ReactNode } from "react";

interface PageRootProps {
	children: ReactNode;
}

export const PageRoot = ({ children }: PageRootProps) => {
	return <div className="flex flex-col w-full h-full p-12">{children}</div>;
};
