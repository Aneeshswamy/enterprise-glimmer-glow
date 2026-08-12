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
          "Reviving Growth for a HoReCa F&B Solutions Company — a qualitative research case study by Instrex.",
      },
      {
        property: "og:title",
        content: "Qualitative Research Case Study — HoReCa F&B Growth | Instrex",
      },
      {
        property: "og:description",
        content:
          "A full qualitative research program across internal and external stakeholders uncovered the real barriers behind a growth plateau.",
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
        title="Reviving Growth for a HoReCa F&B Solutions Company"
        image={qualImage}
        imageAlt="Professional kitchen team in a hospitality environment"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">The Challenge</SectionTitle>
            <p className="prose-instrex">
              A HoReCa-focused F&amp;B company had a solid product range and strong market presence,
              but growth had stalled.
            </p>
            <p className="prose-instrex">
              The problem wasn’t demand. It was that management had no shared view of the business,
              teams worked in silos, the corporate brand lacked clarity, and product brands ran
              independently of each other, confusing customers and diluting marketing spend.
            </p>
            <p className="prose-instrex">
              The core issues were structural: a blurred corporate identity, weak links between
              product brands and the parent company, inconsistent messaging across SKUs, and a sales
              culture built around discounts instead of relationships. Fixing marketing or sales in
              isolation wasn’t going to solve any of it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="What We Did">
              <p className="prose-instrex">
                We ran a full qualitative research program covering both internal and external
                stakeholders.
              </p>
              <GoldList
                className="mt-4"
                items={[
                  "On the outside, we talked to HoReCa owners, chefs, distributors, and channel partners.",
                  "On the inside, we spoke with sales, marketing, and operations teams.",
                ]}
              />
              <p className="prose-instrex mt-5">
                This showed us how internal misalignment was shaping what customers actually
                experienced and how they bought.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>What We Found</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="prose-instrex">Three issues came up consistently:</p>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            "Product stories didn’t speak to the real problems chefs faced in their kitchens.",
            "Sales leaned on discounts instead of building partnerships, which capped loyalty and wallet share.",
            "And brand visuals and messaging were inconsistent enough to weaken trust and recognition.",
          ].map((item) => (
            <StaggerItem key={item}>
              <Panel className="h-full">
                <p className="prose-instrex">{item}</p>
              </Panel>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2} className="mt-10 max-w-3xl">
          <p className="prose-instrex">
            On their own, each looked like a minor operational issue. Together, they explained why
            growth had flattened.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>What We Recommended</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">We built three connected programs:</p>
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            "First, a product and packaging plan: reactivate underperforming SKUs with region-specific plans, align new products with actual HoReCa needs, and fix packaging and launch consistency.",
            "Second, a sales shift: move from transactional selling to relationship-led selling, backed by training, clearer guidelines, and real targets.",
            "Third, a brand reset: redefine the relationship between the corporate and product brands, build one clear identity, and roll it out across every touchpoint.",
          ].map((item) => (
            <StaggerItem key={item}>
              <Panel className="h-full">
                <p className="prose-instrex">{item}</p>
              </Panel>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>The Result</SectionTitle>
          <p className="prose-instrex mt-8">
            Leadership got behind a single roadmap instead of separate fixes. SKU performance
            improved, customer relationships got stronger, and brand recall picked up. The company
            regained market share, and it came from fixing alignment first, not from another round of
            tactical patches.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
