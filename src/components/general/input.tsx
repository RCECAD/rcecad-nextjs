type InputProps = React.ComponentProps<"input">;

function Input({
	className = "",
	type = "text",
	...props
}: Readonly<InputProps>) {
	const baseClasses =
		"block w-full rounded-md border  bg-red-500 px-3 py-2 text-sm text-slate-200 shadow-sm placeholder:text-slate-400 transition focus:outline-none";

	const focusClasses =
		"focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

	const disabledClasses = "disabled:cursor-not-allowed disabled:opacity-50";

	const ariaClasses =
		"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

	const darkClasses = "dark:bg-input dark:border-input";

	return (
		<input
			type={type}
			data-slot="input"
			className={[
				baseClasses,
				focusClasses,
				disabledClasses,
				ariaClasses,
				darkClasses,
				className,
			]
				.join(" ")
				.trim()}
			{...props}
		/>
	);
}

export { Input };
