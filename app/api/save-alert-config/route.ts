import { setAlertConfig } from "@/lib/alert-config";

export async function POST(req: Request) {
  const body = await req.json();

  setAlertConfig(body);

  return Response.json({
    success: true,
    message: "Alert config saved",
  });
}