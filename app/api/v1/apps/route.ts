import { NextResponse } from "next/server";
import { apps } from "@/data/app";

export async function GET() {
  const formattedApps = apps.map((app) => {
    return {
      id: app.id,
      path: app.path,
    };
  });
  return NextResponse.json(formattedApps);
}
