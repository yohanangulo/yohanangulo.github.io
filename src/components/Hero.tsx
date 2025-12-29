import { messages } from '../../data'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 border-b border-white/5 bg-[#0b1117]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-left gap-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase shadow-[0_0_10px_rgba(43,140,238,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {messages.hero_available_for_new_roles}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-indigo-400">
                {messages.hero_mobile_excellence}
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">{messages.hero_translate_requirements}</p>
            <div className="w-full py-6 border-y border-white/5">
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-white tracking-tight leading-none">
                    {messages.hero_years_experience_num}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{messages.hero_years_exp}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-white tracking-tight leading-none">
                    {messages.hero_active_users_count}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {messages.hero_active_users}
                  </span>
                </div>
                <div className="flex flex-col gap-2 pl-6 border-l border-white/10">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                    {messages.hero_key_strengths}
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      {messages.hero_architecture}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      {messages.hero_performance}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      {messages.hero_uiux}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-2">
              <button className="flex-1 sm:flex-none h-12 px-8 bg-white text-background-dark hover:bg-slate-200 text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                {messages.hero_view_mob_projects}
                <span className="material-icons text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex-1 sm:flex-none h-12 px-8 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-bold rounded-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm group">
                {messages.hero_download_cv}
                <span className="material-icons text-[18px] text-slate-400 group-hover:text-white transition-colors">
                  download
                </span>
              </button>
            </div>
          </div>
          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-1000 group select-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-1000"></div>
            <div className="relative w-[320px] h-[640px] transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg]">
              <div className="absolute inset-0 bg-[#0F1620] border border-white/10 rounded-[3rem] p-6 shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-[-140px] group-hover:translate-z-[-60px] group-hover:rotate-y-15 group-hover:scale-90 group-hover:opacity-100 flex flex-col gap-4 phone-frame-1">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-1 bg-white/10 rounded-full"></div>
                </div>
                <div className="flex-1 border-2 border-dashed border-white/10 rounded-2xl p-4 flex flex-col gap-4">
                  <div className="h-16 bg-white/5 rounded-xl"></div>
                  <div className="flex-1 border border-white/5 rounded-xl p-3 grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-lg"></div>
                    <div className="bg-white/5 rounded-lg"></div>
                    <div className="bg-white/5 rounded-lg col-span-2 h-20"></div>
                  </div>
                  <div className="h-12 bg-white/5 rounded-xl"></div>
                </div>
                <div className="text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Wireframe // Blueprint
                </div>
              </div>
              <div className="absolute inset-0 bg-[#1e1e1e] border border-white/10 rounded-[3rem] p-5 shadow-2xl transition-all duration-700 ease-out group-hover:translate-x-[-70px] group-hover:translate-z-[-30px] group-hover:rotate-y-[8deg] group-hover:scale-95 group-hover:opacity-100 overflow-hidden phone-frame-2">
                <div className="flex items-center gap-1.5 mb-4 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <div className="font-mono text-[9px] leading-relaxed text-blue-300 opacity-70 group-hover:opacity-100 transition-opacity">
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Dashboard</span>{' '}
                  <span className="text-purple-400">extends</span> <span className="text-yellow-300">ConsumerWidget</span> {'{'}
                  <br />
                  <br />
                  <span className="text-slate-500">{'// Optimized build method'}</span>
                  <br />
                  <span className="text-slate-400">@override</span>
                  <br />
                  <span className="text-yellow-300">Widget</span> <span className="text-blue-300">build</span>(
                  <span className="text-yellow-300">context</span>, <span className="text-yellow-300">ref</span>) {'{'}
                  <br />
                  <span className="text-purple-400">final</span> stream = ref.<span className="text-blue-300">watch</span>
                  (streamProvider);
                  <br />
                  <br />
                  <span className="text-purple-400">return</span> <span className="text-yellow-300">Scaffold</span>(<br />
                    body: <span className="text-yellow-300">CustomScrollView</span>(<br />
                      slivers: [<br />
                        <span className="text-yellow-300">SliverAppBar</span>(<br />
                          floating: <span className="text-orange-400">true</span>,<br />
                          title: <span className="text-yellow-300">Text</span>(
                  <span className="text-green-300">{'Analytics'}</span>
                  ),
                  <br />
                        ),
                  <br />
                        <span className="text-yellow-300">SliverToBoxAdapter</span>(<br />
                          child: <span className="text-blue-300">ChartWidget</span>(stream),
                  <br />
                        ),
                  <br />
                      ],
                  <br />
                    ),
                  <br />
                  );
                  <br />
                    {'}'}
                  <br />
                </div>
                <div className="absolute bottom-6 left-0 w-full text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Logic // Dart
                </div>
              </div>
              <div className="absolute inset-0 bg-background-dark border-8 border-surface-dark rounded-[3rem] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out z-30 overflow-hidden phone-frame-3">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4G-hDqrCpkEVTSMehySAMjLgV0LRjziD4l3fcXBKipkEky_Z2N81XCzXcyDZA-0h5R4wtacEzmQHzLDn0tEu2vFi4yRQo9U76XbRs37HRo4ue4eoRXj31e_e7xnlI4t_6bgDIpZ84iQnrWZtbN5RMJeDuOHecSC_XKLkhNPlV1FJ-HoY8srAbGWAyByv0jr4IwgHDli0SiPVB7sCAoQ7OOAtrAb8ipZ9zqcIt_LL7eFsh1NIu4-bVbyuuv-uYz-k5z0-hzB6Io1A5')",
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-t from-background-dark/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] p-3 bg-[#0b1117]/80 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                        <span className="material-icons text-lg">verified</span>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                          {messages.hero_deployment}
                        </div>
                        <div className="text-sm text-white font-bold">{messages.hero_production_ready}</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
