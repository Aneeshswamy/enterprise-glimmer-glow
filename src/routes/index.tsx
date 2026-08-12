import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "@/assets/hero-boardroom.jpg";
import heroSlide2 from "@/assets/case-quant.jpg";
import heroSlide3 from "@/assets/case-brand.jpg";
import heroSlide4 from "@/assets/case-gtm.jpg";
import insightsImage from "@/assets/service-insights.jpg";
import strategyImage from "@/assets/service-strategy.jpg";
import executionImage from "@/assets/service-execution.jpg";
import bridgeImage from "@/assets/bridge-insight-impact.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, Kicker, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instrex — Insights to Impact Business Consulting" },
      {
        name: "description",
        content:
          "Insights - Market Research and Analysis. Strategy - Business Growth Blueprint. Execution - Strategy Implementation Facilitation and Funding Support.",
      },
      { property: "og:title", content: "Instrex — Insights to Impact Business Consulting" },
      {
        property: "og:description",
        content:
          "Insights - Market Research and Analysis. Strategy - Business Growth Blueprint. Execution - Strategy Implementation Facilitation and Funding Support.",
      },
    ],
  }),
  component: Home,
});

const heroSlides = [
  { src: heroImage, alt: "Instrex consulting boardroom overlooking a city skyline" },
  { src: heroSlide2, alt: "Instrex consulting research banner" },
  { src: heroSlide3, alt: "Instrex brand strategy banner" },
  { src: heroSlide4, alt: "Instrex go-to-market banner" },
];

