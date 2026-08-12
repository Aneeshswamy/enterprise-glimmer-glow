import { createFileRoute } from "@tanstack/react-router";

import executionArt from "@/assets/art-strategy-implementation.png";
import executionImage from "@/assets/service-execution.jpg";
import { FeatureBand, GoldList, PageHeader, Section } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/strategy-execution")({
  head: () => ({
    meta: [
      { title: "Strategy Execution & Funding Support" },
      {
        name: "description",
        content:
          "We convert strategic goals into clear, actionable plans with defined timelines, responsibilities, and measurable outcomes.",
      },
      { property: "og:title", content: "Strategy Execution & Funding Support" },
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
        image={executionArt}
        imageAlt="Strategy implementation with specialist partners"
      />

      <FeatureBand
        eyebrow="Implementation"
        title="Strategy Implementation"
        image={executionImage}
        imageAlt="Executives reviewing an implementation roadmap"
      >
        <p className="prose-body">
          We convert strategic goals into clear, actionable plans with defined timelines,
          responsibilities, and measurable outcomes. Every initiative includes milestone tracking, so
          progress stays visible and accountable.
        </p>
        <p className="prose-body">
          Execution is backed by our network of trusted specialist partners, including marketing
          agencies, finance professionals, investment bankers, and other domain experts, brought in
          exactly where they’re needed.
        </p>
        <p className="prose-body">
          A strategy is only useful once it leaves the slide deck. That’s the standard we hold
          execution to.
        </p>
      </FeatureBand>

      <Section tone="ink">
        <Reveal className="mx-auto max-w-3xl space-y-8">
          <h2 className="text-3xl leading-tight font-normal md:text-[2.75rem]">Funding Support</h2>
          <p className="prose-body">
            We connect high-potential startups in India with early-stage funding through a network of
            HNI investors. Every introduction goes through a transparent due diligence process, so
            founders end up partnering with the right investors, not just any investor.
          </p>
          <p className="prose-body">
            We also help startups build pitch decks that clearly show their value proposition, market
            opportunity, and growth potential, backed by real data rather than assumptions.
          </p>
          <GoldList
            items={[
              "Creating investor-ready pitch decks",
              "Facilitating funding through our trusted investor network",
            ]}
          />
        </Reveal>
      </Section>
    </>
  );
}
