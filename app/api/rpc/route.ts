import { NextResponse } from "next/server";

import { checkRpc } from "@/lib/rpc";

export async function GET() {
  const metrics = await checkRpc(
    "https://testnet-rpc.monad.xyz"
  );

  return NextResponse.json(metrics);
}
