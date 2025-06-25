"use client"

import { useState } from "react"
import Link from "next/link"
import { sidebarItems } from "./sidebar-items"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronRight, Search } from "lucide-react"

export const DesktopSidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const pathname = usePathname();

  const toggleOpacity = isOpen ? "opacity-100 block" : "opacity-0 hidden";

  const renderMiddleLinks = (sidebarItems.slice(0, 3).map((item, index) => {
    const isOnRoute = pathname === item.path
    const isOnRouteClassname = "bg-slate-200/40 shadow-md shadow-sky-700/40 text-sky-400"
    return (
      <Link href={item.path} key={index} className={`flex items-center justify-center  p-4 rounded-lg ${isOnRoute ? isOnRouteClassname : "text-slate-500 hover:text-sky-600 hover:shadow-xs shadow-sky-600/20"} transition-all duration-200 ease-out`}>
        <item.icon className={"text-4xl"}/>
        <p className={`font-semibold text-base text-slate-500  ${toggleOpacity} transition-opacity duration-500 delay-200 linear`}>{item.label}</p>
      </Link>
    )
  }))

  return (
    <aside data-isopen={isOpen} className={"hidden lg:flex flex-col data-[isopen=true]:w-64 data-[isOpen=false]:w-20 overflow-hidden text-nowrap h-screen p-4 bg-slate-100 justify-between border-r-2 border-r-slate-200 transition-all duration-200 ease-out data-[isopen=true]:items-start data-[isopen=false]:items-center"}>
      <div className={`w-fit h-fit flex flex-col justify-center gap-6 ${isOpen ? "items-start" : "items-center"}`}>
        <Link href="/home">
          <Image src="/logo.svg" alt="Logo" width={40} height={40}/>
        </Link>
        <Search className="text-4xl text-slate-500" />
        <ChevronRight className="text-4xl text-slate-500 cursor-pointer" onClick={handleToggleSidebar} />
      </div>

      <div className={`w-fit h-fit flex flex-col justify-center gap-3 ${isOpen ? "items-start" : "items-center"}`}>
        {renderMiddleLinks}
      </div>

      <div className={`w-fit h-fit flex flex-col justify-center gap-6 ${isOpen ? "items-start" : "items-center"}`}>
        {sidebarItems.slice(-3).map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-3 rounded-lg">
            <item.icon className="text-4xl text-slate-500"/>
            <p className={`font-semibold text-base text-slate-500 ${toggleOpacity} transition-opacity duration-500 delay-200 linear`}>{item.label}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
