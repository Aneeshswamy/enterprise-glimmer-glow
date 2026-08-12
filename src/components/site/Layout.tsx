import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "muted";
  id?: string;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground",
    muted: "bg-muted text-foreground",
  };
  return (
    <section id={id} className={`${tones[tone]} px-6 py-24 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl leading-tight font-normal md:text-5xl ${className}`}>{children}</h2>
  );
}

export function Lede({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`prose-instrex max-w-3xl ${className}`}>{children}</p>;
}

/** Page masthead used on every inner page. */
export function PageHeader({
  kicker,
  title,
  image,
  imageAlt,
}: {
  kicker?: string;
  title: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <motion.img
        src={image}
        alt={imageAlt}
        width={1600}
        height={1024}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="mx-auto flex min-h-[52vh] w-full max-w-6xl flex-col justify-end px-6 pt-40 pb-16">
        <Reveal>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-normal md:text-6xl">{title}</h1>
        </Reveal>
      </div>
    </header>
  );
}

/** Numbered / bulleted list with gold markers. */
export function GoldList({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-4">
          <span className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
          <span className="prose-instrex">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-5">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-gold tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="prose-instrex flex-1">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Glass card used for insight / recommendation blocks. */
export function Panel({
  title,
  children,
  className = "",
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass lift rounded-lg p-7 md:p-9 ${className}`}>
      {title ? (
        <h3 className="font-sans text-base font-semibold tracking-tight md:text-lg">{title}</h3>
      ) : null}
      <div className={title ? "mt-5" : ""}>{children}</div>
    </div>
  );
}

export function KpiCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass rounded-lg p-7 text-center">
      <p className="font-display text-4xl text-gold md:text-5xl">{value}</p>
      <p className="mt-3 font-sans text-xs leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  );
}

/** Vertical timeline for phased case-study content. */
export function Timeline({
  steps,
}: {
  steps: { label: string; title: ReactNode; children: ReactNode }[];
}) {
  return (
    <div className="relative border-l border-hairline pl-8 md:pl-12">
      {steps.map((step, i) => (
        <Reveal key={i} className="relative pb-14 last:pb-0">
          <span className="absolute top-2 -left-[calc(2rem+5px)] h-[9px] w-[9px] rounded-full bg-gold md:-left-[calc(3rem+5px)]" />
          <p className="kicker">{step.label}</p>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">{step.title}</h3>
          <div className="mt-5">{step.children}</div>
        </Reveal>
      ))}
    </div>
  );
}
