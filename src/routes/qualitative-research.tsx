import { createFileRoute } from "@tanstack/react-router";

import qualImage from "@/assets/case-qual.jpg";
import handshakeImage from "@/assets/insight-handshake.jpg";
import { Chapter, GoldList, NumberList, PageHeader, Section, Story } from "@/components/site/Layout";

export const Route = createFileRoute("/qualitative-research")({
  head: () => ({
    meta: [
      { title: "Qualitative Research Case Study — HoReCa F&B Growth" },
      {
        name: "description",
        content:
          "Reviving Growth for a HoReCa F&B Solutions Company — a qualitative research case study.",
      },
      {
        property: "og:title",
        content: "Qualitative Research Case Study — HoReCa F&B Growth",
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
        <Story>
          <Chapter label="Context" title="A strong product range, stalled growth">
            <p className="prose-body">
              A HoReCa-focused F&amp;B company had a solid product range and strong market presence,
              but growth had stalled.
            </p>
            <p className="prose-body">
              The problem wasn’t demand. It was that management had no shared view of the business,
              teams worked in silos, the corporate brand lacked clarity, and product brands ran
              independently of each other, confusing customers and diluting marketing spend.
            </p>
            <p className="prose-body">
              The core issues were structural: a blurred corporate identity, weak links between
              product brands and the parent company, inconsistent messaging across SKUs, and a sales
              culture built around discounts instead of relationships. Fixing marketing or sales in
              isolation wasn’t going to solve any of it.
            </p>
          </Chapter>

          <Chapter
            label="Research"
            title="Listening inside and outside the business"
            media={handshakeImage}
            mediaAlt="Stakeholder conversation during qualitative research"
          >
            <p className="prose-body">
              We ran a full qualitative research program covering both internal and external
              stakeholders.
            </p>
            <GoldList
              items={[
                "On the outside, we talked to HoReCa owners, chefs, distributors, and channel partners.",
                "On the inside, we spoke with sales, marketing, and operations teams.",
              ]}
            />
            <p className="prose-body">
              This showed us how internal misalignment was shaping what customers actually
              experienced and how they bought.
            </p>
          </Chapter>

          <Chapter label="Findings" title="Three issues, one growth plateau">
            <p className="prose-body">Three issues came up consistently:</p>
            <NumberList
              items={[
                "Product stories didn’t speak to the real problems chefs faced in their kitchens.",
                "Sales leaned on discounts instead of building partnerships, which capped loyalty and wallet share.",
                "And brand visuals and messaging were inconsistent enough to weaken trust and recognition.",
              ]}
            />
            <p className="prose-body">
              On their own, each looked like a minor operational issue. Together, they explained why
              growth had flattened.
            </p>
          </Chapter>

          <Chapter label="Recommendations" title="Three connected programs">
            <p className="prose-body">We built three connected programs:</p>
            <NumberList
              items={[
                "First, a product and packaging plan: reactivate underperforming SKUs with region-specific plans, align new products with actual HoReCa needs, and fix packaging and launch consistency.",
                "Second, a sales shift: move from transactional selling to relationship-led selling, backed by training, clearer guidelines, and real targets.",
                "Third, a brand reset: redefine the relationship between the corporate and product brands, build one clear identity, and roll it out across every touchpoint.",
              ]}
            />
          </Chapter>

          <Chapter label="Outcome" title="Alignment first, then growth">
            <p className="prose-body">
              Leadership got behind a single roadmap instead of separate fixes. SKU performance
              improved, customer relationships got stronger, and brand recall picked up. The company
              regained market share, and it came from fixing alignment first, not from another round
              of tactical patches.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
