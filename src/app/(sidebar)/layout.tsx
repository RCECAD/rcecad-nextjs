"use client";
import { SidebarComponent } from "@/components/sidebar";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const SidebarLayout = ({ children }: Readonly<Props>) => {
	return (
		<div className="flex">
			<SidebarComponent.DesktopSidebar />
			<SidebarComponent.MobileSidebar />
			{children}
		</div>
	);
};
export default SidebarLayout;
