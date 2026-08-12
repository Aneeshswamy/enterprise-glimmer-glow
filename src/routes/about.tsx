import { createFileRoute } from "@tanstack/react-router";

import approachImage from "@/assets/about-approach.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Kicker, PageHeader, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Instrex — Our Approach and Our Team" },
      {
        name: "description",
        content:
          "Sustainable business success is built on insight, not instinct. Meet the Instrex approach and our network of senior experts.",
      },
      { property: "og:title", content: "About Instrex — Our Approach and Our Team" },
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
        title="About Instrex"
        image={approachImage}
        imageAlt="Executive reviewing business data visualisations"
      />

      <Section>
        <Reveal>
          <SectionTitle>Our Approach</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal className="space-y-6">
            <p className="prose-instrex">
              Over the years, we’ve worked with both established enterprises and agile start-ups
              across industries in India, from FMCG and fashion to engineering and manufacturing. The
              lesson that comes up again and again: sustainable business success is built on insight,
              not instinct. Every strategic move should be guided by facts, data, and a clear
              understanding of the market.
            </p>
            <p className="prose-instrex">
              As a market research and business strategy consulting firm, our goal has always been to
              help leaders uncover opportunities, reduce risk, and make well-informed decisions,
              whether the work is business planning, go-to-market strategy, brand development, market
              research, or financial analysis.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full border border-gold/30" />
              <img
                src={approachImage}
                alt="Our approach at Instrex"
                loading="lazy"
                width={1600}
                height={1024}
                className="relative aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Reveal>
          <Kicker>Instrex</Kicker>
          <SectionTitle className="mt-6">Our Team</SectionTitle>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain, IT,
            and Operations, most of whom have held CXO or business head roles in reputed
            organizations.
          </p>
          <p className="prose-instrex">
            Team members are brought onto a project based on the expertise it needs, so clients get
            direct access to relevant experience rather than a generalist team stretched across every
            function.
          </p>
        </Reveal>
      </Section>

      <Section tone="ink">
        <div className="grid gap-14 md:grid-cols-[0.55fr_1.45fr] md:items-start">
          <Reveal>
            <div className="glass-dark rounded-lg p-6">
              <div className="flex aspect-[3/4] w-full items-end justify-center rounded bg-charcoal">
                <span className="pb-8 font-display text-6xl text-gold/40">AT</span>
              </div>
              <div className="mt-6">
                <p className="font-sans text-base font-semibold text-ink-foreground">
                  Ashutosh Tyagi, Director and Partner
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="space-y-6">
            <p className="prose-instrex">
              Ashutosh leads the consulting practice at Instrex. Before starting Instrex, he held
              senior roles at Airtel, Kantar IMRB, Reliance, Globacom in Nigeria, Amway, and
              Vertebrand Consulting, working across telecom, market research, FMCG, and consulting.
            </p>
            <p className="prose-instrex">
              He holds an MBA from IIM Kozhikode and a B.Tech from Delhi University, giving him both
              the managerial and technical grounding the work needs.
            </p>
            <p className="prose-instrex">
              He works directly with senior business leaders, turning data into direction and
              strategy into results they can measure.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
