import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { projectSchema } from "@/lib/validators";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const row = await db.query.projects.findFirst({
    where: eq(projects.id, params.id),
  });
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const data = await req.json();
  const parsed = projectSchema.partial().safeParse({ ...data, id: params.id });
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  await db.update(projects).set(parsed.data).where(eq(projects.id, params.id));
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  await db.delete(projects).where(eq(projects.id, params.id));
  return NextResponse.json({ ok: true });
}
