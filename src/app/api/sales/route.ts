import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = {
    sales: 500,
  };
  return NextResponse.json(response);
}
