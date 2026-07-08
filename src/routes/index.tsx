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

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary-glow/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Desde 1996 otimizando negócios pelo Brasil
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              A Megasult tem a
              <span className="text-gradient-accent"> divisão certa</span> para o seu negócio
            </h1>
            <p className="mt-5 text-lg text-white/75">
              Quatro áreas de atuação com times especializados: contabilidade, consultoria,
              sistemas e marcas & patentes. Escolha a que faz sentido para sua empresa.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#divisoes"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
              >
                Conhecer as divisões
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
              >
                Sobre a Megasult
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISION CARDS — logo no início */}
      <section id="divisoes" className="relative bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nossas Divisões
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Especialistas em áreas distintas, unidos pelo mesmo propósito
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Cada divisão atua com autonomia e expertise, oferecendo soluções completas para cada
              necessidade do seu negócio.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d, i) => {
              const Icon = d.icon;
              const isAccent = i % 2 === 1;
              return (
                <div
                  key={d.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 text-left shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
                >
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isAccent
                        ? "bg-gradient-accent text-accent-foreground"
                        : "bg-gradient-primary text-primary-foreground"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">{d.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.short}</p>
                  <div className="mt-6 flex flex-col gap-2">
                    <Link
                      to={d.path}
                      hash="servicos"
                      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                        isAccent
                          ? "bg-gradient-accent text-accent-foreground shadow-accent"
                          : "bg-gradient-primary text-primary-foreground shadow-glow"
                      }`}
                    >
                      Ver serviços
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to={d.path}
                      hash="contato"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-muted/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      Falar com a divisão
                    </Link>
                  </div>
                  <Link
                    to={d.path}
                    className="absolute inset-0 z-0"
                    aria-label={`Acessar divisão ${d.title}`}
                  />
                </div>
              );
            })}
          </div>
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
