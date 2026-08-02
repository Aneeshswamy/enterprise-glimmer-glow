import { createFileRoute } from "@tanstack/react-router";

import brandImage from "@/assets/case-brand.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/brand-strategy")({
  head: () => ({
    meta: [
      { title: "Brand Strategy Case Study — Premium Cosmetics | Instrex" },
      {
        name: "description",
        content:
          "Strategic Brand Identity for a Premium Cosmetics Brand, built on the Instrex 6-Dimension Brand Identity Model.",
      },
      { property: "og:title", content: "Brand Strategy Case Study — Premium Cosmetics | Instrex" },
      {
        property: "og:description",
        content:
          "A distinct and credible premium–luxury brand identity rooted in natural authenticity.",
      },
    ],
  }),
  component: BrandStrategy,
});

const dimensions = [
  {
    n: "1. Culture",
    d: "– Articulated the brand’s belief system, origin story, and worldview to root it in authenticity.",
  },
  {
    n: "2. Reflection",
    d: "– Defined the ideal customer beyond demographic, focusing on aspirations, attitudes, and lifestyle.",
  },
  {
    n: "3. Competence",
    d: "– Identified core strengths and expertise that credibly support a premium promise.",
  },
  {
    n: "4. Personality",
    d: "– Humanized the brand, defining its tone, attitude, and expressive style across touchpoints.",
  },
  {
    n: "5. Relationship",
    d: "– Outlined how the brand would emotionally and functionally connect with its consumers.",
  },
  {
    n: "6. Self-Image",
    d: "– Clarified how consumers see their ideal selves when engaging with the brand—a key driver for premium aspiration.",
  },
];

function BrandStrategy() {
  return (
    <>
      <PageHeader
        kicker="Brand Strategy"
        title="Strategic Brand Identity for a Premium Cosmetics Brand"
        image={brandImage}
        imageAlt="Premium natural cosmetics product still life"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Context</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A new cosmetics brand built on natural and authentic principles wanted to enter the
              market as a premium–luxury brand.
            </p>
            <p className="prose-instrex">
              The challenge was to craft an identity that could justify premium pricing and appeal to
              discerning consumers—without losing its natural and honest foundation.
            </p>
            <p className="prose-instrex">
              The brand needed a strategic identity system to guide its launch and future growth, not
              just a visual design exercise.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="Strategic Objective">
              <p className="prose-instrex">
                To develop a clear, differentiated brand identity that:
              </p>
              <GoldList
                className="mt-4"
                items={[
                  "Establishes a premium–luxury positioning from inception",
                  "Resonates with quality-driven, conscious consumers",
                  "Preserves the brand’s natural authenticity and credibility",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Approach: The 6-Dimension Brand Identity Model</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8 max-w-3xl">
          <p className="prose-instrex">
            Instrex applied its proprietary 6-Dimension Brand Identity Model to define the brand
            strategically before creative execution—ensuring clarity, consistency, and long-term
            relevance.
          </p>
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
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <p className="prose-instrex">
            Insights from the six dimensions were distilled into three strategic brand pillars:
          </p>
        </Reveal>
        <Stagger className="mt-10 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel title="Brand Essence" className="h-full">
              <p className="prose-instrex">
                – The brand’s core purpose and guiding values, forming the foundation for
                storytelling and decision-making.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Brand Positioning" className="h-full">
              <p className="prose-instrex">
                – A precise articulation of the brand’s unique value proposition and its
                differentiated space in the market.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel title="Brand Physique" className="h-full">
              <p className="prose-instrex">– The tangible expression of the brand, including:</p>
              <GoldList
                className="mt-4"
                items={[
                  "Visual identity (color palette, typography, imagery)",
                  "Tone of voice and verbal expression",
                  "Overall aesthetic aligned with premium and natural cues",
                ]}
              />
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">
              Deliverable: The Strategic Brand Identity Guidebook
            </SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              The outcome was a comprehensive Brand Identity Guidebook that defined:
            </p>
            <GoldList
              items={[
                "Strategic intent and direction",
                "Visual and verbal identity",
                "Consistency standards for future brand applications",
              ]}
            />
            <p className="prose-instrex">
              This guidebook became the brand’s launch foundation—a single, governing reference for
              all internal and external stakeholders.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Panel title="Business Impact">
              <p className="prose-instrex">The new identity system delivered clear strategic value by:</p>
              <GoldList
                className="mt-4"
                items={[
                  "Providing direction for product development and formulation choices",
                  "Guiding marketing campaigns and partnerships aligned with the premium ethos",
                  "Defining retail and experience design for both digital and physical touchpoints",
                  "Establishing a consistent, premium brand presence from launch",
                ]}
              />
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>Outcome</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">
            The result was a distinct and credible premium–luxury brand identity rooted in natural
            authenticity.
          </p>
          <p className="prose-instrex mt-5">
            By grounding creativity in strategic clarity, the brand entered the market with a strong,
            scalable foundation—capable of earning consumer trust, commanding premium value, and
            sustaining long-term growth.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
