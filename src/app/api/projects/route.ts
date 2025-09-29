import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { projectSchema } from "@/lib/validators";
import { db } from "../../../db";
import { projects } from "../../../db/schema";

export async function GET() {
  const rows = await db.query.projects.findMany();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = projectSchema.safeParse(data);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  await db.insert(projects).values(parsed.data);
  return NextResponse.json({ ok: true });
}
