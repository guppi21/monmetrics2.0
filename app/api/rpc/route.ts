import { NextRequest, NextResponse } from "next/server";
import { checkRpc } from "@/lib/rpc";

export async function GET(
  request: NextRequest
) {
  const url =
    request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({
      error: "Missing URL",
    });
  }

  const metrics = await checkRpc(url);

  return NextResponse.json(metrics);
}
