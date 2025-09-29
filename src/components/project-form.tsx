"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
import { projectSchema } from "@/lib/validators";

type ProjectFormData = z.infer<typeof projectSchema>;

const makeDefaults = (): ProjectFormData => ({
  id: typeof crypto !== "undefined" ? crypto.randomUUID() : "",
  name: "",
  businessName: "",
  riverBasinName: "",
  city: "",
  state: "",
  engineerName: "",
  userId: "00000000-0000-0000-0000-000000000000",
  hydraulicId: null,
});

export default function ProjectForm({
  mode,
  projectId,
}: {
  mode: "create" | "edit";
  projectId?: string;
}) {
  const router = useRouter();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: makeDefaults(),
    mode: "onChange",
  });

  useEffect(() => {
    if (mode === "edit" && projectId) {
      (async () => {
        const res = await fetch(`/api/projects/${projectId}`, {
          cache: "no-store",
        });
        if (!res.ok) return;
        const row = (await res.json()) as Partial<ProjectFormData>;
        form.reset({ ...makeDefaults(), ...row });
      })();
    }
  }, [mode, projectId]);

  async function onSubmit(values: ProjectFormData) {
    const body = JSON.stringify(values);

    if (mode === "create") {
      const r = await fetch("/api/projects", { method: "POST", body });
      if (!r.ok) return alert("Erro ao criar projeto");
    } else {
      const r = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        body,
      });
      if (!r.ok) return alert("Erro ao atualizar projeto");
    }

    router.push("/projects");
  }

  return (
    <div className="p-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>
            {mode === "create" ? "Novo Projeto" : "Editar Projeto"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="riverBasinName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bacia</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UF</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        maxLength={2}
                        onChange={(e) =>
                          field.onChange(e.target.value.toUpperCase())
                        }
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="engineerName"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Engenheiro</FormLabel>
                    <FormControl>
                      <Input {...field} required />
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
