import { setAlertConfig } from "@/lib/alert-store";

export async function POST(req: Request) {
  const body = await req.json();

  setAlertConfig(body);

  console.log("CONNECTED CONFIG:", body);

  return Response.json({
    success: true,
    message: "Connected",
  });
}