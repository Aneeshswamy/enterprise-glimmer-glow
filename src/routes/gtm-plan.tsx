import { createFileRoute } from "@tanstack/react-router";

import gtmImage from "@/assets/case-gtm.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  GoldList,
  KpiCard,
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
          "Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India — a three-phase launch delivering 5x subscription growth and over 60% monthly retention.",
      },
      { property: "og:title", content: "GTM Plan Case Study — Subscription Dairy Brand | Instrex" },
      {
        property: "og:description",
        content:
          "The brand turned a commodity product into a subscription business people actually stuck with.",
      },
    ],
  }),
  component: GtmPlan,
});

function GtmPlan() {
  return (
    <>
      <PageHeader
        kicker="Go-To-Market Strategy"
        title="Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India"
        image={gtmImage}
        imageAlt="Fresh dairy delivery for a subscription brand"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <Reveal className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">The Challenge</SectionTitle>
            <p className="prose-instrex">
              A new raw milk and dairy brand wanted to enter Tier-2 and Tier-3 cities through a
              subscription app, one that also offered value-added dairy products and grocery
              essentials. The target customer was traditional dairy households, families who buy milk
              every day and care about quality, now being asked to trust an app for something they’ve
              always bought in person.
            </p>
            <p className="prose-instrex">
              The real challenge wasn’t the product. It was getting people to change a daily habit in
              a category where switching is easy and loyalty is low.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6">
            <SectionTitle className="text-2xl md:text-3xl">What We Set Out to Do</SectionTitle>
            <GoldList
              items={[
                "Build awareness beyond the usual early digital adopters",
                "Turn that awareness into app downloads and paid subscriptions",
                "Get people using it daily so retention and lifetime value hold up",
              ]}
            />
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal>
          <SectionTitle>Our Approach: A Three-Phase Launch</SectionTitle>
        </Reveal>
        <div className="mt-16">
          <Timeline
            steps={[
              {
                label: "Phase 1",
                title: "Pre-launch, building trust (30 to 45 days)",
                children: (
                  <p className="prose-instrex">
                    Before going live, we focused on making the brand feel credible and consistent
                    everywhere someone might encounter it. This meant the logo, launch kits, and press
                    materials, the app listing, website, and social pages, and content explaining
                    sourcing and purity so people understood what they were signing up for.
                  </p>
                ),
              },
              {
                label: "Phase 2",
                title: "Launch, driving awareness and subscriptions (45 to 90 days)",
                children: (
                  <>
                    <p className="prose-instrex">
                      We ran an omni-channel push to get visibility and conversions moving together.
                    </p>
                    <p className="prose-instrex mt-5">
                      Offline, this meant print ads, bus panels, and local radio across the city.
                    </p>
                    <p className="prose-instrex mt-5">
                      Digitally, we used influencer partnerships, PR, app store optimization for
                      high-intent searches, and referral coupons targeted at specific housing
                      societies. We also leaned on stories about farmer partnerships and sourcing
                      transparency to build trust early.
                    </p>
                  </>
                ),
              },
              {
                label: "Phase 3",
                title: "Retention, turning users into daily habits (ongoing)",
                children: (
                  <p className="prose-instrex">
                    Once people had tried the product, the focus shifted to keeping them. We used push
                    notifications timed before the 8 PM order cutoff, cashback for 7-day prepaid
                    plans, retargeting that named the actual delivery person, and WhatsApp groups for
                    recipes, contests, and feedback. The goal was to make ordering feel routine, not
                    like a decision each time.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionTitle>Results After Six Months</SectionTitle>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StaggerItem>
            <KpiCard value="5x" label="growth in new subscriptions" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="Over 60%" label="monthly retention, above the category norm" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="350%" label="increase in milk delivery volumes" />
          </StaggerItem>
          <StaggerItem>
            <KpiCard value="42%" label="top-of-mind brand recall" />
          </StaggerItem>
        </Stagger>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>What Drove This</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl">
          <p className="prose-instrex">
            The pre-launch work built trust before the brand needed it. Balancing traditional and
            digital media got both scale and precision. The subscription model created recurring usage
            and opened the door to grocery cross-sell. And treating retention as a priority from day
            one, not an afterthought, kept churn low in a category where switching usually happens
            fast.
          </p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="max-w-3xl">
          <SectionTitle>The Result</SectionTitle>
          <p className="prose-instrex mt-8">
            The brand turned a commodity product into a subscription business people actually stuck
            with, and built a real foothold as a daily essential across Tier-2 and Tier-3 markets.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
