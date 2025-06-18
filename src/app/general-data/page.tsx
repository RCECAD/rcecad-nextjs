import { Button } from "@/components/general/button";
import { Input } from "@/components/general/input";
import { Save } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="bg-slate-200 p-6 rounded-lg w-full max-w-3xl border border-slate-300 shadow-2xl shadow-sky-500/40">
        <h1 className="text-2xl font-bold mb-8">Dados Gerais</h1>

        <form className="space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="project-name" className="text-lg">Nome do Projeto</label>
            <Input id="project-name" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="designer-name" className="text-lg">Nome do Projetista</label>
            <Input id="designer-name" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="enterprise-name" className="text-lg">Nome da Empresa</label>
            <Input id="enterprise-name" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="basin-name" className="text-lg">Nome da Bacia</label>
            <Input id="basin-name" />
          </div>

          <div className="flex flex-col justify-center items-center gap-2 p-4 border-2 border-slate-300 border-dashed rounded-lg">
            <p>Arraste e solte seu arquivo aqui</p>
            <p>ou</p>
            <Button variant="secondary">
              Escolha um arquivo
            </Button>
          </div>

          <Button type="submit">
            <Save />
            Salvar Alterações
          </Button>
        </form>
      </div>
    </div>
  )
}