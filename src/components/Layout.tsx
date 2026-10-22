import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "خانه" },
  { to: "/destinations", label: "مقصدها" },
  { to: "/search", label: "قطار و پرواز" },
  { to: "/hotels", label: "هتل‌ها" },
  { to: "/booking", label: "درخواست رزرو" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact", label: "تماس" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-card/90 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-black text-primary">
            {site.name} <span className="text-xs font-medium text-muted-foreground">{site.latinName}</span>
          </Link>
          <nav className="hidden lg:flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary font-bold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden text-primary text-2xl" aria-label="منو" onClick={() => setOpen(!open)}>☰</button>
        </div>
        {open && (
          <nav className="lg:hidden border-t px-4 py-3 flex flex-col gap-3 bg-card">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <div className="text-2xl font-black mb-2">{site.name}</div>
            <p className="opacity-80">{site.tagline}</p>
          </div>
          <div className="space-y-1 opacity-90">
            <div>تلفن: {site.contact.phone}</div>
            <div>ایمیل: {site.contact.email}</div>
            <div>{site.contact.address}</div>
          </div>
          <div className="flex flex-col gap-1 opacity-90">
            {nav.slice(1).map((n) => <Link key={n.to} to={n.to} className="hover:underline">{n.label}</Link>)}
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl md:text-4xl font-black">{title}</h1>
        {subtitle && <p className="mt-3 opacity-80">{subtitle}</p>}
      </div>
    </section>
  );
}
