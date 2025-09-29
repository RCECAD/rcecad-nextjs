import { type NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { hydraulics } from "@/db/schema";
import { hydraulicSchema } from "@/lib/validators";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const parsed = hydraulicSchema.safeParse(data);
  if (!parsed.success)
    return NextResponse.json({ error: parsed.error.format() }, { status: 400 });
  await db.insert(hydraulics).values({
    ...parsed.data,
    returnCoefficient: String(parsed.data.returnCoefficient),
  });
  return NextResponse.json({ ok: true });
}
