import type { JSX, ReactNode } from "react";

interface AuthContainerProps {
	children: ReactNode;
}

type ComponentSetup = (props: Readonly<AuthContainerProps>) => JSX.Element;

export const AuthContainer: ComponentSetup = ({ children }) => {
	return (
		<div className="flex flex-col gap-8 w-full px-0 py-6 max-w-lg">
			{children}
		</div>
	);
};
