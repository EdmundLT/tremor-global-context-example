import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const symbol = request.nextUrl.searchParams.get("symbol");

  const response = {
    symbol: symbol,
    data: [
      {
        month: "Jan 21",
        Performance: 4000,
      },
      {
        month: "Feb 21",
        Performance: 3000,
      },
      {
        month: "Mar 21",
        Performance: 2000,
      },
      {
        month: "Apr 21",
        Performance: 2780,
      },
      {
        month: "May 21",
        Performance: 1890,
      },
      {
        month: "Jun 21",
        Performance: 2390,
      },
      {
        month: "Jul 21",
        Performance: 3490,
      },
    ],
  };
  return NextResponse.json(response);
}
