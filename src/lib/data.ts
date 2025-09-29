import { db } from "@/db";

export async function fetchProjectsWithHydraulics() {
  const rows = await db.query.projects.findMany({
    with: { hydraulic: true },
  });
  return rows;
}
