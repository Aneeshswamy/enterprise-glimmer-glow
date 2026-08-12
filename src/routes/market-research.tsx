import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Building2, Store, Users } from "lucide-react";

import insightsImage from "@/assets/service-insights.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/market-research")({
  head: () => ({
    meta: [
      { title: "Market Research And Analysis — Instrex" },
      {
        name: "description",
        content:
          "Deep, actionable market research and analysis that uncover growth opportunities, guide winning strategies, and reduce business risks.",
      },
      { property: "og:title", content: "Market Research And Analysis — Instrex" },
      {
        property: "og:description",
        content:
          "Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary Research",
      },
    ],
  }),
  component: MarketResearch,
});

const blocks = [
  {
    icon: Users,
    title: "Consumer Insights",
    items: [
      "Understand customer needs, habits, and buying behaviors",
      "Measure brand strength and perception",
      "Evaluate product performance and pricing strategies",
      "Develop and test creative ideas for advertising and communication",
      "Category-specific research for FMCG, cosmetics, and fashion brands entering new markets or launching new products",
    ],
  },
  {
    icon: Store,
    title: "Retail and Channel Insights",
    items: [
      "Identify and understand high-value customer segments",
      "Optimize channel strategies for better reach and efficiency",
      "Gain shopper insights and develop detailed store-level profiles",
    ],
  },
  {
    icon: Building2,
    title: "Business and B2B Research",
    items: [
      "Analyze market size and forecast future growth trends",
      "Understand business buyer needs and key vendor selection criteria",
      "Measure customer satisfaction and loyalty levels",
      "Study customer buying cycles and decision-making behaviors",
    ],
  },
  {
    icon: BarChart3,
    title: "Competition Analysis",
    items: [
      "Understand competitors’ product strategies, marketing tactics, and operational practices",
      "Benchmark against competitors and identify gaps that reveal a competitive advantage",
    ],
  },
];

function MarketResearch() {
  return (
    <>
      <PageHeader
        kicker="Insights"
        title="Market Research And Analysis"
        image={insightsImage}
        imageAlt="Analysts reviewing market research data"
      />

      <Section>
        <Reveal className="max-w-3xl space-y-6">
          <p className="prose-instrex">
            Business success in fast-changing markets depends on understanding your customers,
            competitors, and channels better than anyone else.
          </p>
          <p className="prose-instrex">
            At Instrex, we go beyond simple data collection. We deliver deep, actionable market
            research for foods and beverages, personal care and home care, fashion and lifestyle,
            engineering and technology, and manufacturing companies across India, uncovering growth
            opportunities and reducing business risk at every stage of decision-making.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h3 className="mt-14 font-sans text-base leading-relaxed font-semibold text-gold md:text-lg">
            Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary
            Research
          </h3>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Market Research And Analysis</SectionTitle>
        </Reveal>
        <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
          {blocks.map((b) => (
            <StaggerItem key={b.title}>
              <Panel
                title={
                  <span className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-gold" />
                    {b.title}
                  </span>
                }
                className="h-full"
              >
                <GoldList items={b.items} />
              </Panel>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.12}>
          <h3 className="mt-16 font-sans text-base leading-relaxed font-semibold text-gold md:text-lg">
            Qualitative Research | Quantitative Research | AI Tools-Based Research | Secondary
            Research
          </h3>
        </Reveal>
      </Section>
    </>
  );
}
