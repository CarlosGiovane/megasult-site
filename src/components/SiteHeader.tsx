import { Link } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { divisions } from "@/lib/divisions";

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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-lg font-bold text-primary">MEGASULT</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {divisions.map((d) => (
              <Link key={d.slug} to={d.path} className="hover:text-primary">
                {d.title}
              </Link>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Megasult
          </span>
        </div>
      </div>
    </footer>
  );
}
