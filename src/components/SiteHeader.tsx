import { Link } from "@tanstack/react-router";
import { Menu, ArrowRight, Facebook, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { divisions } from "@/lib/divisions";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/megasult.franciscobeltrao/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/megasult.franciscobeltrao/", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/megasult-megasult/", icon: Linkedin },
  { label: "WhatsApp", href: "https://wa.me/554632112800", icon: MessageCircle },
] as const;

export function Logo() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo-megasult.png`}
      alt="Megasult"
      className="h-9 w-auto"
    />
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {divisions.map((d) => (
            <Link
              key={d.slug}
              to={d.path}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {d.title}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Escolher divisão
            <ArrowRight className="h-4 w-4" />
          </Link>
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
            {divisions.map((d) => (
              <Link
                key={d.slug}
                to={d.path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {d.title}
              </Link>
            ))}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Escolher divisão
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

type Office = {
  city: string;
  state: string;
  address: string[];
  email: string;
  phone: string;
  whatsapp: string;
  note?: string;
};

const offices: Office[] = [
  {
    city: "Francisco Beltrão",
    state: "PR",
    address: ["Rua Octaviano T. dos Santos, 1373", "Edif. Vienna - Centro", "CEP 85601-030"],
    email: "contato@megasult.com.br",
    phone: "(46) 3211-2800",
    whatsapp: "554632112800",
  },
  {
    city: "Maringá",
    state: "PR",
    address: ["Av. Humaitá, 542 - SL 21", "Edif. Itaipoá - Zona 04", "CEP 87014-200"],
    email: "contato201@megasult.com.br",
    phone: "(44) 3225-0869",
    whatsapp: "554432250869",
    note: "Contabilidade e Consultoria",
  },
  {
    city: "Maringá",
    state: "PR",
    address: ["Av. João P. Vieira Filho, 672", "SL 508 - Edif. New Center", "Zona 01 - CEP 87020-015"],
    email: "comercial.201@megasult.com.br",
    phone: "(44) 3225-0311",
    whatsapp: "554432250311",
    note: "Sistemas",
  },
  {
    city: "Curitiba",
    state: "PR",
    address: ["Av. Sete de Setembro, 4476", "SL 504 - Batel", "Edif. Business Tower - CEP 80250-085"],
    email: "comercial.301@megasult.com.br",
    phone: "(41) 3018-5808",
    whatsapp: "554130185808",
  },
  {
    city: "Londrina",
    state: "PR",
    address: ["Rua João Pessoa, 90", "SL 06 - Jardim Agari", "CEP 86020-220"],
    email: "comercial.401@megasult.com.br",
    phone: "(43) 3027-1918",
    whatsapp: "554330271918",
  },
  {
    city: "Marmeleiro",
    state: "PR",
    address: ["Rua Telmo Octavio Muller, 293", "Centro", "CEP 85615-000"],
    email: "contato@megasut.com.br",
    phone: "(46) 3525-1211",
    whatsapp: "554635251211",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
              Contabilidade, Consultoria, Sistemas e Marcas & Patentes para impulsionar o seu negócio.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divisions */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Divisões</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {divisions.map((d) => (
                <Link key={d.slug} to={d.path} className="hover:text-primary transition-colors">
                  {d.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Unidades</div>
            <div className="mt-4 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {offices.map((o) => (
                <div key={`${o.city}-${o.note || "main"}`} className="text-xs">
                  <div className="font-semibold text-foreground">
                    {o.city} – {o.state}
                    {o.note && <span className="ml-1 font-normal text-muted-foreground">({o.note})</span>}
                  </div>
                  <div className="mt-0.5 space-y-0 leading-tight text-muted-foreground">
                    {o.address.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-muted-foreground">
                    <a href={`mailto:${o.email}`} className="hover:text-primary transition-colors">
                      {o.email}
                    </a>
                    <a href={`tel:${o.phone.replace(/\D/g, "")}`} className="hover:text-primary transition-colors">
                      {o.phone}
                    </a>
                    <a
                      href={`https://wa.me/${o.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                      aria-label={`WhatsApp ${o.city}`}
                    >
                      <Phone className="h-3 w-3" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Megasult. Todos os direitos reservados.</span>
          <span>Francisco Beltrão · PR</span>
        </div>
      </div>
    </footer>
  );
}
