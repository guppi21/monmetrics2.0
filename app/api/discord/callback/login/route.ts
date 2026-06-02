export async function GET() {
  const clientId = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID;

  const redirectUri = encodeURIComponent(
    "http://localhost:3000/api/discord/callback"
  );

  const url =
    `https://discord.com/oauth2/authorize` +
    `?client_id=${clientId}` +
    `&response_type=code` +
    `&scope=identify%20guilds` +
    `&redirect_uri=${redirectUri}`;

  return Response.redirect(url);
}