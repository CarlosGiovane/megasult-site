import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Building2, Users, CalendarClock } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { divisions } from "@/lib/divisions";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Megasult — Escolha a divisão para o seu negócio" },
      {
        name: "description",
        content:
          "Contabilidade, Consultoria, Sistemas e Marcas & Patentes. Escolha a divisão Megasult que atende sua empresa e veja soluções sob medida.",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO — divisions chooser */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary-glow/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Escolha por onde a Megasult vai apoiar seu negócio
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Qual divisão você quer
              <span className="text-gradient-accent"> acessar hoje</span>?
            </h1>
            <p className="mt-5 text-lg text-white/75">
              Selecione uma das quatro divisões Megasult e veja soluções, serviços e o contato do
              time responsável por ela.
            </p>
          </div>

          {/* DIVISION CARDS */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d, i) => {
              const Icon = d.icon;
              const isAccent = i % 2 === 1;
              return (
                <Link
                  key={d.slug}
                  to={d.path}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-7 text-left backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-white/15"
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isAccent
                        ? "bg-gradient-accent text-accent-foreground"
                        : "bg-white text-primary"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-white">{d.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75">{d.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Acessar divisão
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-white/60">
            Não sabe por onde começar?{" "}
            <a href="#sobre" className="font-semibold text-accent hover:underline">
              Conheça a Megasult
            </a>
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-4 sm:grid-cols-4 sm:divide-x sm:px-6 lg:px-8">
          {[
            { k: "1996", v: "Fundação" },
            { k: "+5.000", v: "Usuários ativos" },
            { k: "06", v: "Escritórios" },
            { k: "+25", v: "Prêmios recebidos" },
          ].map((s) => (
            <div key={s.v} className="px-4 py-8 text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
              Institucional
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Quase 3 décadas otimizando negócios pelo Brasil.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Nascemos em 1996 com a missão de aumentar a competitividade dos nossos clientes. Hoje
              somos referência em contabilidade especializada, consultoria empresarial, sistemas de
              gestão e proteção de marcas.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard icon={<CalendarClock className="h-7 w-7 text-accent" />} value="28+" label="anos de mercado" tone="primary" />
            <StatCard icon={<Users className="h-7 w-7 text-primary" />} value="5K+" label="usuários ativos" tone="card" />
            <StatCard icon={<Building2 className="h-7 w-7 text-primary" />} value="06" label="escritórios" tone="card" />
            <StatCard icon={<Sparkles className="h-7 w-7" />} value="98%" label="satisfação de clientes" tone="accent" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
  tone,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  tone: "primary" | "accent" | "card";
}) {
  const cls =
    tone === "primary"
      ? "bg-gradient-primary text-primary-foreground"
      : tone === "accent"
        ? "bg-gradient-accent text-accent-foreground"
        : "bg-card text-foreground";
  return (
    <div className={`rounded-3xl p-7 shadow-elegant ${cls}`}>
      {icon}
      <div className="mt-5 font-display text-4xl font-bold">{value}</div>
      <div className="mt-1 text-sm opacity-80">{label}</div>
    </div>
  );
}
