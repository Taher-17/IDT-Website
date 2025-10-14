import { NextResponse } from "next/server";
import { apps } from "@/data/app";

// GET request handler
export async function GET() {
  const paths = apps.map((app) => app.path);
  return NextResponse.json(paths);
}
