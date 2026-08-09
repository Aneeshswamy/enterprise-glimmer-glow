import { createFileRoute } from "@tanstack/react-router";

import quantImage from "@/assets/case-quant.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/quantitative-research")({
  head: () => ({
    meta: [
      { title: "Quantitative Research Case Study — Senior Care Platform | Instrex" },
      {
        name: "description",
        content:
          "Validating a Subscription Model for Senior Care — an Instrex quantitative research case study across five South Indian cities.",
      },
      {
        property: "og:title",
        content: "Quantitative Research Case Study — Senior Care Platform | Instrex",
      },
      {
        property: "og:description",
        content:
          "A face-to-face quantitative study with 300 seniors validated demand, plan preference, and go-to-market segmentation.",
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
        title="Validating a Subscription Model for Senior Care"
        image={quantImage}
        imageAlt="Indian senior citizens receiving in-home care services"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_0.8fr] md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">The Challenge</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A senior care provider wanted to launch a subscription platform that bundled healthcare,
              housekeeping, and daily assistance into one plan for urban seniors.
            </p>
            <p className="prose-instrex">
              Before spending on product and marketing, they needed to know if seniors would actually
              value the bundle, switch providers for it, and pay for it.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Panel title="What We Did">
              <p className="prose-instrex">
                We ran a face-to-face quantitative study across five South Indian cities.
              </p>
              <p className="prose-instrex mt-5">
                We surveyed 300 seniors, all 65 or older, all decision-makers on household services.
                We tested three plans: Superior, Prime, and Basic.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>What We Found</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                Seniors were already spending a lot each month on individual providers, mostly for
                healthcare and housekeeping. That told us price wasn’t the main barrier. What they
                wanted was convenience and someone reliable to coordinate everything.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                Prime got the strongest response. Superior did well too. Basic barely moved the
                needle. Seniors wanted a full solution, not a cut-down version.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                Three services came up again and again as the ones that actually mattered: medicine
                delivery, regular check-ups, and home cleaning. Any bundle missing these struggled to
                land.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>What We Recommended</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">Launch Superior and Prime. Drop Basic for now.</p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                Sell the idea of one trusted partner instead of leading with price.
              </p>
            </Panel>
          </StaggerItem>
          <StaggerItem>
            <Panel className="h-full">
              <p className="prose-instrex">
                Split the marketing too: traditional retirees respond to vernacular TV and print,
                while digitally active seniors and their caregivers are on OTT and social media.
              </p>
            </Panel>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>The Result</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">
            The client had clear proof that the model worked, a shortlist of which plans to build, and
            a go-to-market plan built around real audience segments. That gave them a faster,
            lower-risk path to launch.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