const heroPillars = [
  { label: "INSIGHTS", text: "Market Research & Analysis" },
  { label: "STRATEGY", text: "Business Growth Blueprint" },
  { label: "EXECUTION", text: "Implementation & Funding Support" },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div ref={ref} className="relative isolate min-h-screen overflow-hidden bg-ink">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 h-[115%] w-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={heroSlides[index]?.src}
            alt={heroSlides[index]?.alt ?? ""}
            width={1920}
            height={1088}
            initial={{ opacity: 0, x: "6%", scale: 1.06 }}
            animate={{ opacity: 0.55, x: "0%", scale: 1 }}
            exit={{ opacity: 0, x: "-6%", scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Show banner ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-gold" : "w-5 bg-ink-foreground/30"
            }`}
          />
        ))}
      </div>
      <motion.div
        style={{ opacity }}
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-40 text-ink-foreground"
      >
        <Reveal>
          <Kicker>Insights to Impact Business Consulting</Kicker>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="mt-8 max-w-5xl text-[2rem] leading-[1.18] font-normal sm:text-4xl md:text-[3.4rem] md:leading-[1.14]">
            From Insight to Impact
          </h1>
        </Reveal>
        <Reveal delay={0.18} className="mt-8 max-w-3xl space-y-4">
          <p className="prose-instrex">
            We turn market insights into growth plans, and plans into results.
          </p>
          <p className="prose-instrex">
            A business growth consulting firm built to deliver measurable outcomes.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroPillars.map((p) => (
              <div key={p.label}>
                <p className="font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                  {p.label}
                </p>
                <p className="prose-instrex mt-2">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/connect-with-us"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] text-accent-foreground uppercase transition-all hover:gap-5"
            >
              Connect with us
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </motion.div>
    </div>
  );
}

const serviceCards = [
  {
    title: "Insights — Market Research and Analysis",
    image: insightsImage,
    to: "/market-research",
    bullets: [
      "Consumer needs and preference mapping",
      "Brand equity, positioning, and performance analysis",
      "Sales and distribution channel insights",
      "Business and B2B research",
      "Competitor benchmarking and evaluation",
    ],
    footnote:
      "Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary Research",
  },
  {
    title: "Strategy — Business Growth Blueprint",
    image: strategyImage,
    to: "/business-strategy",
    bullets: [
      "Business modelling and growth blueprint for sustained value creation",
      "Go to market strategy",
      "Mid-term and long-term financial planning",
      "Market and financial feasibility for new ventures",
    ],
    sub: [
      "Product and pricing strategy",
      "Sales and distribution planning",
      "Brand strategy and marketing communication planning",
    ],
  },
  {
    title: "Execution — Strategy Implementation, Facilitation & Funding Support",
    image: executionImage,
    to: "/strategy-execution",
  },
];

const industries = [
  "FMCG — Foods & Beverages",
  "FMCG — Personal Care & Cosmetics",
  "FMCG — Home Care",
  "Fashion & Lifestyle",
  "Engineering & Technology",
  "Manufacturing",
  "Consumer services",
];

function Home() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <SectionTitle className="mt-6">
                Research and Growth Plans, Built Together.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-6">
              <p className="prose-instrex">
                At Instrex, we help FMCG (foods &amp; beverages, personal care, cosmetics, &amp; home
                care), fashion, engineering &amp; technology, manufacturing, and consumer services
                companies in India turn market insight into business growth. We connect research with
                strategy so that decisions are backed by evidence, not guesswork.
              </p>
              <p className="prose-instrex">
                Most consulting firms treat research and strategy as separate services. We don’t.
                Every recommendation we make is grounded in what we’ve actually found in the market,
                and every research project we run is designed with a business decision in mind.
              </p>
              <p className="prose-instrex">
                We stay involved through execution too. A strategy is only useful if it leaves the
                slide deck, so we work alongside our clients to make sure it does.
              </p>
              <p className="prose-instrex">
                Our team has led businesses and built new ventures across industries. That experience
                shapes how we advise: practical, specific, and grounded in what actually moves a
                business forward.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full border border-gold/30" />
              <img
                src={bridgeImage}
                alt="A sleek bridge connecting two cliffs"
                loading="lazy"
                width={1440}
                height={810}
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="text-center">
          <Kicker>What We Do</Kicker>
          <SectionTitle className="mt-6">Services</SectionTitle>
        </Reveal>

        <Stagger className="mt-20 grid gap-8 md:grid-cols-3">
          {serviceCards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="glass-dark lift flex h-full flex-col rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-44 w-full rounded-t-lg object-cover opacity-80"
                />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-sans text-base leading-snug font-semibold text-ink-foreground">
                    {card.title}
                  </h3>
                  {card.bullets ? (
                    <GoldList className="mt-6" items={card.bullets} />
                  ) : (
                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="font-sans text-sm font-semibold text-ink-foreground">
                          Strategy Implementation
                        </p>
                        <p className="prose-instrex mt-2 text-[0.95rem]">
                          Facilitating execution through a network of trusted specialist partners,
                          including marketing specialists, sales professionals, finance experts, and
                          investment bankers.
                        </p>
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold text-ink-foreground">
                          Funding Support
                        </p>
                        <p className="prose-instrex mt-2 text-[0.95rem]">
                          Connecting ambitious businesses with the right investors.
                        </p>
                        <GoldList
                          className="mt-3"
                          items={[
                            "Creating investor-ready pitch decks",
                            "Facilitating funding through our trusted investor network",
                          ]}
                        />
                      </div>
                    </div>
                  )}
                  {card.sub ? (
                    <div className="mt-4 space-y-1.5 border-l border-gold/30 pl-5">
                      {card.sub.map((line) => (
                        <p key={line} className="prose-instrex text-[0.95rem]">
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  {card.footnote ? (
                    <p className="mt-6 font-sans text-[0.8rem] leading-relaxed font-semibold text-gold">
                      {card.footnote}
                    </p>
                  ) : null}
                  <Link
                    to={card.to}
                    className="group mt-8 inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.2em] text-ink-foreground/70 uppercase transition-colors hover:text-gold"
                  >
                    Know More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle className="mt-6">Industries We Serve</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl">
          <p className="prose-instrex">
            We work across four core sectors: FMCG (foods, personal care, and home care), fashion and
            lifestyle, engineering and technology, manufacturing, and consumer services. Each comes
            with its own consumer behavior, channel structure, and growth challenges, and our research
            and strategy work is built around that difference rather than a generic template.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <StaggerItem key={industry}>
              <div className="glass lift rounded-lg px-6 py-5">
                <p className="font-sans text-sm font-semibold">{industry}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal className="text-center">
          <SectionTitle>Brands We’ve Worked With</SectionTitle>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <SectionTitle>Connect with us</SectionTitle>
          <div className="space-y-1 font-sans text-sm tracking-[0.08em]">
            <p>business@instrex.in</p>
            <p>+91 7011845620</p>
          </div>
          <Link
            to="/connect-with-us"
            className="group inline-flex items-center gap-3 border border-foreground/25 px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Submit your enquiry
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
