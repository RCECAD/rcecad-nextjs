import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({ children, ...props }: Readonly<LabelProps>) => (
	<label {...props} className="text-lg">
		{children}
	</label>
);
