import { createFileRoute } from "@tanstack/react-router";

import financialImage from "@/assets/case-financial.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/financial-analysis")({
  head: () => ({
    meta: [
      { title: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy | Instrex" },
      {
        name: "description",
        content:
          "Make vs. Buy Decision for CNG Cylinder Manufacturing — capital and operating costs, unit economics, and sensitivity analysis for an automotive OEM.",
      },
      {
        property: "og:title",
        content: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy | Instrex",
      },
      {
        property: "og:description",
        content:
          "A practical, low-risk way into the market without a big upfront bet on manufacturing.",
      },
    ],
  }),
  component: FinancialAnalysis,
});

function FinancialAnalysis() {
  return (
    <>
      <PageHeader
        kicker="Financial Analysis"
        title="Make vs. Buy Decision for CNG Cylinder Manufacturing"
        image={financialImage}
        imageAlt="Industrial manufacturing facility for CNG cylinders"
      />

      <Section>
        <Reveal className="max-w-3xl space-y-6">
          <SectionTitle className="text-2xl md:text-3xl">The Challenge</SectionTitle>
          <span className="gold-rule" />
          <p className="prose-instrex">
            An automotive OEM needed to supply on-board CNG cylinders for its vehicles and had to
            decide how to source them. Should it build a manufacturing plant in India, or import
            finished cylinders from China? The decision had to work against a fixed target selling
            price, so cost efficiency wasn’t optional, it was the whole question.
          </p>
          <p className="prose-instrex">
            We needed to assess whether manufacturing in India made financial sense, compare that
            against importing across different volumes, and understand how scale, breakeven, and
            long-term margins would play out.
          </p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>What We Did</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-3xl space-y-6">
          <p className="prose-instrex">
            We built a structured Make vs. Buy model comparing two scenarios at the same target
            selling price: setting up a plant in India, or importing finished cylinders from China.
          </p>
          <p className="prose-instrex">
            For the manufacturing option, we ran a full feasibility study covering machinery, layout,
            power and utility needs, production yield and wastage, labour requirements, and regulatory
            approvals like PESO and BIS. This gave us real cost numbers instead of theoretical
            estimates.
          </p>
          <p className="prose-instrex">
            We then built out the investment picture for both scenarios.
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-2">
          <StaggerItem>
            <Panel className="h-full">
              <GoldList
                items={[
                  "For manufacturing in India, that meant land, construction, machinery, office setup, pre-launch staffing, and three months of working capital.",
                  "For imports, it was mostly licensing and approvals, with very little fixed infrastructure needed.",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                On the operating side, we modeled variable costs like raw materials, consumables, and
                utilities, and fixed costs like staff, admin, and compliance.
              </p>
              <p className="prose-instrex mt-5">
                For the import route, we also factored in freight, customs duty, port charges, and
                handling.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
        <Reveal delay={0.2} className="mt-10 max-w-3xl">
          <p className="prose-instrex">To get the true cost per cylinder, we included:</p>
          <GoldList
            className="mt-4"
            items={[
              "cash costs (materials and operations),",
              "non-cash costs (depreciation), and",
              "financial costs (interest on total capital employed).",
            ]}
          />
          <p className="prose-instrex mt-6">
            Then we ran profitability and sensitivity analysis across different production volumes to
            see how unit costs moved with scale, and what volume was actually needed to break even.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>What We Found</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Manufacturing in India from day one wasn’t financially viable. The learning curve alone,
            getting to regulatory compliance and manufacturing precision, could take up to a year.
          </p>
          <p className="prose-instrex">
            On top of that, capital investment and fixed overheads were high, unit economics were poor
            at low volumes, and profitability would stay low or negative in the early years even at
            the target price.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>What We Recommended</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">A two-stage approach.</p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.15}>
            <Panel className="h-full">
              <p className="prose-instrex">
                Stage one: import and stabilize. Bring in cylinders from certified Chinese suppliers,
                get PESO certification through one or two partners, start supplying the OEM with
                minimal upfront investment, and build up operational and market experience.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={0.25}>
            <Panel className="h-full">
              <p className="prose-instrex">
                Stage two: shift to local manufacturing once demand is stable, internal capabilities
                are stronger, and regulatory relationships with PESO and BIS are established. This
                reduces reliance on imports and improves margins over time.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>The Result</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">
            The OEM got a practical, low-risk way into the market, one that didn’t require a big
            upfront bet on manufacturing before the business case was actually proven.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
