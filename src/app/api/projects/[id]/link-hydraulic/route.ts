import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { hydraulicId } = await req.json();
  if (!hydraulicId)
    return NextResponse.json(
      { error: "hydraulicId é obrigatório" },
      { status: 400 },
    );
  await db
    .update(projects)
    .set({ hydraulicId })
    .where(eq(projects.id, params.id));
  return NextResponse.json({ ok: true });
}
