import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import insightsImage from "@/assets/service-insights.jpg";
import strategyImage from "@/assets/service-strategy.jpg";
import executionImage from "@/assets/service-execution.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Kicker, PageHeader, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Instrex Market Research, Strategy & Execution" },
      {
        name: "description",
        content:
          "Market Research, Business Strategy and Strategy Execution services from Instrex — insight-led consulting for measurable growth.",
      },
      { property: "og:title", content: "Services — Instrex Market Research, Strategy & Execution" },
      {
        property: "og:description",
        content: "Market Research. Business Strategy. Strategy Execution.",
      },
    ],
  }),
  component: Services,
});

const services = [
  { title: "Insights — Market Research and Analysis", to: "/market-research", image: insightsImage },
  { title: "Strategy — Business Growth Blueprint", to: "/business-strategy", image: strategyImage },
  {
    title: "Execution — Strategy Implementation, Facilitation & Funding Support",
    to: "/strategy-execution",
    image: executionImage,
  },
];

function Services() {
  return (
    <>
      <PageHeader
        kicker="Instrex"
        title="Services"
        image={strategyImage}
        imageAlt="Strategy session at Instrex"
      />
      <Section>
        <Reveal>
          <Kicker>Explore</Kicker>
          <SectionTitle className="mt-6">Services</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.to}>
              <Link to={s.to} className="lift group block overflow-hidden rounded-lg">
                <div className="relative isolate">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-ink-foreground">
                    <h2 className="font-display text-2xl">{s.title}</h2>
                    <span className="mt-4 inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                      Know More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
