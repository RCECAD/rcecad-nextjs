"use client"

import { Menu } from "lucide-react";
import { sidebarItems } from "./sidebar-items";
import { useState } from "react";

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="p-4 flex flex-col items-start justify-start gap-6 absolute bg-slate-100 lg:hidden">
      <button type="button" onClick={handleToggleSidebar}>
        <Menu size={40} />
      </button>
      <aside className={`${isOpen ? "flex" : "hidden"} w-fit h-fit flex-col items-start justify-start gap-6`}>
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-3 rounded-lg cursor-pointer select-none">
            <item.icon/>
            <p className="font-semibold text-base text-slate-500">{item.label}</p>
          </div>
        ))}
      </aside>
    </div>
  );
};
