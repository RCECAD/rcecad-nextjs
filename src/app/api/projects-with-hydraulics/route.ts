import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  const rows = await db.query.projects.findMany({
    with: {
      hydraulic: true,
    },
  });
  return NextResponse.json(rows);
}
