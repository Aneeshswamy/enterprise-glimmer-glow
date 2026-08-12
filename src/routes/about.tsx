import { createFileRoute } from "@tanstack/react-router";

import approachImage from "@/assets/about-approach.jpg";
import ashutoshImage from "@/assets/ashutosh-tyagi.png";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Our Approach and Our Team" },
      {
        name: "description",
        content:
          "Sustainable business success is built on insight, not instinct. Meet the approach and our network of senior experts.",
      },
      { property: "og:title", content: "About — Our Approach and Our Team" },
      {
        property: "og:description",
        content:
          "Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain, IT, and Operations.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="Our Approach"
        image={approachImage}
        imageAlt="Executive reviewing business data visualisations"
      />

      <Section>
        <Reveal className="mx-auto max-w-3xl space-y-6">
          <p className="prose-body">
            Over the years, we’ve worked with both established enterprises and agile start-ups across
            industries in India, from FMCG and fashion to engineering and manufacturing. The lesson
            that comes up again and again: sustainable business success is built on insight, not
            instinct. Every strategic move should be guided by facts, data, and a clear understanding
            of the market.
          </p>
          <p className="prose-body">
            As a market research and business strategy consulting firm, our goal has always been to
            help leaders uncover opportunities, reduce risk, and make well-informed decisions,
            whether the work is business planning, go-to-market strategy, brand development, market
            research, or financial analysis.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionTitle>Our Team</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-body">
            Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain, IT,
            and Operations, most of whom have held CXO or business head roles in reputed
            organizations.
          </p>
          <p className="prose-body">
            Team members are brought onto a project based on the expertise it needs, so clients get
            direct access to relevant experience rather than a generalist team stretched across every
            function.
          </p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <div className="mx-auto grid w-full max-w-6xl gap-14 md:grid-cols-[0.55fr_1.45fr] md:items-start">
          <Reveal>
            <div className="glass-dark rounded-lg p-6">
              <div className="overflow-hidden rounded bg-charcoal">
                <img
                  src={ashutoshImage}
                  alt="Ashutosh Tyagi, Director and Partner"
                  width={375}
                  height={542}
                  loading="eager"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover object-[center_18%]"
                />
              </div>
              <div className="mt-6">
                <p className="font-sans text-base font-semibold text-ink-foreground">
                  Ashutosh Tyagi, Director and Partner
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="space-y-6">
            <p className="prose-body">
              Ashutosh leads the consulting practice. Before founding the firm, he held senior roles
              at Airtel, Kantar IMRB, Reliance, Globacom in Nigeria, Amway, and Vertebrand Consulting,
              working across telecom, market research, FMCG, and consulting.
            </p>
            <p className="prose-body">
              He holds an MBA from IIM Kozhikode and a B.Tech from Delhi University, giving him both
              the managerial and technical grounding the work needs.
            </p>
            <p className="prose-body">
              He works directly with senior business leaders, turning data into direction and
              strategy into results they can measure.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
