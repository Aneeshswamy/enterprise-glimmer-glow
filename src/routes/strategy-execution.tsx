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
          "Strategy Implementation and Funding Support — plans that move beyond presentations and deliver real, on-ground results.",
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
        title="Strategy Implementation"
        image={executionImage}
        imageAlt="Executives reviewing an implementation roadmap"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal className="space-y-6">
            <p className="prose-instrex">
              We convert strategic goals into clear, actionable plans with defined timelines,
              responsibilities, and measurable outcomes.
            </p>
            <p className="prose-instrex">
              Every initiative is structured with milestone tracking to ensure accountability and
              steady progress.
            </p>
            <p className="prose-instrex">
              Execution is strengthened through our network of trusted specialist partners, including{" "}
              <strong className="font-semibold text-foreground">
                marketing agencies, finance professionals, investment bankers, and other domain
                experts
              </strong>
              , bringing focused expertise exactly where it’s needed.
            </p>
            <p className="prose-instrex">
              By combining strategic direction with hands-on implementation support, we ensure that
              plans move beyond presentations and deliver real, on-ground results.
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
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <Panel className="h-full">
              <p className="prose-instrex">
                Instrex connects high-potential startups with early-stage funding through a trusted
                network of HNI investors. We ensure a transparent and thorough due diligence process,
                helping founders partner with the right investors for sustainable growth.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel className="h-full">
              <p className="prose-instrex">
                Our team also helps startups craft powerful pitch decks that clearly showcase their
                value proposition, market opportunity, and growth potential — backed by solid data
                and business insight.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
