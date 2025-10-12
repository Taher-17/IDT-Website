import { NextResponse } from "next/server";

// Sample data
const apps = [
  { slug: "myapp", name: "My App", description: "App 1" },
  { slug: "anotherapp", name: "Another App", description: "App 2" },
];

// GET request handler
export async function GET() {
  return NextResponse.json(apps);
}

// POST request handler (optional)
export async function POST(req: Request) {
  const data = await req.json();
  // You could save to a DB here
  return NextResponse.json({ message: "Received", data });
}
