import { NextResponse } from "next/server";
import data from "../../../../data.json";

export async function GET() {
  return NextResponse.json({
    data: data,
  });
}

export async function POST(request: Request) {
  const transaction = await request.json();
  data.push(transaction);
  return NextResponse.json(transaction);
}
