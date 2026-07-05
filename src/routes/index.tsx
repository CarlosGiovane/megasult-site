import { createFileRoute } from "@tanstack/react-router";
import {
  Calculator,
  Lightbulb,
  MonitorCog,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Users,
  CalendarClock,
  Phone,
  Mail,
  MapPin,
  Menu,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Calculator,
    title: "Contabilidade",
    desc: "Contabilidade especializada por atividade, com compromisso de entregar os melhores resultados fiscais e gerenciais.",
    bullets: ["Constituição de empresas", "Fiscal e tributário", "Departamento pessoal"],
  },
  {
    icon: Lightbulb,
    title: "Consultoria",
    desc: "Diagnósticos, planejamento e plano de ação sob medida para que o seu negócio cresça com previsibilidade.",
    bullets: ["Gestão empresarial", "Planejamento tributário", "Governança"],
  },
  {
    icon: MonitorCog,
    title: "Sistemas",
    desc: "Sistemas ERP para tornar sua empresa mais rentável, produtiva e competitiva em cada operação.",
    bullets: ["ERP completo", "Automação fiscal", "Business Intelligence"],
  },
  {
    icon: ShieldCheck,
    title: "Marcas & Patentes",
    desc: "Proteja seu patrimônio intelectual com o registro de marcas e patentes. Não deixe sua ideia desprotegida.",
    bullets: ["Registro de marcas", "Patentes", "Propriedade intelectual"],
  },
];

const stats = [
  { icon: CalendarClock, value: "1996", label: "Desde" },
  { icon: Users, value: "+5.000", label: "Usuários" },
  { icon: Building2, value: "06", label: "Escritórios" },
];

