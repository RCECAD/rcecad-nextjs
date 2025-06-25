import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, JSX, RefAttributes } from "react";

type IconType = ForwardRefExoticComponent<
	Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface TextHeaderProps {
	title: string;
	description: string;
	icon?: IconType;
}
type ComponentSetup = (input: TextHeaderProps) => JSX.Element;

export const TextHeader: ComponentSetup = (input) => {
	const { title, description } = input;
	const icon = input.icon ? (
		<input.icon className="w-12 h-auto text-sky-500 mb-2" />
	) : null;
	return (
		<div className="flex flex-col">
			{icon}
			<h1 className="text-2xl font-extrabold text-slate text-slate-700">
				{title}
			</h1>
			<p className="text-lg font-medium text-slate-500">{description}</p>
		</div>
	);
};
