import { createFileRoute } from "@tanstack/react-router";

import gtmImage from "@/assets/case-gtm.jpg";
import {
  Chapter,
  GoldList,
  OutcomeMetrics,
  PageHeader,
  Section,
  Story,
  Timeline,
} from "@/components/site/Layout";

export const Route = createFileRoute("/gtm-plan")({
  head: () => ({
    meta: [
      { title: "GTM Plan Case Study — Subscription Dairy Brand" },
      {
        name: "description",
        content:
          "Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India — a three-phase launch delivering 5x subscription growth and over 60% monthly retention.",
      },
      { property: "og:title", content: "GTM Plan Case Study — Subscription Dairy Brand" },
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
        <Story>
          <Chapter label="Context" title="Changing a daily dairy habit">
            <p className="prose-body">
              A new raw milk and dairy brand wanted to enter Tier-2 and Tier-3 cities through a
              subscription app, one that also offered value-added dairy products and grocery
              essentials. The target customer was traditional dairy households, families who buy milk
              every day and care about quality, now being asked to trust an app for something they’ve
              always bought in person.
            </p>
            <p className="prose-body">
              The real challenge wasn’t the product. It was getting people to change a daily habit in
              a category where switching is easy and loyalty is low.
            </p>
          </Chapter>

          <Chapter label="Research" title="What we set out to do">
            <GoldList
              items={[
                "Build awareness beyond the usual early digital adopters",
                "Turn that awareness into app downloads and paid subscriptions",
                "Get people using it daily so retention and lifetime value hold up",
              ]}
            />
          </Chapter>

          <Chapter label="Findings" title="A three-phase launch">
            <Timeline
              steps={[
                {
                  label: "Phase 1",
                  title: "Pre-launch, building trust (30 to 45 days)",
                  children: (
                    <p className="prose-body">
                      Before going live, we focused on making the brand feel credible and consistent
                      everywhere someone might encounter it. This meant the logo, launch kits, and
                      press materials, the app listing, website, and social pages, and content
                      explaining sourcing and purity so people understood what they were signing up
                      for.
                    </p>
                  ),
                },
                {
                  label: "Phase 2",
                  title: "Launch, driving awareness and subscriptions (45 to 90 days)",
                  children: (
                    <div className="space-y-5">
                      <p className="prose-body">
                        We ran an omni-channel push to get visibility and conversions moving
                        together.
                      </p>
                      <p className="prose-body">
                        Offline, this meant print ads, bus panels, and local radio across the city.
                      </p>
                      <p className="prose-body">
                        Digitally, we used influencer partnerships, PR, app store optimization for
                        high-intent searches, and referral coupons targeted at specific housing
                        societies. We also leaned on stories about farmer partnerships and sourcing
                        transparency to build trust early.
                      </p>
                    </div>
                  ),
                },
                {
                  label: "Phase 3",
                  title: "Retention, turning users into daily habits (ongoing)",
                  children: (
                    <p className="prose-body">
                      Once people had tried the product, the focus shifted to keeping them. We used
                      push notifications timed before the 8 PM order cutoff, cashback for 7-day
                      prepaid plans, retargeting that named the actual delivery person, and WhatsApp
                      groups for recipes, contests, and feedback. The goal was to make ordering feel
                      routine, not like a decision each time.
                    </p>
                  ),
                },
              ]}
            />
          </Chapter>

          <Chapter label="Recommendations" title="What drove the result">
            <p className="prose-body">
              The pre-launch work built trust before the brand needed it. Balancing traditional and
              digital media got both scale and precision. The subscription model created recurring
              usage and opened the door to grocery cross-sell. And treating retention as a priority
              from day one, not an afterthought, kept churn low in a category where switching usually
              happens fast.
            </p>
          </Chapter>

          <Chapter label="Outcome" title="Results after six months">
            <OutcomeMetrics
              items={[
                { value: "5x", label: "growth in new subscriptions" },
                { value: "Over 60%", label: "monthly retention, above the category norm" },
                { value: "350%", label: "increase in milk delivery volumes" },
                { value: "42%", label: "top-of-mind brand recall" },
              ]}
            />
            <p className="prose-body">
              The brand turned a commodity product into a subscription business people actually stuck
              with, and built a real foothold as a daily essential across Tier-2 and Tier-3 markets.
            </p>
          </Chapter>
        </Story>
      </Section>
    </>
  );
}
