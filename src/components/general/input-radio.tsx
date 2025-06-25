import type { InputHTMLAttributes, JSX } from "react";

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	value: string;
}

type ComponentSetup = (props: InputRadioProps) => JSX.Element;

export const InputRadio: ComponentSetup = ({
	name,
	label,
	checked,
	value,
	...rest
}) => {
	const id = `${name}-${value}`;
	return (
		<label
			htmlFor={id}
			className="inline-flex items-center cursor-pointer space-x-2"
		>
			<input
				id={id}
				type="radio"
				name={name}
				value={value}
				checked={checked}
				{...rest}
				className="hidden peer"
			/>
			<span className="w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors duration-200 border-slate-400 peer-checked:border-sky-500">
				<span className="w-3 h-3 rounded-full bg-sky-500 opacity-0 peer-checked:opacity-100">
					{" "}
				</span>
			</span>
			<span className="text-slate-800">{label}</span>
		</label>
	);
};
