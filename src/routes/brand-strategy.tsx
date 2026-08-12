import { createFileRoute } from "@tanstack/react-router";

import brandImage from "@/assets/case-brand.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [
      { title: "Brand Strategy Case Study — Natural Cosmetics | Instrex" },
      {
        name: "description",
        content:
          "Building a Premium Brand Identity for a Natural Cosmetics Brand, built on the Instrex 6-Dimension Brand Identity Model.",
      },
      { property: "og:title", content: "Brand Strategy Case Study — Natural Cosmetics | Instrex" },
      {
        property: "og:description",
        content:
          "A credible, premium brand identity that stayed rooted in its natural story.",
      },
    ],
  }),
  component: BrandStrategy,
});

const dimensions = [
  { n: "Culture", d: "the brand’s belief system, origin story, and worldview" },
  {
    n: "Reflection",
    d: "who the ideal customer really is, beyond age and income, their aspirations and lifestyle",
  },
  { n: "Competence", d: "the real strengths that back up a premium claim" },
  { n: "Personality", d: "how the brand talks and behaves, its tone and attitude" },
  { n: "Relationship", d: "how it connects with people, emotionally and practically" },
  {
    n: "Self-Image",
    d: "how people want to see themselves when they use it, which matters a lot for premium appeal",
  },
];

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
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">The Challenge</SectionTitle>
            <p className="prose-instrex">
              A new cosmetics brand built on natural, honest ingredients wanted to launch as premium
              to luxury. The hard part was doing that without losing what made it credible in the
              first place.
            </p>
            <p className="prose-instrex">
              This wasn’t a logo and color palette job. The brand needed a strategic identity that
              could justify premium pricing, appeal to consumers who actually know what they’re
              buying, and still feel true to its natural roots.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="What We Did">
              <p className="prose-instrex">
                We used our 6-Dimension Brand Identity Model to define the brand strategically before
                any creative work started.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>The 6-Dimension Brand Identity Model</SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {dimensions.map((d) => (
            <StaggerItem key={d.n}>
              <div className="glass-dark lift h-full rounded-lg p-7">
                <p className="font-sans text-base font-semibold text-gold">{d.n}</p>
                <p className="prose-instrex mt-3">{d.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Building the Brand Foundations</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">
            From these six dimensions, we built three foundations for the brand:
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel title="Brand Essence" className="h-full">
              <p className="prose-instrex">
                its core purpose and values, the base for everything else
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Brand Positioning" className="h-full">
              <p className="prose-instrex">
                the specific space it owns in the market and why
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Brand Physique" className="h-full">
              <p className="prose-instrex">
                how it actually looks and sounds, colors, typography, imagery, tone of voice, all tied
                to premium and natural cues
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">What We Delivered</SectionTitle>
            <p className="prose-instrex">
              A full Brand Identity Guidebook covering the strategic direction, the visual and verbal
              identity, and the standards to keep everything consistent as the brand grows. This
              became the single reference point for the launch team and everyone working on the brand
              after.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="The Impact">
              <p className="prose-instrex">
                The identity system shaped decisions well beyond marketing. It guided:
              </p>
              <GoldList
                className="mt-4"
                items={[
                  "Product development and formulation choices",
                  "Campaigns and partnership selection",
                  "Retail and experience design, both online and in stores",
                  "A consistent premium presence from day one",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>The Result</SectionTitle>
          <p className="prose-instrex mt-8">
            The brand launched with a credible, premium identity that stayed rooted in its natural
            story. Because the creative work was grounded in real strategy first, the brand had
            something solid to build on, not just a good-looking launch, but a foundation it could grow
            with.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
