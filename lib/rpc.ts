export async function checkRpc(url: string) {
  const start = performance.now();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "eth_blockNumber",
        params: [],
      }),
    });

    const data = await response.json();

    const latency = Math.round(
      performance.now() - start
    );

    const blockHeight = parseInt(
      data.result,
      16
    );

    return {
      status: "ONLINE",
      latency,
      blockHeight,
      chainId: 10143,
    };
  } catch {
    return {
      status: "OFFLINE",
      latency: 0,
      blockHeight: 0,
      chainId: 0,
    };
  }
}
