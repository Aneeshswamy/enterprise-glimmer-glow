import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import insightsArt from "@/assets/art-market-research.png";
import strategyArt from "@/assets/art-growth-blueprint.png";
import executionArt from "@/assets/art-strategy-implementation.png";
import strategyImage from "@/assets/service-strategy.jpg";
import { Reveal } from "@/components/site/Reveal";
import { FeatureBand, GoldList, PageHeader } from "@/components/site/Layout";

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

function KnowMore({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase"
    >
      Know More
      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

function Services() {
  return (
    <>
      <PageHeader title="Services" image={strategyImage} imageAlt="Strategy session at Instrex" />

      <FeatureBand
        eyebrow="Insights"
        title="Insights — Market Research and Analysis"
        image={insightsArt}
        imageAlt="A lens held over a city grid, revealing market data points"
      >
        <GoldList
          items={[
            "Consumer needs and preference mapping",
            "Brand equity, positioning, and performance analysis",
            "Sales and distribution channel insights",
            "Business and B2B research",
            "Competitor benchmarking and evaluation",
          ]}
        />
        <p className="font-sans text-[0.85rem] leading-relaxed font-semibold text-gold">
          Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary Research
        </p>
        <KnowMore to="/market-research" />
      </FeatureBand>

      <FeatureBand
        eyebrow="Strategy"
        title="Strategy — Business Growth Blueprint"
        image={strategyArt}
        imageAlt="A glowing piece completing a transparent business blueprint"
        flip
        tone="ink"
      >
        <GoldList
          items={[
            "Business modelling and growth blueprint for sustained value creation",
            "Go to market strategy",
            "Mid-term and long-term financial planning",
            "Market and financial feasibility for new ventures",
          ]}
        />
        <div className="space-y-1.5 border-l border-gold/30 pl-6">
          <p className="prose-instrex">Product and pricing strategy</p>
          <p className="prose-instrex">Sales and distribution planning</p>
          <p className="prose-instrex">Brand strategy and marketing communication planning</p>
        </div>
        <KnowMore to="/business-strategy" />
      </FeatureBand>

      <FeatureBand
        eyebrow="Execution"
        title="Execution — Strategy Implementation, Facilitation & Funding Support"
        image={executionArt}
        imageAlt="Hands assembling gears over a city blueprint"
      >
        <div>
          <p className="font-sans text-sm font-semibold">Strategy Implementation</p>
          <p className="prose-instrex mt-3">
            Facilitating execution through a network of trusted specialist partners, including
            marketing specialists, sales professionals, finance experts, and investment bankers.
          </p>
        </div>
        <div>
          <p className="font-sans text-sm font-semibold">Funding Support</p>
          <p className="prose-instrex mt-3">Connecting ambitious businesses with the right investors.</p>
          <GoldList
            className="mt-4"
            items={[
              "Creating investor-ready pitch decks",
              "Facilitating funding through our trusted investor network",
            ]}
          />
        </div>
        <KnowMore to="/strategy-execution" />
      </FeatureBand>

      <section className="bg-muted px-6 py-24 md:py-28">
        <Reveal className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="text-3xl leading-tight font-normal md:text-4xl">Connect with us</h2>
          <Link
            to="/connect-with-us"
            className="group inline-flex items-center gap-3 border border-foreground/25 px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
          >
            Submit your enquiry
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
