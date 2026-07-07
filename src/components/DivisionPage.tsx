import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone, Mail } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { divisions, type Division, type ServiceItem } from "@/lib/divisions";

export function DivisionPage({ division }: { division: Division }) {
  const others = divisions.filter((d) => d.slug !== division.slug);
  const Icon = division.icon;
  const heroBg =
    division.accent === "accent"
      ? "bg-gradient-accent text-accent-foreground"
      : "bg-hero text-primary-foreground";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className={`relative overflow-hidden ${heroBg}`}>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100">
            <ArrowLeft className="h-4 w-4" /> Escolher outra divisão
          </Link>
          <div className="mt-8 flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest opacity-80">Divisão Megasult</div>
              <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {division.title}
              </h1>
              <p className="mt-3 max-w-2xl text-lg opacity-90">{division.tagline}</p>
            </div>
          </div>
          <div className="mt-10 max-w-3xl text-base opacity-90 sm:text-lg">{division.intro}</div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              {division.cta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {division.highlights.map((h) => (
            <div key={h.title} className="rounded-3xl border border-border bg-card p-7 shadow-elegant">
              <div className="font-display text-lg font-bold text-foreground">{h.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      {(division.services || division.serviceGroups) && (
        <section id="servicos" className="bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
              O que fazemos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Serviços da divisão {division.title}
            </h2>

            {division.services && (
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {division.services.map((s) => (
                  <ServiceCard key={s.title} item={s} />
                ))}
              </div>
            )}

            {division.serviceGroups && (
              <div className="mt-12 space-y-14">
                {division.serviceGroups.map((g) => (
                  <div key={g.title}>
                    <h3 className="font-display text-2xl font-bold text-foreground">{g.title}</h3>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      {g.items.map((s) => (
                        <ServiceCard key={s.title} item={s} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SEGMENTS (Sistemas) */}
      {division.segments && (
        <section id="segmentos" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
            Segmentos atendidos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Soluções especializadas por segmento
          </h2>
          <div className="mt-12 space-y-16">
            {division.segments.map((group) => (
              <div key={group.label}>
                <h3 className="font-display text-2xl font-bold text-foreground">{group.label}</h3>
                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((seg) => (
                    <div key={seg.title} className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
                      <div className="font-display text-lg font-bold text-foreground">{seg.title}</div>
                      {seg.intro && (
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{seg.intro}</p>
                      )}
                      <ul className="mt-4 space-y-2">
                        {seg.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-foreground/90">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero p-10 text-primary-foreground shadow-glow sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Vamos conversar sobre {division.title.toLowerCase()}?
              </h2>
              <p className="mt-4 max-w-lg text-white/75">
                Um consultor da divisão {division.title} entra em contato para entender seu cenário e propor o próximo passo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+554699999999"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" /> Ligar agora
                </a>
                <a
                  href="mailto:contato@megasult.com.br"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" /> contato@megasult.com.br
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Outras divisões
              </div>
              <div className="mt-4 grid gap-3">
                {others.map((o) => {
                  const OIcon = o.icon;
                  return (
                    <Link
                      key={o.slug}
                      to={o.path}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                    >
                      <span className="flex items-center gap-3">
                        <OIcon className="h-5 w-5 text-accent" />
                        <span className="text-sm font-semibold">{o.title}</span>
                      </span>
                      <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-elegant transition-transform hover:-translate-y-0.5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground">
          <Check className="h-4 w-4" />
        </div>
        <div>
          <div className="font-display text-base font-bold text-foreground">{item.title}</div>
          {item.desc && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          )}
        </div>
      </div>
    </div>
  );
}
