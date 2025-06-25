import { ChevronRight, CircleHelp, ClipboardPen, Dam, FileCog, LogOut, type LucideProps, Scale3D, Search, TrafficCone, UserCog } from "lucide-react"
import type { ForwardRefExoticComponent, RefAttributes } from "react"

type SidebarItemsType = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
  label: string, 
  path: string
}

export const sidebarItems: Array<SidebarItemsType> = [
  {
    icon: ClipboardPen,
    label: "Dados Gerais",
    path: "/general"
  },
  {
    icon: FileCog,
    label: "Dados Hidráulicos",
    path: "/hydro"
  },
  {
    icon: Dam,
    label: "Vazões Concentradas",
    path: "/flows"
  },
  {
    icon: TrafficCone,
    label: "Pavimentação",
    path: "/paving"
  },
  {
    icon: Scale3D,
    label: "Dimensionamento",
    path: "/sizing"
  },
  {
    icon: CircleHelp,
    label: "Ajuda",
    path: "/help"
  },
  {
    icon: UserCog,
    label: "Minha Conta",
    path: "/account"
  },
  {
    icon: LogOut,
    label: "Sair da Conta",
    path: "/logout"
  }
  
]