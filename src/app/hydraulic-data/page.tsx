import { Card } from "@/components/card";
import { Button } from "@/components/general/button";
import { Input } from "@/components/general/input";
import { Label } from "@/components/general/label";
import { HelpCircle, Save } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <Card.Root>
        <Card.Header>
          <Card.Title>Dados Hidraulicos</Card.Title>
        </Card.Header>

        <Card.Content>
          <form className="space-y-4">
            <div className="flex flex-col items-start justify-center gap-6 lg:flex-row">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 border border-slate-300 p-4 rounded-lg">
                  <h2 className="text-lg font-medium">População</h2>
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Inicial</Label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Saturação</Label>
                      <Input />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 border border-slate-300 p-4 rounded-lg">
                  <h2 className="text-lg font-medium">Per Capita</h2>
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Inicial</Label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Final</Label>
                      <Input />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 border border-slate-300 p-4 rounded-lg">
                  <h2 className="text-lg font-medium">Recobrimento das Ruas</h2>
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Minimo</Label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Maximo</Label>
                      <Input />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-1.5 border border-slate-300 p-4 rounded-lg">
                  <h2 className="text-lg font-medium">Coeficiente</h2>
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>K1</Label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>K2</Label>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Label>Material</Label>
                    <Input />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 border border-slate-300 p-4 rounded-lg">
                  <h2 className="text-lg font-medium">Infiltração</h2>
                  <div className="flex flex-col items-center gap-6 lg:flex-row">
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Inicial</Label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <Label>Final</Label>
                      <Input />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 w-full">
                    <Label>Coeficiente de Retorno</Label>
                    <Input />
                  </div>
                </div>
              </div>
            </div>

            <Card.Footer>
              <Button variant="secondary">
                <HelpCircle />
                Ajuda
              </Button>
              <Button type="submit">
                <Save />
                Salvar Alterações
              </Button>
            </Card.Footer>
          </form>
        </Card.Content>
      </Card.Root>
    </div>
  );
}
