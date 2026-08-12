import { createFileRoute } from "@tanstack/react-router";

import brandImage from "@/assets/case-brand.jpg";
import { Chapter, GoldList, NumberList, PageHeader, Section, Story } from "@/components/site/Layout";

export const Route = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [
      { title: "Brand Strategy Case Study — Natural Cosmetics" },
      {
        name: "description",
        content:
          "Building a Premium Brand Identity for a Natural Cosmetics Brand, built on the 6-Dimension Brand Identity Model.",
      },
      { property: "og:title", content: "Brand Strategy Case Study — Natural Cosmetics" },
      {
        property: "og:description",
        content: "A credible, premium brand identity that stayed rooted in its natural story.",
      },
    ],
  }),
  component: BrandStrategy,
});

function BrandStrategy() {
  return (
    <>
      <PageHeader
        kicker="Brand Strategy"
        title="Building a Premium Brand Identity for a Natural Cosmetics Brand"
        image={brandImage}
        imageAlt="Premium natural cosmetics product still life"
      />

      <Section>
        <Story>
          <Chapter label="Context" title="Premium without losing credibility">
            <p className="prose-body">
              A new cosmetics brand built on natural, honest ingredients wanted to launch as premium
              to luxury. The hard part was doing that without losing what made it credible in the
              first place.
            </p>
            <p className="prose-body">
              This wasn’t a logo and color palette job. The brand needed a strategic identity that
              could justify premium pricing, appeal to consumers who actually know what they’re
              buying, and still feel true to its natural roots.
            </p>
          </Chapter>

          <Chapter label="Research" title="The 6-Dimension Brand Identity Model">
            <p className="prose-body">
              We used our 6-Dimension Brand Identity Model to define the brand strategically before
              any creative work started.
            </p>
            <NumberList
              items={[
                <>
                  <strong>Culture</strong> — the brand’s belief system, origin story, and worldview
                </>,
                <>
                  <strong>Reflection</strong> — who the ideal customer really is, beyond age and
                  income, their aspirations and lifestyle
                </>,
                <>
                  <strong>Competence</strong> — the real strengths that back up a premium claim
                </>,
                <>
                  <strong>Personality</strong> — how the brand talks and behaves, its tone and
                  attitude
                </>,
                <>
                  <strong>Relationship</strong> — how it connects with people, emotionally and
                  practically
                </>,
                <>
                  <strong>Self-Image</strong> — how people want to see themselves when they use it,
                  which matters a lot for premium appeal
                </>,
              ]}
            />
          </Chapter>

          <Chapter label="Findings" title="Three foundations for the brand">
            <p className="prose-body">
              From these six dimensions, we built three foundations for the brand:
            </p>
            <NumberList
              items={[
                <>
                  <strong>Brand Essence</strong> — its core purpose and values, the base for
                  everything else
                </>,
                <>
                  <strong>Brand Positioning</strong> — the specific space it owns in the market and
                  why
                </>,
                <>
                  <strong>Brand Physique</strong> — how it actually looks and sounds, colors,
                  typography, imagery, tone of voice, all tied to premium and natural cues
                </>,
              ]}
            />
          </Chapter>

          <Chapter label="Recommendations" title="One Brand Identity Guidebook">
            <p className="prose-body">
              A full Brand Identity Guidebook covering the strategic direction, the visual and verbal
              identity, and the standards to keep everything consistent as the brand grows. This
              became the single reference point for the launch team and everyone working on the brand
              after.
            </p>
            <p className="prose-body">The identity system shaped decisions well beyond marketing. It guided:</p>
            <GoldList
              items={[
                "Product development and formulation choices",
                "Campaigns and partnership selection",
                "Retail and experience design, both online and in stores",
                "A consistent premium presence from day one",
              ]}
            />
          </Chapter>

          <Chapter label="Outcome" title="A foundation that could grow">
            <p className="prose-body">
              The brand launched with a credible, premium identity that stayed rooted in its natural
              story. Because the creative work was grounded in real strategy first, the brand had
              something solid to build on, not just a good-looking launch, but a foundation it could
              grow with.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
