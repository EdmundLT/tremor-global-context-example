import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const response = {
      annualTarget: 50000,
    };
    return NextResponse.json(response);
  }
  