<>
  <Navbar />

  <div className="mb-10">

    <h1 className="text-5xl font-black">
      Infrastructure Overview
    </h1>

    <p className="mt-3 text-slate-400">
      RPC Analytics on Monad
    </p>

  </div>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-8">

    <StatsCard title="Providers" value="12" />
    <StatsCard title="Online" value="11" />
    <StatsCard title="Avg Latency" value="82ms" />
    <StatsCard title="Incidents" value="1" />

  </div>

  <div className="grid gap-6 lg:grid-cols-2">

    <RpcStatus />

    <ActivityFeed />

  </div>

  <div className="mt-6">

    <Incidents />

  </div>
</>
