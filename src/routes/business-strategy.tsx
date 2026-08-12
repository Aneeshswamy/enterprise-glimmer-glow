import { createFileRoute } from "@tanstack/react-router";

import strategyArt from "@/assets/art-growth-blueprint.png";
import { Reveal } from "@/components/site/Reveal";
import { FeatureBand, GoldList, NumberList, PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/business-strategy")({
  head: () => ({
    meta: [
      { title: "Business Strategy" },
      {
        name: "description",
        content:
          "Insight-driven Business Strategy, Go To Market Strategy, Brand Strategy, Financial Planning, and Market and Financial Feasibility.",
      },
      { property: "og:title", content: "Business Strategy" },
      {
        property: "og:description",
        content:
          "Growth in a competitive market comes from in-depth market and customer understanding, smart planning, precise execution, and continuous refinement.",
      },
    ],
  }),
  component: BusinessStrategy,
});

const sevenPs = [
  "Product",
  "Price",
  "Place",
  "Promotion",
  "People",
  "Process",
  "Physical Evidence",
];

function BusinessStrategy() {
  return (
    <>
      <PageHeader
        kicker="Strategy"
        title="Business Strategy"
        image={strategyArt}
        imageAlt="Business growth blueprint and strategic planning"
      />

      <Section>
        <Reveal className="mx-auto max-w-3xl space-y-6">
          <p className="prose-body">
            Growth in a competitive market comes from in-depth market and customer understanding,
            smart planning, precise execution, and continuous refinement.
          </p>
          <p className="prose-body">
            Our business strategy consulting approach is built on deep insights and aligns resources,
            priorities, and market opportunities to create measurable, long-term value for FMCG,
            fashion, lifestyle, engineering, technology, and manufacturing companies across India.
          </p>
        </Reveal>
      </Section>

      <FeatureBand eyebrow="Go To Market" title="Go To Market Strategy" tone="ink">
        <p className="prose-body">
          Many great business ideas struggle to gain traction, even with strong products or services,
          due to weak go-to-market planning. A product may be well-designed but misaligned with
          customer needs, poorly communicated, incorrectly priced, or unavailable through the right
          channels.
        </p>
        <p className="prose-body">
          We use deep market and consumer insights to design a GTM framework based on the 7P model,
          so every part of the business works in sync, whether you’re launching a new FMCG product,
          entering the fashion and lifestyle space, or scaling an engineering, technology or
          manufacturing business.
        </p>
        <div>
          <p className="font-sans text-sm font-semibold text-ink-foreground">7Ps of Marketing</p>
          <NumberList
            items={sevenPs.map((p) => p)}
          />
        </div>
      </FeatureBand>

      <FeatureBand eyebrow="Brand" title="Brand Strategy">
        <p className="prose-body">
          Strong brands succeed because they have a clear purpose, defined values, distinct
          personality, and consistent positioning. They stay consistent in design and communication
          across every touchpoint, and that consistency is what builds trust over time.
        </p>
        <p className="prose-body">
          We follow a structured, insight-driven approach to brand strategy, one built on market and
          consumer research rather than opinion. The result is a brand identity that acts as a
          guiding framework for all design, communication, and marketing decisions.
        </p>
      </FeatureBand>

      <FeatureBand eyebrow="Finance" title="Financial Planning" tone="muted">
        <p className="prose-body">
          Good financial planning helps organizations set clear goals, allocate resources efficiently,
          and anticipate challenges early. Every decision is backed by financial insight and aligned
          with long-term objectives.
        </p>
        <div>
          <p className="font-sans text-sm font-semibold">Our planning framework supports:</p>
          <GoldList
            className="mt-4"
            items={[
              "Long-term and mid-term financial planning",
              "Functional and operational planning",
            ]}
          />
        </div>
      </FeatureBand>

      <FeatureBand eyebrow="Feasibility" title="Market and Financial Feasibility" flip tone="ink">
        <p className="prose-body">
          Before committing to a new venture, product launch, or market entry, the real question is
          whether it will work, commercially and financially.
        </p>
        <p className="prose-body">
          We combine market research with financial modeling to test that question properly. We look
          at whether there’s real customer demand, how the numbers hold up, and what the actual risks
          are, rather than relying on financial projections alone. This market-and-financial approach
          is different from the purely technical or capital-expenditure feasibility studies most firms
          offer, and it’s where our research background makes the biggest difference.
        </p>
      </FeatureBand>
    </>
  );
}
