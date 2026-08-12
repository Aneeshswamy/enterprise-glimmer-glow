import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
  constrain = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "ink" | "muted";
  id?: string;
  constrain?: boolean;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground",
    muted: "bg-muted text-foreground",
  };
  return (
    <section id={id} className={`${tones[tone]} px-6 py-24 md:py-32 ${className}`}>
      <div className={constrain ? "mx-auto w-full max-w-6xl" : "w-full"}>{children}</div>
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
  return <p className={`prose-body max-w-3xl ${className}`}>{children}</p>;
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
        animate={{ scale: 1, opacity: 0.45 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/65" />
      <div className="mx-auto flex min-h-[56vh] w-full max-w-6xl flex-col justify-end px-6 pt-40 pb-20">
        <Reveal>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-normal md:text-6xl lg:text-[4rem]">
            {title}
          </h1>
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
          <span className="prose-body">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="space-y-5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-5">
          <span className="font-sans text-xs font-semibold tracking-[0.2em] text-gold tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="prose-body flex-1">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/** Soft content block without decorative accent lines. */
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
    <div className={className}>
      {title ? (
        <h3 className="font-sans text-base font-semibold tracking-tight md:text-lg">{title}</h3>
      ) : null}
      <div className={title ? "mt-4" : ""}>{children}</div>
    </div>
  );
}

/** Inline outcome metrics — editorial, not dashboard cards. */
export function OutcomeMetrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
          <p className="font-display text-3xl text-gold md:text-4xl">{item.value}</p>
          <p className="max-w-md font-sans text-sm leading-relaxed tracking-[0.04em] text-muted-foreground sm:text-right">
            {item.label}
          </p>
        </div>
      ))}
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
    <div className="space-y-16">
      {steps.map((step, i) => (
        <Reveal key={i}>
          <p className="kicker">{step.label}</p>
          <h3 className="mt-4 font-display text-2xl leading-snug md:text-3xl">{step.title}</h3>
          <div className="mt-6 max-w-3xl">{step.children}</div>
        </Reveal>
      ))}
    </div>
  );
}

/**
 * Full-width editorial feature band. Each service is its own premium section,
 * stacked one after another — never a multi-column card grid.
 */
export function FeatureBand({
  eyebrow,
  title,
  image,
  imageAlt,
  flip = false,
  tone = "default",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  image?: string;
  imageAlt?: string;
  flip?: boolean;
  tone?: "default" | "ink" | "muted";
  children: ReactNode;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    ink: "bg-ink text-ink-foreground",
    muted: "bg-muted text-foreground",
  };
  return (
    <section className={`${tones[tone]} px-6 py-28 md:py-36`}>
      <div
        className={`mx-auto grid w-full max-w-6xl items-center gap-16 md:gap-24 ${
          image ? "md:grid-cols-2" : "max-w-3xl"
        }`}
      >
        <Reveal className={flip ? "md:order-2" : ""}>
          {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
          <h2 className="mt-5 text-3xl leading-[1.12] font-normal md:text-[2.85rem]">{title}</h2>
          <div className="mt-10 space-y-7">{children}</div>
        </Reveal>
        {image ? (
          <Reveal delay={0.12} className={flip ? "md:order-1" : ""}>
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

/**
 * Continuous research narrative — one story, not a stack of unrelated cards.
 */
export function Story({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-3xl ${className}`}>
      <div className="space-y-24 md:space-y-32">{children}</div>
    </div>
  );
}

export function Chapter({
  label,
  title,
  children,
  media,
  mediaAlt,
  mediaCaption,
  wideMedia = false,
}: {
  label: string;
  title?: ReactNode;
  children?: ReactNode;
  media?: string;
  mediaAlt?: string;
  mediaCaption?: string;
  wideMedia?: boolean;
}) {
  return (
    <Reveal className="relative">
      <p className="kicker">{label}</p>
      {title ? (
        <h2 className="mt-6 text-3xl leading-[1.15] font-normal md:text-[2.35rem]">{title}</h2>
      ) : null}
      {children ? <div className="mt-8 space-y-6">{children}</div> : null}
      {media ? (
        <figure className={`mt-14 ${wideMedia ? "md:-mx-16 lg:-mx-28" : ""}`}>
          <img
            src={media}
            alt={mediaAlt ?? ""}
            loading="lazy"
            width={1600}
            height={900}
            className="aspect-[16/10] w-full object-cover"
          />
          {mediaCaption ? (
            <figcaption className="mt-4 font-sans text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {mediaCaption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}
    </Reveal>
  );
}

/** Full-bleed visual break between chapters of a research story. */
export function StoryVisual({
  image,
  imageAlt,
  caption,
}: {
  image: string;
  imageAlt: string;
  caption?: string;
}) {
  return (
    <Reveal className="mx-auto w-full max-w-5xl">
      <figure>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          width={1600}
          height={1000}
          className="aspect-[16/9] w-full object-cover"
        />
        {caption ? (
          <figcaption className="mt-4 font-sans text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
