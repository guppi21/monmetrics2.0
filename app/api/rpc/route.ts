import { NextRequest, NextResponse } from "next/server";
import { checkRpc } from "@/lib/rpc";

export async function GET(
  request: NextRequest
) {
  try {
    const url =
      request.nextUrl.searchParams.get("url");

    if (!url) {
      return NextResponse.json(
        {
          error: "Missing URL",
        },
        {
          status: 400,
        }
      );
    }

    const metrics =
      await checkRpc(url);

    return NextResponse.json(
      metrics
    );
  } catch (error) {
    console.error(
      "RPC CHECK ERROR:",
      error
    );

    return NextResponse.json({
      status: "OFFLINE",
      latency: 9999,
      blockHeight: 0,
      chainId: 0,
    });
  }
}