export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  console.log("Discord OAuth Code:", code);

  return Response.redirect("http://localhost:3000/alerts?discord=connected");
}