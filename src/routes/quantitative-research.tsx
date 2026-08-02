import { createFileRoute } from "@tanstack/react-router";

import quantImage from "@/assets/case-quant.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  GoldList,
  NumberList,
  PageHeader,
  Panel,
  Section,
  SectionTitle,
} from "@/components/site/Layout";

export const Route = createFileRoute("/quantitative-research")({
  head: () => ({
    meta: [
      { title: "Quantitative Research Case Study — Senior Care Platform | Instrex" },
      {
        name: "description",
        content:
          "Concept Testing and Go-to-Market Strategy for a Subscription-Based Senior Care Platform — an Instrex quantitative research case study.",
      },
      {
        property: "og:title",
        content: "Quantitative Research Case Study — Senior Care Platform | Instrex",
      },
      {
        property: "og:description",
        content:
          "A structured, face-to-face quantitative study across five major South Indian cities validated demand, pricing, and GTM segmentation.",
      },
    ],
  }),
  component: QuantitativeResearch,
});

function QuantitativeResearch() {
  return (
    <>
      <PageHeader
        kicker="Quantitative Research"
        title="Concept Testing and Go-to-Market Strategy for a Subscription-Based Senior Care Platform"
        image={quantImage}
        imageAlt="Indian senior citizens receiving in-home care services"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_0.8fr] md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Context</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A senior care provider wanted to launch a subscription-based platform for urban senior
              citizens, combining multiple in-home services—such as healthcare, housekeeping, and
              assistance—into a single, trusted plan.
            </p>
            <p className="prose-instrex">
              The biggest uncertainty was adoption. Before investing in product development, pricing,
              and marketing, the client needed data-driven clarity on whether seniors would:
            </p>
            <GoldList
              items={[
                "See real value in a bundled subscription model",
                "Switch from their existing, unbundled service providers",
              ]}
            />
            <p className="prose-instrex">Show sufficient willingness to pay</p>
          </Reveal>

          <Reveal delay={0.15}>
            <Panel title="Research Objective">
              <p className="prose-instrex">The study aimed to:</p>
              <div className="mt-5">
                <NumberList
                  items={[
                    "Validate the appeal and perceived value of a subscription-based senior care platform",
                    "Assess willingness to pay and switching intent",
                    "Identify which of the three proposed plans—Superior, Prime, or Basic—had the strongest market potential",
                  ]}
                />
              </div>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Research Approach</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <Panel title="Quantitative Concept Testing" className="h-full">
              <p className="prose-instrex">
                A structured, face-to-face quantitative study was conducted across five major South
                Indian cities.
              </p>
              <p className="prose-instrex mt-5">
                The study explored concept appeal, plan preference, perceived value, and current
                spending behavior.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={0.2}>
            <Panel title="Sample Profile:" className="h-full">
              <GoldList
                items={[
                  "300 senior citizens aged 65+ (singles and couples)",
                  "Decision-makers or strong influencers in household service choices",
                  "Urban, service-aware markets with exposure to home-based care",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Key Insights</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel title="High Existing Spend Shows Readiness to Subscribe" className="h-full">
              <p className="prose-instrex">
                Seniors were already spending considerable amounts each month on individual
                providers—especially for healthcare and housekeeping.
              </p>
              <p className="prose-instrex mt-5">Implications:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Low price resistance for the right, value-rich offer",
                  "Strong desire for convenience, coordination, and reliability",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Premium Bundles Drive Stronger Interest" className="h-full">
              <p className="prose-instrex">Among the three plans tested:</p>
              <GoldList
                className="mt-3"
                items={[
                  "Prime showed the highest adoption intent",
                  "Superior performed strongly",
                  "Basic had limited appeal",
                ]}
              />
              <p className="prose-instrex mt-5">
                Seniors preferred comprehensive, premium solutions that offered assurance and
                dependability over stripped-down, low-cost options.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Core Services That Define Value" className="h-full">
              <p className="prose-instrex">
                Three in-home services consistently drove perceived value across all segments:
              </p>
              <GoldList
                className="mt-3"
                items={[
                  "Medicine delivery",
                  "Regular medical check-ups",
                  "Maid/home cleaning services",
                ]}
              />
              <p className="prose-instrex mt-5">
                Bundles missing these were unlikely to attract meaningful adoption.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Strategic Recommendations</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel title="Product & Pricing Strategy" className="h-full">
              <GoldList
                items={[
                  "Focus on launching Superior and Prime plans",
                  "Defer or drop the Basic plan",
                  "Position pricing by emphasizing the all-in-one convenience compared to juggling multiple providers",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Value Communication" className="h-full">
              <p className="prose-instrex">
                Adoption would be driven more by trust and peace of mind than cost savings.
              </p>
              <p className="prose-instrex mt-5">Key brand messages included:</p>
              <GoldList
                className="mt-3"
                items={[
                  "“One trusted partner” for all senior care needs",
                  "Comprehensive care and convenience",
                  "Reduced stress for both seniors and their families",
                ]}
              />
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Go-to-Market Segmentation" className="h-full">
              <p className="prose-instrex">
                Two audience clusters emerged with distinct media habits:
              </p>
              <GoldList
                className="mt-3"
                items={[
                  "Traditional retirees: Vernacular TV and print newspapers",
                  "Digitally active seniors/caregivers: OTT platforms and social media",
                ]}
              />
              <p className="prose-instrex mt-5">
                This segmentation enabled a targeted, cost-efficient media strategy.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Outcome</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Reveal delay={0.1} className="space-y-5">
            <p className="prose-instrex">
              The research provided a clear, low-risk roadmap for launch:
            </p>
            <GoldList
              items={[
                "Validated market demand for a subscription-based senior care model",
                "Identified Superior and Prime as the optimal offerings",
                "Delivered a focused product and GTM strategy",
              ]}
            />
          </Reveal>
          <Reveal delay={0.2} className="space-y-5">
            <p className="prose-instrex">
              As a result, the client moved forward with greater confidence, achieving:
            </p>
            <GoldList
              items={["A de-risked market entry", "Faster payback through focused targeting"]}
            />
            <p className="prose-instrex">
              A scalable foundation for growth in the senior care sector
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
