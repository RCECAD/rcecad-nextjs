"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

function Dialog(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(
	props: React.ComponentProps<typeof DialogPrimitive.Trigger>,
) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(
	props: React.ComponentProps<typeof DialogPrimitive.Portal>,
) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose(
	props: React.ComponentProps<typeof DialogPrimitive.Close>,
) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
	className = "",
	...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
	const base = "fixed inset-0 z-50 bg-black/50";
	const animation =
		"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0";

	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={[base, animation, className].join(" ").trim()}
			{...props}
		/>
	);
}

function DialogContent({
	className = "",
	children,
	showCloseButton = true,
	...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
	showCloseButton?: boolean;
}) {
	const base =
		"fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg bg-background";

	const animation =
		"data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95";

	const closeButtonClasses =
		"absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 ring-offset-background focus:ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={[base, animation, className].join(" ").trim()}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						className={closeButtonClasses}
					>
						<XIcon />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

function DialogHeader({
	className = "",
	...props
}: React.ComponentProps<"div">) {
	const classes = "flex flex-col gap-2 text-center sm:text-left";
	return (
		<div
			data-slot="dialog-header"
			className={[classes, className].join(" ").trim()}
			{...props}
		/>
	);
}

function DialogFooter({
	className = "",
	...props
}: React.ComponentProps<"div">) {
	const classes = "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end";
	return (
		<div
			data-slot="dialog-footer"
			className={[classes, className].join(" ").trim()}
			{...props}
		/>
	);
}

function DialogTitle({
	className = "",
	...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
	const classes = "text-lg leading-none font-semibold";
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={[classes, className].join(" ").trim()}
			{...props}
		/>
	);
}

function DialogDescription({
	className = "",
	...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
	const classes = "text-muted-foreground text-sm";
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={[classes, className].join(" ").trim()}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
