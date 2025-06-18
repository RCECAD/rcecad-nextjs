import type { ReactNode } from "react";

interface CardFooterProps {
	children: ReactNode | Array<ReactNode>;
}
export const CardFooter = ({ children }: Readonly<CardFooterProps>) => {
	return <div className="flex w-full justify-end items-center">{children}</div>;
};
