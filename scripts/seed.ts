import { randomUUID } from "node:crypto";
import { db } from "@/db";
import { hydraulics, projects } from "@/db/schema";

type Material = "pvc" | "aluminum" | "ceramic";

const materials = ["pvc", "aluminum", "ceramic"] as const;

function rand<T extends readonly unknown[]>(arr: T): T[number] {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const engineers = ["Alice", "Bruno", "Carla", "Diego", "Fernanda"] as const;
const states = ["SP", "RJ", "MG", "BA", "RS"] as const;
const cities = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Salvador",
  "Porto Alegre",
] as const;

async function main() {
  console.log("Limpando tabelas...");
  await db.delete(projects);
  await db.delete(hydraulics);

  const projCount = 30;

  for (let i = 0; i < projCount; i++) {
    const projectId = randomUUID();

    const hasHydraulic = Math.random() < 0.7;
    let hydraulicId: string | null = null;

    if (hasHydraulic) {
      hydraulicId = randomUUID();

      const material: Material = rand(materials);

      await db.insert(hydraulics).values({
        id: hydraulicId,
        population: {
          initialPopulation: randInt(1000, 5000),
          saturationPopulation: randInt(6000, 15000),
        },
        perCapita: {
          initialPerCapita: randInt(100, 200),
          finalPerCapita: randInt(150, 250),
        },
        roadCoating: {
          maximumCoating: Number(Math.random().toFixed(2)),
          minimumCoating: Number((Math.random() * 0.5).toFixed(2)),
        },
        coefficient: {
          k1Coefficient: Number((Math.random() * 3).toFixed(2)),
          k2Coefficient: Number((Math.random() * 3).toFixed(2)),
        },
        material,
        infiltration: {
          initialInfiltration: Number((Math.random() * 0.5).toFixed(2)),
          finalInfiltration: Number((Math.random() * 0.5).toFixed(2)),
        },

        returnCoefficient: (Math.random() * 0.9).toFixed(3),
      });
    }

    await db.insert(projects).values({
      id: projectId,
      name: `Projeto ${i + 1}`,
      businessName: `Empresa ${randInt(1, 20)}`,
      riverBasinName: `Bacia ${randInt(1, 5)}`,
      city: rand(cities),
      state: rand(states),
      engineerName: rand(engineers),
      userId: "00000000-0000-0000-0000-000000000000",
      hydraulicId,
    });
  }

  console.log("Seed concluído com sucesso!");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
