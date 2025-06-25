import Link from "next/link";
import type { JSX } from "react";

interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
}

type ComponentSetup = (props: AnchorProps) => JSX.Element;

export const Anchor: ComponentSetup = ({ children, href, ...props }) => {
	return (
		<Link
			href={href}
			{...props}
			className="text-sky-600 text-lg font-medium w-fit hover:underline"
		>
			{children}
		</Link>
	);
};
