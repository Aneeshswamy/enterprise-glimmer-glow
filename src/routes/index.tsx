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

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative isolate min-h-screen overflow-hidden bg-ink">
      <motion.img
        src={heroImage}
        alt="Instrex consulting boardroom overlooking a city skyline"
        width={1920}
        height={1088}
        style={{ y }}
        className="absolute inset-0 -z-10 h-[115%] w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
      <motion.div
        style={{ opacity }}
        className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-40 text-ink-foreground"
      >
        <Reveal>
          <Kicker>Insights to Impact Business Consulting</Kicker>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="mt-8 max-w-5xl text-[2rem] leading-[1.18] font-normal sm:text-4xl md:text-[3.4rem] md:leading-[1.14]">
            Insights - Market Research and Analysis I Strategy - Business Growth Blueprint I
            Execution - Strategy Implementation Facilitation and Funding Support
          </h1>
        </Reveal>
        <Reveal delay={0.24}>
          <span className="gold-rule mt-12" />
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
    title: "Insights - Market Research And Analysis",
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
      "Qualitative Research I Quantitative Research I AI Tools-Based Research I Secondary research",
  },
  {
    title: "Strategy - Business Growth Blueprint",
    image: strategyImage,
    to: "/business-strategy",
    bullets: [
      "Business modelling and growth blueprint for sustained value creation.",
      "Go to market strategy",
      "Mid-term and long-term Financial Planning.",
    ],
    sub: [
      "- Product and pricing strategy",
      "- Sales and distribution planning",
      "- Brand strategy and marketing communication planning",
    ],
  },
  {
    title: "Execution- Strategy Implementation Facilitation & Funding Support",
    image: executionImage,
    to: "/strategy-execution",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Kicker>Instrex</Kicker>
              <SectionTitle className="mt-6">From Insight to Impact</SectionTitle>
              <span className="gold-rule mt-8" />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-6">
              <p className="prose-instrex">
                At Instrex, we provide end-to-end solutions, from uncovering deep market insights
                and shaping growth strategies to turning them into real, measurable outcomes.
              </p>
              <p className="prose-instrex">
                What truly sets us apart is how we seamlessly connect market research with strategy.
                In a consulting world where these often work in isolation, we bring them together to
                ensure insights lead to clear, decisive action.
              </p>
              <p className="prose-instrex">
                We don’t stop at recommendations. We work alongside our clients through execution,
                ensuring every strategy moves off the slide deck and creates visible results on the
                ground.
              </p>
              <p className="prose-instrex">
                With years of leadership experience across industries and new ventures, our team
                helps organizations plan smarter, act faster, and grow stronger — with greater
                clarity, precision, and efficiency.
              </p>
              <p className="prose-instrex">
                At Instrex, we don’t just advise. We co-create the future of your business.
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
          <span className="gold-rule mx-auto mt-8" />
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
                          Connecting ambitious businesses with the right investors
                        </p>
                        <GoldList
                          className="mt-3"
                          items={[
                            "Creating Investor-ready pitch decks.",
                            "Facilitating funding from our trusted investor network.",
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

      <Section tone="muted">
        <Reveal className="flex flex-col items-center gap-8 text-center">
          <SectionTitle>Connect with us</SectionTitle>
          <span className="gold-rule" />
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
