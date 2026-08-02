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
          "Insight-driven Strategic Business Planning, Go To Market Strategy, Strategic Brand Identity, and Business And Financial Planning.",
      },
      { property: "og:title", content: "Business Strategy — Instrex Growth Blueprint" },
      {
        property: "og:description",
        content:
          "Growth doesn’t happen by chance. It’s the result of in-depth market and customer understanding, smart planning, precise execution, and continuous refinement.",
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
            In a competitive environment, growth doesn’t happen by chance. It’s the result of
            in-depth market and customer understanding, smart planning, precise execution, and
            continuous refinement.
          </p>
          <p className="prose-instrex">
            At Instrex, our Strategic Business Planning approach is built on deep insights and aligns
            resources, priorities, and market opportunities to create measurable, long-term value.
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
              services, due to weak go-to-market planning.
            </p>
            <p className="prose-instrex">
              A product may be well-designed but misaligned with customer needs, poorly communicated,
              incorrectly priced, or unavailable through the right channels.
            </p>
            <p className="prose-instrex">
              At Instrex, we use deep market and consumer insights to design a GTM framework based on
              the 7P model , ensuring every element of your business works in sync to maximize growth
              potential.
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
          <SectionTitle>Strategic Brand Identity</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Strong brands succeed because they have a clear purpose, defined values, distinct
            personality, and consistent positioning. They maintain uniformity in design and
            communication across all touchpoints, building trust over time.
          </p>
          <p className="prose-instrex">
            Instrex follows a structured and insight-driven approach to define these elements and
            create a comprehensive Strategic Brand Identity.
          </p>
          <p className="prose-instrex">
            This identity acts as a guiding framework for all design, communication, and marketing
            activities.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Business And Financial Planning</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal delay={0.1}>
            <p className="prose-instrex">
              Effective business and financial planning is vital for sustainable growth. It helps
              organizations set clear goals, allocate resources efficiently, and anticipate
              challenges early. With a structured plan, every decision is backed by financial insight
              and aligned with long-term objectives — turning ambition into measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel title="Instrex’s structured planning framework supports:">
              <GoldList
                items={[
                  "• Long-term and mid-term financial planning.",
                  "• Financial feasibility analysis for new ventures.",
                  "• Functional and operational planning.",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