const units = [
  "Francisco Beltrão — PR",
  "Maringá — PR · Contabilidade",
  "Maringá — PR · Sistemas",
  "Curitiba — PR",
  "Londrina — PR",
  "Marmeleiro — PR",
  "São Miguel do Oeste — SC",
];

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Institucional" },
  { href: "#unidades", label: "Unidades" },
  { href: "#contato", label: "Contato" },
];

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-lg font-bold tracking-tight text-primary">
              MEGASULT
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Fale com a gente
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-primary md:hidden"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Fale com a gente
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:pb-32 lg:pt-28">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Soluções que otimizam negócios desde 1996
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Gestão inteligente para
              <span className="text-gradient-accent"> a sua empresa crescer</span>
              .
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Contabilidade, consultoria, sistemas de gestão e registro de marcas — tudo em um só
              lugar, com o time que já cuida de mais de 5.000 usuários pelo Brasil.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#servicos"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
              >
                Conheça as soluções
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Falar com um consultor
              </a>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="relative lg:col-span-5">
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-4 h-52 w-52 rounded-full bg-primary-glow/60 blur-3xl" />
            <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-glow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                  Painel Megasult
                </span>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                  Ao vivo
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <s.icon className="h-5 w-5 text-accent" />
                    <div className="mt-3 font-display text-2xl font-bold">{s.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/60">
                      {s.label}
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl bg-gradient-accent p-4 text-accent-foreground">
                  <div className="text-[11px] font-semibold uppercase tracking-wider opacity-70">
                    Satisfação
                  </div>
                  <div className="mt-3 font-display text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-70">clientes ativos</div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70">
                <span>Próxima obrigação fiscal</span>
                <span className="font-semibold text-accent">em 3 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x px-4 sm:px-6 lg:px-8">
          {[
            { k: "1996", v: "Fundação" },
            { k: "+5.000", v: "Usuários ativos" },
            { k: "06", v: "Escritórios" },
            { k: "+25", v: "Prêmios recebidos" },
          ].map((s) => (
            <div key={s.v} className="px-4 py-8 text-center">
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
              Nossos serviços
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Soluções completas para a gestão da sua empresa.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Quatro frentes que se conectam para simplificar a operação, reduzir riscos e destravar
            crescimento sustentável.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:opacity-100" />
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                  i % 2 === 0
                    ? "bg-gradient-primary text-primary-foreground"
                    : "bg-gradient-accent text-accent-foreground"
                }`}
              >
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-foreground/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-glow"
              >
                Saiba mais
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
              Institucional
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Quase 3 décadas otimizando negócios pelo Brasil.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Nascemos em 1996 com a missão de aumentar a competitividade dos nossos clientes. Hoje
              somos referência em contabilidade especializada, consultoria empresarial, sistemas de
              gestão e proteção de marcas.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Quem somos",
                "Trabalhe conosco",
                "Prêmios",
                "Ações sociais",
                "Canal de ética",
                "Política de privacidade",
              ].map((l) => (
                <a
                  key={l}
                  href="#contato"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40"
                >
                  {l}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant">
                <CalendarClock className="h-8 w-8 text-accent" />
                <div className="mt-6 font-display text-5xl font-bold">28+</div>
                <div className="mt-1 text-sm text-white/70">
                  anos apoiando empresas de diferentes segmentos
                </div>
              </div>
              <div className="rounded-3xl bg-card p-8 shadow-elegant sm:mt-10">
                <Users className="h-8 w-8 text-primary" />
                <div className="mt-6 font-display text-5xl font-bold text-primary">5K+</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  usuários ativos utilizando nossos sistemas
                </div>
              </div>
              <div className="rounded-3xl bg-card p-8 shadow-elegant">
                <Building2 className="h-8 w-8 text-primary" />
                <div className="mt-6 font-display text-5xl font-bold text-primary">06</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  escritórios no Sul do Brasil
                </div>
              </div>
              <div className="rounded-3xl bg-gradient-accent p-8 text-accent-foreground shadow-accent sm:mt-10">
                <ShieldCheck className="h-8 w-8" />
                <div className="mt-6 font-display text-5xl font-bold">100%</div>
                <div className="mt-1 text-sm opacity-80">
                  conformidade fiscal e regulatória garantida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNITS */}
      <section id="unidades" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-glow">
            Nossas unidades
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Perto de você, no Sul do Brasil.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Seis escritórios preparados para atender seu negócio com o mesmo padrão de excelência.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <div
              key={u}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-accent group-hover:text-accent-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-base font-semibold text-foreground">
                  {u.split("—")[0].trim()}
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  {u.split("—").slice(1).join("—").trim()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contato" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero p-10 text-primary-foreground shadow-glow sm:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Vamos otimizar o seu negócio?
              </h2>
              <p className="mt-5 max-w-lg text-white/75">
                Fale com um consultor Megasult e receba um diagnóstico inicial gratuito para sua
                empresa.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+554699999999"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  Ligar agora
                </a>
                <a
                  href="mailto:contato@megasult.com.br"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  contato@megasult.com.br
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: Phone, k: "Comercial", v: "(46) 99999-9999" },
                { icon: Mail, k: "E-mail", v: "contato@megasult.com.br" },
                { icon: MapPin, k: "Matriz", v: "Francisco Beltrão — PR" },
                { icon: CalendarClock, k: "Atendimento", v: "Seg a Sex · 8h–18h" },
              ].map((c) => (
                <div
                  key={c.k}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md"
                >
                  <c.icon className="h-5 w-5 text-accent" />
                  <div className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                    {c.k}
                  </div>
                  <div className="mt-1 text-sm font-semibold">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Logo />
                <span className="font-display text-lg font-bold text-primary">MEGASULT</span>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                Desde 1996 otimizando negócios e aumentando a competitividade dos nossos clientes.
              </p>
            </div>
            <FooterCol
              title="Institucional"
              items={["Quem somos", "Trabalhe conosco", "Prêmios", "Ações sociais", "Canal de ética"]}
            />
            <FooterCol
              title="Áreas de atuação"
              items={["Contabilidade", "Consultoria", "Sistemas", "Marcas e Patentes"]}
            />
            <FooterCol
              title="Contato"
              items={["contato@megasult.com.br", "(46) 99999-9999", "Francisco Beltrão — PR"]}
            />
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Megasult. Todos os direitos reservados.</span>
            <a href="#top" className="hover:text-primary">Política de privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#contato" className="transition-colors hover:text-primary">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M6 32 L18 10 L24 22 L28 16 L34 32 Z" fill="var(--primary)" />
      <path d="M20 32 L28 16 L34 32 Z" fill="var(--accent)" />
    </svg>
  );
}
