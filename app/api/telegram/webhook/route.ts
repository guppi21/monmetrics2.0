import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const chatId = body.message?.chat?.id;
  const text = body.message?.text;

  if (text === "/start") {
    console.log("Telegram Connected Chat ID:", chatId);

    // store temporarily (you can move to DB later)
  }

  return NextResponse.json({ ok: true });
}