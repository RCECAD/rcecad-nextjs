import { Slot } from "@radix-ui/react-slot";

type ButtonProps = React.ComponentProps<"button"> & {
	asChild?: boolean;
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	size?: "default" | "sm" | "lg" | "icon";
};

function Button({
	className = "",
	variant = "default",
	size = "default",
	asChild = false,
	...props
}: Readonly<ButtonProps>) {
	const Comp = asChild ? Slot : "button";

	const base =
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";

	const variantClasses = {
		default: "",
		secondary: "",
		ghost: "",
		outline: "",
		destructive: "",
		link: "",
	};

	const sizeClasses = {
		default: "",
		sm: "",
		lg: "",
		icon: "",
	};

	return (
		<Comp
			data-slot="button"
			className={[base, variantClasses[variant], sizeClasses[size], className]
				.join(" ")
				.trim()}
			{...props}
		/>
	);
}

export { Button };
