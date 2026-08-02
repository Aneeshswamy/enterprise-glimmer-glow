import { createFileRoute } from "@tanstack/react-router";

import financialImage from "@/assets/case-financial.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  GoldList,
  NumberList,
  PageHeader,
  Panel,
  Section,
  SectionTitle,
} from "@/components/site/Layout";

export const Route = createFileRoute("/financial-analysis")({
  head: () => ({
    meta: [
      { title: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy | Instrex" },
      {
        name: "description",
        content:
          "Financial Analysis - Make vs. Buy Analysis for CNG Cylinder Manufacturing in India, including CAPEX, OPEX, unit economics, and sensitivity analysis.",
      },
      {
        property: "og:title",
        content: "Financial Analysis Case Study — CNG Cylinder Make vs. Buy | Instrex",
      },
      {
        property: "og:description",
        content:
          "A staged approach that balanced short-term feasibility with long-term competitiveness for an automotive OEM.",
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
        title="Financial Analysis - Make vs. Buy Analysis for CNG Cylinder Manufacturing in India"
        image={financialImage}
        imageAlt="Industrial manufacturing facility for CNG cylinders"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Context and Objectives</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A leading automotive OEM was required to supply on-board CNG cylinders for a CNG
              vehicle. It wanted to determine the most cost-effective approach for sourcing on-board
              CNG cylinders. The key question was whether it would be more viable to set up a
              manufacturing facility in India or import finished cylinders from China.
            </p>
            <p className="prose-instrex">
              The decision needed to align with a pre-defined target selling price, making cost
              efficiency and unit economics central to the analysis.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="Study Objectives:">
              <NumberList
                items={[
                  "Assess the financial viability of manufacturing CNG cylinders in India.",
                  "Conduct a Make vs. Buy (Import) analysis across different production volumes.",
                  "Perform a sensitivity analysis to understand scale effects, breakeven points, and long-term profitability.",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Approach and Methodology</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-2">
          <StaggerItem>
            <Panel title="1. Make-or-Buy Decision Framework" className="h-full">
              <p className="prose-instrex">
                Instrex applied a structured, data-driven Make vs. Buy framework that integrated
                financial modeling with techno-commercial feasibility.
              </p>
              <p className="prose-instrex mt-5">The analysis compared two core scenarios:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Scenario A: Setting up a greenfield manufacturing plant in India",
                  "Scenario B: Importing finished CNG cylinders from China",
                ]}
              />
              <p className="prose-instrex mt-5">
                Both were evaluated at the same target realized selling price to ensure a fair,
                like-for-like comparison.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="2. Techno-Commercial Feasibility Assessment" className="h-full">
              <p className="prose-instrex">
                For the manufacturing scenario, a comprehensive feasibility study was conducted,
                factoring in:
              </p>
              <GoldList
                className="mt-3"
                items={[
                  "Machinery and layout requirements",
                  "Power and utility consumption",
                  "Production yield, wastage, and quality losses",
                  "Labour and manpower deployment",
                  "Regulatory and certification requirements (PESO, BIS)",
                ]}
              />
              <p className="prose-instrex mt-5">
                This approach ensured realistic production cost estimates rather than relying on
                theoretical benchmarks.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="3. Capital Expenditure (CAPEX) Estimation" className="h-full">
              <p className="prose-instrex">
                A detailed financial model was developed to calculate the one-time investment needed
                to start operations.
              </p>
              <p className="prose-instrex mt-5">For Indian Manufacturing:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Land acquisition",
                  "Plant and building construction",
                  "Machinery procurement",
                  "Office setup and equipment",
                  "Pre-launch manpower and overheads",
                  "Working capital (equivalent to 3 months of operating costs)",
                ]}
              />
              <p className="prose-instrex mt-5">For Imports from China:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Licensing and regulatory approvals",
                  "Minimal fixed infrastructure investment",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="4. Operational Expenditure (OPEX) Build-Up" className="h-full">
              <p className="prose-instrex">
                A bottom-up model was created to estimate recurring monthly costs.
              </p>
              <p className="prose-instrex mt-5">Variable Costs:</p>
              <GoldList
                className="mt-3"
                items={["Raw materials", "Consumables", "Utilities and power"]}
              />
              <p className="prose-instrex mt-5">Fixed Costs:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Staff and labour",
                  "Administrative and plant overheads",
                  "Compliance and regulatory expenses",
                ]}
              />
              <p className="prose-instrex mt-5">
                For imports, all logistics-related expenses—freight, customs duty, port charges, and
                handling—were fully accounted for.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="5. Unit Economics and Cost of Production" className="h-full">
              <p className="prose-instrex">
                To determine the true cost per cylinder, both cash and non-cash expenses were
                included.
              </p>
              <div className="mt-5 space-y-2">
                <p className="prose-instrex">- Cash Costs: Raw materials + OPEX</p>
                <p className="prose-instrex">- Non-Cash Costs: Depreciation</p>
                <p className="prose-instrex">
                  - Financial Costs: Interest on total capital employed (CAPEX + 3 months working
                  capital)
                </p>
              </div>
              <p className="prose-instrex mt-5">
                This ensured the analysis reflected the complete financial impact of each business
                model.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="6. Revenue, Profitability, and Sensitivity Analysis" className="h-full">
              <p className="prose-instrex">
                Revenues were calculated using the customer’s target selling price.
              </p>
              <p className="prose-instrex mt-5">The profitability assessment included:</p>
              <div className="mt-3 space-y-2">
                <p className="prose-instrex">- Monthly and annual profit projections</p>
                <p className="prose-instrex">- Breakeven and payback period analysis</p>
              </div>
              <p className="prose-instrex mt-5">
                A scenario-based sensitivity analysis was run across multiple production volumes to
                evaluate:
              </p>
              <div className="mt-3 space-y-2">
                <p className="prose-instrex">- Economies of scale</p>
                <p className="prose-instrex">- Movement in unit costs</p>
              </div>
              <p className="prose-instrex mt-5">
                Minimum viable production volume for profitability.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Conclusion and Recommendations</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <Reveal delay={0.1}>
            <Panel title="Key Insights" className="h-full">
              <p className="prose-instrex">
                The study concluded that manufacturing CNG cylinders in India from day one would not
                be financially viable, primarily due to:
              </p>
              <GoldList
                className="mt-4"
                items={[
                  "A steep operational learning curve — achieving regulatory compliance and manufacturing precision could take up to a year",
                  "High capital investment and fixed overheads",
                  "Unfavourable unit economics at lower volumes",
                  "Low or negative profitability in the initial years, even at target prices",
                ]}
              />
            </Panel>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel title="Stage 1: Import and Stabilize" className="h-full">
              <GoldList
                items={[
                  "Import finished CNG cylinders from certified Chinese suppliers",
                  "Obtain PESO certification for 1–2 partners",
                  "Begin supplying the OEM with minimal upfront investment",
                  "Build operational experience and market credibility",
                ]}
              />
            </Panel>
          </Reveal>
          <Reveal delay={0.3}>
            <Panel title="Stage 2: Transition to Local Manufacturing" className="h-full">
              <GoldList
                items={[
                  "Once demand stabilizes and internal capabilities strengthen",
                  "After establishing strong regulatory relationships (PESO, BIS)",
                  "Gradually shift to local manufacturing to reduce dependence on imports and improve margins over time",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-10">
          <p className="kicker">Recommended Two-Stage Strategy</p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>Outcome</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">
            This staged approach provided the OEM with a practical, low-risk entry strategy—balancing
            short-term feasibility with long-term competitiveness.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
