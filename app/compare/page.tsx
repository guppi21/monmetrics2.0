import LatencyChart from "@/components/charts/latency-chart";

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">

      <h1 className="mb-8 text-5xl font-black">
        Compare RPCs
      </h1>

      <div className="mb-8">
        <LatencyChart />
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

        <table className="w-full">

          <thead>
            <tr>
              <th className="text-left">
                Provider
              </th>

              <th>Latency</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Official</td>
              <td>82ms</td>
              <td>ONLINE</td>
            </tr>

            <tr>
              <td>Ankr</td>
              <td>95ms</td>
              <td>ONLINE</td>
            </tr>

            <tr>
              <td>dRPC</td>
              <td>104ms</td>
              <td>ONLINE</td>
            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}
