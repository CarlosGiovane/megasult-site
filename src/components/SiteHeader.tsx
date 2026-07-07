import { Link } from "@tanstack/react-router";
import { Menu, ArrowRight, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
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
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
      <path d="M6 32 L18 10 L24 22 L28 16 L34 32 Z" fill="var(--primary)" />
      <path d="M20 32 L28 16 L34 32 Z" fill="var(--accent)" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-lg font-bold tracking-tight text-primary">MEGASULT</span>
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

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-display text-lg font-bold text-primary">MEGASULT</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Contabilidade, Consultoria, Sistemas e Marcas & Patentes para impulsionar o seu negócio.
            </p>
          </div>

          <div className="md:justify-self-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Divisões</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {divisions.map((d) => (
                <Link key={d.slug} to={d.path} className="hover:text-primary">
                  {d.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Redes sociais</div>
            <div className="mt-3 flex flex-wrap gap-3">
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
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Megasult. Todos os direitos reservados.</span>
          <span>Francisco Beltrão · PR</span>
        </div>
      </div>
    </footer>
  );
}
