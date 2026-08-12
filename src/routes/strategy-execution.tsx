import { createFileRoute } from "@tanstack/react-router";

import executionImage from "@/assets/service-execution.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/strategy-execution")({
  head: () => ({
    meta: [
      { title: "Strategy Execution & Funding Support — Instrex" },
      {
        name: "description",
        content:
          "We convert strategic goals into clear, actionable plans with defined timelines, responsibilities, and measurable outcomes.",
      },
      { property: "og:title", content: "Strategy Execution & Funding Support — Instrex" },
      {
        property: "og:description",
        content:
          "Strategy Implementation and Funding Support — a strategy is only useful once it leaves the slide deck.",
      },
    ],
  }),
  component: StrategyExecution,
});

function StrategyExecution() {
  return (
    <>
      <PageHeader
        kicker="Execution"
        title="Strategy Execution"
        image={executionImage}
        imageAlt="Executives reviewing an implementation roadmap"
      />

      <Section>
        <Reveal>
          <SectionTitle>Strategy Implementation</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal className="space-y-6">
            <p className="prose-instrex">
              We convert strategic goals into clear, actionable plans with defined timelines,
              responsibilities, and measurable outcomes. Every initiative includes milestone tracking,
              so progress stays visible and accountable.
            </p>
            <p className="prose-instrex">
              Execution is backed by our network of trusted specialist partners, including marketing
              agencies, finance professionals, investment bankers, and other domain experts, brought
              in exactly where they’re needed.
            </p>
            <p className="prose-instrex">
              A strategy is only useful once it leaves the slide deck. That’s the standard we hold
              execution to.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 h-full w-full border border-gold/30" />
              <img
                src={executionImage}
                alt="Strategy implementation with specialist partners"
                loading="lazy"
                width={1024}
                height={1024}
                className="relative aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Funding Support</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <Panel className="h-full">
              <p className="prose-instrex">
                Instrex connects high-potential startups in India with early-stage funding through a
                network of HNI investors. Every introduction goes through a transparent due diligence
                process, so founders end up partnering with the right investors, not just any
                investor.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel className="h-full">
              <p className="prose-instrex">
                We also help startups build pitch decks that clearly show their value proposition,
                market opportunity, and growth potential, backed by real data rather than assumptions.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
