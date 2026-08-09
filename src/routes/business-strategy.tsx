import { createFileRoute } from "@tanstack/react-router";

import strategyImage from "@/assets/service-strategy.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/business-strategy")({
  head: () => ({
    meta: [
      { title: "Business Strategy — Instrex Growth Blueprint" },
      {
        name: "description",
        content:
          "Insight-driven Business Strategy, Go To Market Strategy, Brand Strategy, Financial Planning, and Market and Financial Feasibility.",
      },
      { property: "og:title", content: "Business Strategy — Instrex Growth Blueprint" },
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
        image={strategyImage}
        imageAlt="Business strategy planning session"
      />

      <Section>
        <Reveal className="max-w-3xl space-y-6">
          <p className="prose-instrex">
            Growth in a competitive market comes from in-depth market and customer understanding,
            smart planning, precise execution, and continuous refinement.
          </p>
          <p className="prose-instrex">
            At Instrex, our business strategy consulting approach is built on deep insights and aligns
            resources, priorities, and market opportunities to create measurable, long-term value for
            FMCG, fashion, lifestyle, engineering, technology, and manufacturing companies across
            India.
          </p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Go To Market Strategy</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal delay={0.1} className="space-y-6">
            <p className="prose-instrex">
              Many great business ideas struggle to gain traction, even with strong products or
              services, due to weak go-to-market planning. A product may be well-designed but
              misaligned with customer needs, poorly communicated, incorrectly priced, or unavailable
              through the right channels.
            </p>
            <p className="prose-instrex">
              At Instrex, we use deep market and consumer insights to design a GTM framework based on
              the 7P model, so every part of the business works in sync, whether you’re launching a
              new FMCG product, entering the fashion and lifestyle space, or scaling an engineering,
              technology or manufacturing business.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="glass-dark rounded-lg p-8">
              <h3 className="font-display text-2xl text-ink-foreground">7Ps of Marketing</h3>
              <span className="gold-rule mt-5" />
              <Stagger className="mt-8 grid grid-cols-2 gap-3">
                {sevenPs.map((p, i) => (
                  <StaggerItem key={p}>
                    <div className="flex items-center gap-3 rounded border border-hairline px-4 py-3">
                      <span className="font-sans text-[0.65rem] tracking-[0.2em] text-gold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-sm text-ink-foreground/85">{p}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Brand Strategy</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Strong brands succeed because they have a clear purpose, defined values, distinct
            personality, and consistent positioning. They stay consistent in design and communication
            across every touchpoint, and that consistency is what builds trust over time.
          </p>
          <p className="prose-instrex">
            Instrex follows a structured, insight-driven approach to brand strategy, one built on
            market and consumer research rather than opinion. The result is a brand identity that acts
            as a guiding framework for all design, communication, and marketing decisions.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Financial Planning</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal delay={0.1}>
            <p className="prose-instrex">
              Good financial planning helps organizations set clear goals, allocate resources
              efficiently, and anticipate challenges early. Every decision is backed by financial
              insight and aligned with long-term objectives.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel title="Instrex’s planning framework supports:">
              <GoldList
                items={[
                  "Long-term and mid-term financial planning",
                  "Functional and operational planning",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Market and Financial Feasibility</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Before committing to a new venture, product launch, or market entry, the real question is
            whether it will work, commercially and financially.
          </p>
          <p className="prose-instrex">
            Instrex combines market research with financial modeling to test that question properly.
            We look at whether there’s real customer demand, how the numbers hold up, and what the
            actual risks are, rather than relying on financial projections alone. This
            market-and-financial approach is different from the purely technical or
            capital-expenditure feasibility studies most firms offer, and it’s where our research
            background makes the biggest difference.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
