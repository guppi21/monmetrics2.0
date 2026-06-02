import { rpcs } from "@/data/rpcs";

let lastState: Record<
  string,
  "ONLINE" | "OFFLINE"
> = {};

export async function checkRpcAlerts() {
  const discordWebhook =
    typeof window !== "undefined"
      ? localStorage.getItem(
          "discord_webhook"
        )
      : null;

  const telegramChat =
    typeof window !== "undefined"
      ? localStorage.getItem(
          "telegram_chat"
        )
      : null;

  for (const rpc of rpcs) {
    try {
      const response =
        await fetch(
          "/api/rpc?url=" +
            encodeURIComponent(
              rpc.url
            )
        );

      const result =
        await response.json();

      const currentState =
        result.status as
          | "ONLINE"
          | "OFFLINE";

      const previousState =
        lastState[rpc.url];

      if (!previousState) {
        lastState[rpc.url] =
          currentState;
        continue;
      }

      if (
        previousState ===
          "ONLINE" &&
        currentState ===
          "OFFLINE"
      ) {
        await sendAlert(
          discordWebhook,
          telegramChat,
          `🚨 RPC DOWN\n\nProvider: ${rpc.provider}\nName: ${rpc.name}`
        );
      }

      if (
        previousState ===
          "OFFLINE" &&
        currentState ===
          "ONLINE"
      ) {
        await sendAlert(
          discordWebhook,
          telegramChat,
          `✅ RPC RECOVERED\n\nProvider: ${rpc.provider}\nLatency: ${result.latency}ms`
        );
      }

      lastState[rpc.url] =
        currentState;
    } catch {
      console.warn(
        "Alert monitor failed:",
        rpc.name
      );
    }
  }
}

async function sendAlert(
  discordWebhook: string | null,
  telegramChat: string | null,
  message: string
) {
  try {
    if (discordWebhook) {
      await fetch(
        discordWebhook,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            content: message,
          }),
        }
      );
    }

    if (telegramChat) {
      console.log(
        "[Telegram]",
        message
      );
    }
  } catch (error) {
    console.error(
      "Alert send failed:",
      error
    );
  }
}