export interface RpcResult {
  status: "ONLINE" | "OFFLINE";
  latency: number;
  blockHeight: number;
  chainId: number;
}

export async function checkRpc(
  url: string
): Promise<RpcResult> {
  const start = performance.now();

  const controller =
    new AbortController();

  const timeout = setTimeout(
    () => controller.abort(),
    5000
  );

  try {
    const blockResponse =
      await fetch(url, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method:
            "eth_blockNumber",
          params: [],
        }),
      });

    if (!blockResponse.ok) {
      throw new Error(
        "Block request failed"
      );
    }

    const blockData =
      await blockResponse.json();

    const chainResponse =
      await fetch(url, {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 2,
          method:
            "eth_chainId",
          params: [],
        }),
      });

    if (!chainResponse.ok) {
      throw new Error(
        "Chain request failed"
      );
    }

    const chainData =
      await chainResponse.json();

    clearTimeout(timeout);

    const latency =
      Math.round(
        performance.now() - start
      );

    return {
      status: "ONLINE",
      latency,
      blockHeight: parseInt(
        blockData.result,
        16
      ),
      chainId: parseInt(
        chainData.result,
        16
      ),
    };
  } catch (error) {
    clearTimeout(timeout);

    console.error(
      "RPC FAILED:",
      url,
      error
    );

    return {
      status: "OFFLINE",
      latency: 9999,
      blockHeight: 0,
      chainId: 0,
    };
  }
}