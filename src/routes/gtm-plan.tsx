import { createFileRoute } from "@tanstack/react-router";

import gtmImage from "@/assets/case-gtm.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  GoldList,
  KpiCard,
  NumberList,
  PageHeader,
  Section,
  SectionTitle,
  Timeline,
} from "@/components/site/Layout";

export const Route = createFileRoute("/gtm-plan")({
  head: () => ({
    meta: [
      { title: "GTM Plan Case Study — Subscription Dairy Brand | Instrex" },
      {
        name: "description",
        content:
          "GTM Plan for a Subscription-Based Dairy Brand — a three-phase launch roadmap delivering 5× subscription growth and 60%+ retention.",
      },
      { property: "og:title", content: "GTM Plan Case Study — Subscription Dairy Brand | Instrex" },
      {
        property: "og:description",
        content:
          "A disciplined, scalable market entry that turned a commoditized product into a subscription-driven growth engine.",
      },
    ],
  }),
  component: GtmPlan,
});

function GtmPlan() {
  return (
    <>
      <PageHeader
        kicker="GTM Plan"
        title="GTM Plan for a Subscription-Based Dairy Brand"
        image={gtmImage}
        imageAlt="Fresh dairy delivery for a subscription brand"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Context</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">
              A new raw-milk and dairy brand planned its entry into Tier-2 and Tier-3 Indian cities
              through a mobile subscription app. The platform offered more than daily milk delivery —
              it included value-added dairy products and curated grocery essentials.
            </p>
            <p className="prose-instrex">
              The brand targeted traditional dairy households — quality-conscious families used to
              daily milk consumption — now looking for convenience, reliability, and assurance
              through digital services.
            </p>
            <p className="prose-instrex">
              The key challenge: building awareness and creating new purchase habits in a high-churn,
              daily-use category.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">Launch Objective</SectionTitle>
            <span className="gold-rule" />
            <p className="prose-instrex">The launch strategy focused on three clear goals:</p>
            <NumberList
              items={[
                "Build Awareness – Establish rapid visibility beyond early digital adopters",
                "Drive App Downloads – Convert awareness into app installs and paid subscriptions",
                "Ensure Retention – Create daily-use habits to maximize customer lifetime value",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Approach: Three-Phase Launch Roadmap</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8 max-w-3xl">
            A structured three-phase plan was designed to move customers from discovery to habit
            formation.
          </p>
        </Reveal>
        <div className="mt-16">
          <Timeline
            steps={[
              {
                label: "Phase 1",
                title: "Pre-Launch — Building Trust and Curiosity (30–45 Days)",
                children: (
                  <>
                    <p className="prose-instrex">
                      The goal was to enter the market with credibility and consistency from day one.
                    </p>
                    <p className="prose-instrex mt-5">Key actions:</p>
                    <GoldList
                      className="mt-3"
                      items={[
                        "Developed brand assets — logo, launch kits, and press materials",
                        "Created digital assets — app store listings, landing site, and social channels",
                        "Designed educational content on purity, sourcing, and subscription benefits",
                      ]}
                    />
                    <p className="prose-instrex mt-5">
                      This phase ensured a cohesive brand story across all touchpoints.
                    </p>
                  </>
                ),
              },
              {
                label: "Phase 2",
                title: "Launch — Driving Awareness and Subscriptions (45–90 Days)",
                children: (
                  <>
                    <p className="prose-instrex">
                      An omni-channel activation campaign was rolled out to maximize reach and
                      conversion.
                    </p>
                    <p className="prose-instrex mt-5">Offline initiatives:</p>
                    <GoldList
                      className="mt-3"
                      items={["City-wide print ads, bus panels, and local radio"]}
                    />
                    <p className="prose-instrex mt-5">Digital tactics:</p>
                    <GoldList
                      className="mt-3"
                      items={[
                        "Influencer collaborations and digital PR",
                        "App Store Optimization (ASO) for high-intent searches",
                        "Referral coupons in housing societies and hyperlocal targeting",
                      ]}
                    />
                    <p className="prose-instrex mt-5">
                      Trust-building stories highlighted farmer partnerships and transparent sourcing
                      to strengthen credibility.
                    </p>
                  </>
                ),
              },
              {
                label: "Phase 3",
                title: "Retention — Habit Formation and Community Building (Ongoing)",
                children: (
                  <>
                    <p className="prose-instrex">
                      Once users experienced the product, focus shifted to daily retention and
                      engagement.
                    </p>
                    <p className="prose-instrex mt-5">Key levers:</p>
                    <GoldList
                      className="mt-3"
                      items={[
                        "Timely push notifications before the 8 PM order cutoff",
                        "Cashback for 7-day prepaid plans",
                        "Personalized retargeting with named delivery personnel",
                        "WhatsApp groups for recipes, contests, and feedback",
                      ]}
                    />
                    <p className="prose-instrex mt-5">
                      The aim was to turn customers into routine users and brand advocates.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Results: Six-Month Launch Performance</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">The structured rollout delivered impressive outcomes:</p>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerItem>
            <KpiCard value="5×" label="growth in new subscriptions" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="60%+" label="monthly retention, well above category benchmarks" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="350%" label="increase in milk delivery volumes" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="42%" label="top-of-mind brand recall, validating awareness and trust" />
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Key Success Levers</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl">
          <NumberList
            items={[
              "Pre-Launch Readiness – Built immediate trust and brand consistency",
              "Omni-Channel Reach – Balanced traditional and digital media for scale",
              "Subscription-Led Model – Drove recurring usage and grocery cross-sell",
              "Retention-First Thinking – Reduced churn in a typically low-loyalty category",
            ]}
          />
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>Outcome</SectionTitle>
          <span className="gold-rule mt-8" />
          <p className="prose-instrex mt-8">
            The launch blueprint created a disciplined and scalable market entry, turning a
            commoditized product into a subscription-driven growth engine.
          </p>
          <p className="prose-instrex mt-5">
            The brand quickly established itself as a trusted daily essential, laying the groundwork
            for sustainable expansion across Tier-2 and Tier-3 India.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
