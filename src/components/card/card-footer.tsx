import type { ReactNode } from "react";

interface CardFooterProps {
	children: ReactNode | Array<ReactNode>;
}
export const CardFooter = ({ children }: Readonly<CardFooterProps>) => {
	return (
		<div className="flex w-full justify-between py-3 items-center">{children}</div>
	);
};
