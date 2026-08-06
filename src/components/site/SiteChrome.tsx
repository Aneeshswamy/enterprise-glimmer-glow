import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Market Research", to: "/market-research" },
      { label: "Business Strategy", to: "/business-strategy" },
      { label: "Strategy Execution", to: "/strategy-execution" },
    ],
  },
  {
    label: "Case Studies",
    to: "/case-studies",
    children: [
      { label: "Quantitative Research", to: "/quantitative-research" },
      { label: "Qualitative Research", to: "/qualitative-research" },
      { label: "Brand Strategy", to: "/brand-strategy" },
      { label: "GTM Plan", to: "/gtm-plan" },
      { label: "Financial Analysis", to: "/financial-analysis" },
    ],
  },
  { label: "Connect with us", to: "/connect-with-us" },
];

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setDark((d) => !d)}
      className="rounded-full border border-hairline p-2 text-ink-foreground/70 transition-colors hover:border-gold hover:text-gold"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center leading-none">
      <img
        src={logoImage}
        alt="Instrex — Insights I Strategy I Execution"
        width={1568}
        height={654}
        className="h-10 w-auto brightness-0 invert md:h-11 dark:brightness-100 dark:invert-0"
      />
    </Link>
  );
}

export function SiteHeader() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3 shadow-[var(--shadow-lift)]" : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                to={item.to}
                className="flex items-center gap-1.5 font-sans text-[0.8rem] tracking-[0.1em] text-ink-foreground/75 uppercase transition-colors hover:text-gold [&.active]:text-gold"
              >
                {item.label}
                {item.children ? <ChevronDown className="h-3 w-3" /> : null}
              </Link>
              <AnimatePresence>
                {item.children && open === item.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-dark absolute top-full left-1/2 mt-4 w-60 -translate-x-1/2 rounded-md p-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded px-4 py-2.5 font-sans text-[0.8rem] text-ink-foreground/75 transition-colors hover:bg-gold/10 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobile((m) => !m)}
            className="rounded-full border border-hairline p-2 text-ink-foreground/70 lg:hidden"
          >
            {mobile ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark mt-3 overflow-hidden lg:hidden"
          >
            <div className="space-y-1 px-8 py-6">
              {NAV.map((item) => (
                <div key={item.label} className="py-1.5">
                  <Link
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className="font-sans text-sm tracking-[0.1em] text-ink-foreground/85 uppercase"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-2 space-y-2 border-l border-hairline pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobile(false)}
                          className="block font-sans text-[0.8rem] text-ink-foreground/60"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-16 text-ink-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.16em]">
            INSTR<span className="text-gold">E</span>X
          </p>
          <span className="gold-rule mt-5" />
        </div>
        <div className="space-y-2 font-sans text-sm text-ink-foreground/70">
          <p>
            <a href="mailto:business@instrex.in" className="transition-colors hover:text-gold">
              business@instrex.in
            </a>
          </p>
          <p>
            <a href="tel:+917011845620" className="transition-colors hover:text-gold">
              +91 7011845620
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="font-sans text-[0.7rem] tracking-[0.16em] text-ink-foreground/60 uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
