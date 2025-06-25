import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/general/toast";

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "RCECAD",
	description: "Made with ❤️ from RCECAD Group!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lato.className} antialiased bg-slate-100 text-slate-950`}
			>
				<Toaster />
				{children}
			</body>
		</html>
	);
}
