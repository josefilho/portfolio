import React from "react";
import logo from "../../assets/logo.svg";

// Reusable Component for Glassmorphism Cards
const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 shadow-xl ${className}`}
  >
    {children}
  </div>
);

// Component for Tech Badges
const TechBadge: React.FC<{ text: string }> = ({ text }) => (
  <span className="px-3 py-1 rounded text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 mr-2 mb-2 inline-block hover:bg-purple-500/20 transition-colors cursor-default">
    {text}
  </span>
);

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,#0f172a,#020617,#000000)] from-slate-900 via-slate-950 to-black text-slate-300 font-sans selection:bg-purple-500/30">
      {/* NAVBAR GLASSMORPHISM */}
      <nav className="fixed top-0 w-full z-50 h-16 flex justify-between items-center bg-slate-950/70 backdrop-blur-lg border-b border-white/5 px-8">
        <img src={logo} alt="Gregório" className="h-8" />
        <div className="hidden md:flex gap-8">
          {["Work", "Research", "About"].map((item) => (
            <a
              key={item}
              className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors uppercase tracking-wider"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main className="pt-24 px-6 md:px-20 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start text-left md:w-3/5">
            <div className="inline-block mb-4 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
              Available for projects
            </div>

            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Building Intelligent <br /> Defense Systems.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              I am{" "}
              <strong className="text-slate-200">José C. S. Gregório</strong>.
              Computer Science Student and AI Engineering Enthusiast. Focused on
              AI-driven Cybersecurity and Network Surveillance.
            </p>

            <div className="flex gap-6 items-center">
              {/* RGB ROTATING BUTTON (N.E.M.E.S.I.S) */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-8 py-4 bg-slate-950 rounded-lg leading-none flex items-center divide-x divide-slate-600">
                  <span className="flex items-center space-x-5">
                    <span className="pr-6 text-slate-100 font-bold font-mono tracking-widest group-hover:text-purple-400 transition-colors">
                      N.E.M.E.S.I.S
                    </span>
                  </span>
                  <span className="pl-6 text-emerald-400 group-hover:text-emerald-300 transition duration-200">
                    View Project &rarr;
                  </span>
                </button>
              </div>

              <button className="px-6 py-4 text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-purple-500">
                Contact Me
              </button>
            </div>
          </div>

          {/* STACKS SECTION */}
          <div className="md:w-2/5 w-full">
            <GlassCard>
              <h2 className="text-xl font-bold text-slate-200 mb-6 border-b border-slate-700/50 pb-2">
                Tech Arsenal
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs uppercase text-slate-500 font-bold mb-2 tracking-widest">
                    Core
                  </h3>
                  <div className="flex flex-wrap">
                    {["Python", "TypeScript", "C/C++"].map((t) => (
                      <TechBadge key={t} text={t} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase text-slate-500 font-bold mb-2 tracking-widest">
                    AI & Data
                  </h3>
                  <div className="flex flex-wrap">
                    {[
                      "Scikit-learn",
                      "Pandas",
                      "Dask",
                      "Genetic Algorithms",
                      "Neural Networks",
                    ].map((t) => (
                      <TechBadge key={t} text={t} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase text-slate-500 font-bold mb-2 tracking-widest">
                    Sys & Web
                  </h3>
                  <div className="flex flex-wrap">
                    {[
                      "Electron",
                      "React",
                      "Tailwind",
                      "Docker",
                      "Linux (Kali/Gnome)",
                    ].map((t) => (
                      <TechBadge key={t} text={t} />
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section id="work" className="py-20">
          <div className="flex items-end justify-between mb-12">
            <h1 className="text-4xl font-bold text-slate-100">Featured Work</h1>
            <div className="h-1 w-32 bg-purple-600 rounded hidden md:block"></div>
          </div>

          <GlassCard className="group hover:border-purple-500/30 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  N.E.M.E.S.I.S.
                </h3>
                <p className="text-sm font-mono text-slate-500 mb-4">
                  Network Event Monitoring & Evaluation System for Intrusion
                  Surveillance
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  An autonomous Artificial Intelligence agent designed to detect
                  and mitigate network attacks in real-time. Unlike static
                  firewalls, NEMESIS learns anomalous traffic patterns and
                  evolves to identify adversarial attacks from other AIs. Built
                  with a modern Electron GUI and a robust Python backend.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Python",
                    "Machine Learning",
                    "Electron",
                    "React",
                    "Tailwind",
                    "Network Analysis",
                  ].map((t) => (
                    <TechBadge key={t} text={t} />
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-bold transition-colors"
                >
                  Read Case Study{" "}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Project Visual Placeholder */}
              <div className="md:w-1/3 bg-slate-950/50 rounded-lg border border-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10"></div>
                <span className="font-mono text-slate-600">
                  [Interactive GUI Preview]
                </span>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* ACADEMIC & RESEARCH */}
        <section id="research" className="py-20">
          <h1 className="text-4xl font-bold text-slate-100 mb-12">
            Academic Research & Algorithms
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GRAPH THEORY */}
            <GlassCard>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="bg-purple-500/10 p-2 rounded mr-3">🔗</span>{" "}
                Graph Theory
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                Advanced concepts applied to network topology analysis and
                optimization.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm list-disc pl-5 marker:text-purple-500">
                <li>
                  <strong className="text-slate-200">
                    Shortest Path Algorithms:
                  </strong>{" "}
                  Dijkstra and Bellman-Ford applied to routing.
                </li>
                <li>
                  <strong className="text-slate-200">Spanning Trees:</strong>{" "}
                  Kruskal and Prim for infrastructure optimization.
                </li>
                <li>
                  <strong className="text-slate-200">Graph Coloring:</strong>{" "}
                  Register allocation and scheduling.
                </li>
                <li>
                  <strong className="text-slate-200">Network Flow:</strong>{" "}
                  Ford-Fulkerson for bottleneck analysis.
                </li>
              </ul>
            </GlassCard>

            {/* AI ALGORITHMS & TSP */}
            <GlassCard>
              <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center">
                <span className="bg-emerald-500/10 p-2 rounded mr-3">🧬</span>{" "}
                AI Algorithms
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                Heuristic solutions for NP-Hard problems like the{" "}
                <strong>Traveling Salesperson Problem (TSP)</strong>.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-950/30 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">
                    Genetic Algorithms
                  </h4>
                  <p className="text-xs text-slate-400">
                    Multithreaded implementation with selection, crossover, and
                    adaptive mutation. Generates animated visualizations of
                    fitness evolution.
                  </p>
                </div>
                <div className="bg-slate-950/30 p-4 rounded-lg border border-slate-800">
                  <h4 className="font-bold text-emerald-300 text-sm mb-1">
                    Simulated Annealing
                  </h4>
                  <p className="text-xs text-slate-400">
                    Stochastic optimization based on thermodynamics to escape
                    local optima by dynamically adjusting system temperature.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* DATA SCIENCE */}
            <GlassCard className="md:col-span-2">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                Data Science & Big Data
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-slate-200 mb-2">
                    High-Dim Analysis
                  </h3>
                  <p className="text-sm text-slate-400">
                    Correlation strategies on massive Dataframes (+85 columns)
                    using <strong>Pandas</strong> and dimensionality reduction
                    techniques.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2">
                    Big Data Processing
                  </h3>
                  <p className="text-sm text-slate-400">
                    Parallel processing and lazy evaluation with{" "}
                    <strong>Dask</strong> for datasets exceeding RAM.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2">
                    Model Persistence
                  </h3>
                  <p className="text-sm text-slate-400">
                    Training pipelines and serialization of complex models with{" "}
                    <strong>Scikit-learn</strong>.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur py-8 text-center mt-12">
        <p className="font-mono text-xs text-slate-600">
          © 2026 José C. S. Gregório. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Designed & Built with <span className="text-purple-500">React</span>,{" "}
          <span className="text-cyan-400">Tailwind</span> & Coffee.
        </p>
      </footer>
    </div>
  );
};

export { Main };
