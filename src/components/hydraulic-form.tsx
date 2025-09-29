"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { hydraulicSchema } from "@/lib/validators";

type HydraulicFormData = z.infer<typeof hydraulicSchema>;

export default function HydraulicForm({ projectId }: { projectId: string }) {
  const router = useRouter();

  const form = useForm<HydraulicFormData>({
    resolver: zodResolver(hydraulicSchema),
    defaultValues: {
      id: typeof crypto !== "undefined" ? crypto.randomUUID() : "",
      material: "pvc",
      returnCoefficient: 0,
      population: { initialPopulation: 0, saturationPopulation: 0 },
      perCapita: { initialPerCapita: 0, finalPerCapita: 0 },
      roadCoating: { maximumCoating: 0, minimumCoating: 0 },
      coefficient: { k1Coefficient: 0, k2Coefficient: 0 },
      infiltration: { initialInfiltration: 0, finalInfiltration: 0 },
    },
    mode: "onChange",
  });

  async function onSubmit(values: HydraulicFormData) {
    const res = await fetch("/api/hydraulics", {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      alert("Erro ao salvar hidráulico");
      return;
    }
    const res2 = await fetch(`/api/projects/${projectId}/link-hydraulic`, {
      method: "POST",
      body: JSON.stringify({ hydraulicId: values.id }),
    });
    if (!res2.ok) {
      alert("Erro ao vincular hidráulico ao projeto");
      return;
    }
    router.push("/projects");
  }

  return (
    <div className="p-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Dados Hidráulicos</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              {/* Material */}
              <FormField
                control={form.control}
                name="material"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Material</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o material" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pvc">PVC</SelectItem>
                        <SelectItem value="aluminum">Alumínio</SelectItem>
                        <SelectItem value="ceramic">Cerâmica</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="returnCoefficient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Coeficiente de Retorno</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* População */}
              <div className="col-span-2">
                <Label className="text-sm font-medium">População</Label>
              </div>

              <FormField
                control={form.control}
                name="population.initialPopulation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inicial</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="population.saturationPopulation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Saturação</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Per Capita */}
              <div className="col-span-2">
                <Label className="text-sm font-medium">Per Capita</Label>
              </div>
              <FormField
                control={form.control}
                name="perCapita.initialPerCapita"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inicial</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="perCapita.finalPerCapita"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Final</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Pavimentação */}
              <div className="col-span-2">
                <Label className="text-sm font-medium">
                  Pavimentação (Coating)
                </Label>
              </div>
              <FormField
                control={form.control}
                name="roadCoating.maximumCoating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Máxima</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="roadCoating.minimumCoating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mínima</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Coeficientes */}
              <div className="col-span-2">
                <Label className="text-sm font-medium">Coeficientes</Label>
              </div>
              <FormField
                control={form.control}
                name="coefficient.k1Coefficient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>K1</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coefficient.k2Coefficient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>K2</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Infiltração */}
              <div className="col-span-2">
                <Label className="text-sm font-medium">Infiltração</Label>
              </div>
              <FormField
                control={form.control}
                name="infiltration.initialInfiltration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inicial</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="infiltration.finalInfiltration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Final</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="any"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => history.back()}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
