import { createFileRoute } from "@tanstack/react-router";

import qualImage from "@/assets/case-qual.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/qualitative-research")({
  head: () => ({
    meta: [
      { title: "Qualitative Research Case Study — HoReCa F&B Growth | Instrex" },
      {
        name: "description",
        content:
          "Reviving Growth for a HoReCa F&B Solutions Company Through Strategic Alignment — a 360° qualitative study by Instrex.",
      },
      {
        property: "og:title",
        content: "Qualitative Research Case Study — HoReCa F&B Growth | Instrex",
      },
      {
        property: "og:description",
        content:
          "A 360° qualitative study across internal and external stakeholders uncovered the real barriers behind a growth plateau.",
      },
    ],
  }),
  component: QualitativeResearch,
});

function QualitativeResearch() {
  return (
    <>
      <PageHeader
        kicker="Qualitative Research"
        title="Reviving Growth for a HoReCa F&B Solutions Company Through Strategic Alignment"
        image={qualImage}
        imageAlt="Professional kitchen team in a hospitality environment"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Context</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A leading HoReCa-focused F&B solutions company was facing stagnant growth despite a
              strong product range and established market presence.
            </p>
            <p className="prose-instrex">The issue wasn’t market demand — it was internal misalignment:</p>
            <GoldList
              items={[
                "Management lacked a unified business view",
                "Teams worked in silos without shared direction",
                "The corporate brand lacked clarity and trust",
                "Product brands operated independently, confusing customers and diluting marketing impact",
              ]}
            />
            <p className="prose-instrex">
              To regain momentum, the company first needed strategic clarity and alignment.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="The Challenge - Organizational Fragmentation">
              <p className="prose-instrex">The problems were systemic, not tactical:</p>
              <GoldList
                className="mt-4"
                items={[
                  "A blurred corporate identity that failed to inspire confidence among customers and partners.",
                  "A weak association of product brands with corporate brand.",
                  "Fragmented product messaging with no consistent narrative across SKUs",
                  "A price-driven sales culture limiting long-term relationships",
                ]}
              />
              <p className="prose-instrex mt-5">
                Without a shared understanding of these issues, isolated marketing or sales fixes
                wouldn’t deliver lasting results.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>
            Research Approach - A 360 <span className="text-gold">°</span>Qualitative Study
          </SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="prose-instrex">
            Instrex conducted a holistic qualitative research program across both internal and
            external stakeholders to uncover root causes of underperformance.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.15}>
            <Panel title="External Stakeholders:" className="h-full">
              <GoldList
                items={["HoReCa owners and chefs", "Distributors and channel partners"]}
              />
            </Panel>
          </Reveal>
          <Reveal delay={0.25}>
            <Panel title="Internal Teams:" className="h-full">
              <GoldList items={["Sales, Marketing, and Operations"]} />
            </Panel>
          </Reveal>
        </div>
        <Reveal delay={0.3} className="mt-10 max-w-3xl">
          <p className="prose-instrex">
            This dual perspective revealed how internal misalignment was directly shaping external
            perception and buying behavior.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Key Insights: Uncovering The Real Barrier</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">The research surfaced three core issues:</p>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Product Story Misalignment:",
              d: "Product narratives failed to address chefs’ real kitchen-level challenges.",
            },
            {
              t: "Transactional Sales Approach:",
              d: "Sales focused on discounts over partnership, limiting loyalty and wallet share.",
            },
            {
              t: "Fragmented Brand Expression:",
              d: "Inconsistent visuals and messaging weakened trust and recognition.",
            },
          ].map((i) => (
            <StaggerItem key={i.t}>
              <Panel title={i.t} className="h-full">
                <p className="prose-instrex">{i.d}</p>
              </Panel>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-10">
          <p className="prose-instrex">
            Individually, these seemed functional. Together, they explained the growth plateau.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Strategic Recommendations</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">
            Based on these insights, Instrex designed three integrated programs to realign the
            organization.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel title="1. Product and Packaging Program" className="h-full">
              <GoldList
                items={[
                  "Activate underperforming SKUs with tailored regional plans",
                  "Align new product development with HoReCa demand",
                  "Standardize launch playbooks and fix packaging usability issues",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="2. Sales Engagement Transformation" className="h-full">
              <GoldList
                items={[
                  "Shift from transactional to relationship-led selling",
                  "Introduce training, new sales guidelines, and measurable targets",
                  "Build structured customer engagement frameworks",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="3. Brand and Communication Reset" className="h-full">
              <GoldList
                items={[
                  "Redefine brand architecture across corporate and product levels",
                  "Develop a clear, unified brand identity",
                ]}
              />
              <p className="prose-instrex mt-4">
                Roll out the new system across all communication and design touchpoints
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Outcome: Unified Vision, Renewed Growth</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1} className="space-y-6">
            <p className="prose-instrex">
              Leadership adopted a single strategic roadmap, aligning teams around shared priorities
              and KPIs.
            </p>
            <p className="prose-instrex">The results included:</p>
            <GoldList
              items={[
                "Improved SKU velocity and portfolio performance",
                "Stronger customer relationships and retention",
                "Enhanced brand recall and marketplace credibility",
              ]}
            />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="prose-instrex">
              With clarity restored and teams aligned, the company reignited growth and recovered
              market share — proving that strategic coherence drives transformation far more
              effectively than tactical fixes.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
