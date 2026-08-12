import { createFileRoute } from "@tanstack/react-router";

import insightsArt from "@/assets/art-market-research.png";
import { Reveal } from "@/components/site/Reveal";
import { FeatureBand, GoldList, PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/market-research")({
  head: () => ({
    meta: [
      { title: "Market Research And Analysis" },
      {
        name: "description",
        content:
          "Deep, actionable market research and analysis that uncover growth opportunities, guide winning strategies, and reduce business risks.",
      },
      { property: "og:title", content: "Market Research And Analysis" },
      {
        property: "og:description",
        content:
          "Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary Research",
      },
    ],
  }),
  component: MarketResearch,
});

function MarketResearch() {
  return (
    <>
      <PageHeader
        kicker="Insights"
        title="Market Research And Analysis"
        image={insightsArt}
        imageAlt="Market research revealing growth opportunities across channels"
      />

      <Section>
        <Reveal className="mx-auto max-w-3xl space-y-6">
          <p className="prose-body">
            Business success in fast-changing markets depends on understanding your customers,
            competitors, and channels better than anyone else.
          </p>
          <p className="prose-body">
            We go beyond simple data collection. We deliver deep, actionable market research for foods
            and beverages, personal care and home care, fashion and lifestyle, engineering and
            technology, and manufacturing companies across India, uncovering growth opportunities and
            reducing business risk at every stage of decision-making.
          </p>
          <p className="font-sans text-[0.85rem] leading-relaxed font-semibold text-gold">
            Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary
            Research
          </p>
        </Reveal>
      </Section>

      <FeatureBand
        eyebrow="01"
        title="Consumer Insights"
        tone="muted"
      >
        <GoldList
          items={[
            "Understand customer needs, habits, and buying behaviors",
            "Measure brand strength and perception",
            "Evaluate product performance and pricing strategies",
            "Develop and test creative ideas for advertising and communication",
            "Category-specific research for FMCG, cosmetics, and fashion brands entering new markets or launching new products",
          ]}
        />
      </FeatureBand>

      <FeatureBand eyebrow="02" title="Retail and Channel Insights" flip tone="ink">
        <GoldList
          items={[
            "Identify and understand high-value customer segments",
            "Optimize channel strategies for better reach and efficiency",
            "Gain shopper insights and develop detailed store-level profiles",
          ]}
        />
      </FeatureBand>

      <FeatureBand eyebrow="03" title="Business and B2B Research">
        <GoldList
          items={[
            "Analyze market size and forecast future growth trends",
            "Understand business buyer needs and key vendor selection criteria",
            "Measure customer satisfaction and loyalty levels",
            "Study customer buying cycles and decision-making behaviors",
          ]}
        />
      </FeatureBand>

      <FeatureBand eyebrow="04" title="Competition Analysis" flip tone="muted">
        <GoldList
          items={[
            "Understand competitors’ product strategies, marketing tactics, and operational practices",
            "Benchmark against competitors and identify gaps that reveal a competitive advantage",
          ]}
        />
      </FeatureBand>
    </>
  );
}
