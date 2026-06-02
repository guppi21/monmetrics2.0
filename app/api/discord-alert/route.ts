export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: message,
      }),
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false });
  }
}