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
        title="Our Approach"
        image={approachImage}
        imageAlt="Executive reviewing business data visualisations"
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-start">
          <Reveal className="space-y-6">
            <p className="prose-instrex">
              Over the years, we’ve had the opportunity to work with both established enterprises
              and agile start-ups across diverse industries. The most important lesson we’ve learned
              from this experience is that sustainable business success is built on insight, not
              instinct. Every strategic move should be guided by facts, data, and a clear
              understanding of the market. We firmly believe that decisions grounded in information
              and business science lead to stronger, more resilient organizations.
            </p>
            <p className="prose-instrex">
              Whether it’s business planning, go-to-market strategy, brand development, market
              research, or financial analysis, our goal has always been to help leaders uncover
              opportunities, mitigate risks, and make confident, well-informed decisions.
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
          <span className="gold-rule mt-8" />
        </Reveal>
        <Reveal delay={0.1} className="mt-10 max-w-3xl space-y-6">
          <p className="prose-instrex">
            Our team is a network of senior experts in Marketing, Sales, Finance, Supply Chain, IT,
            and Operations. They have held leadership roles such as CXOs and business heads in
            reputed organizations.
          </p>
          <p className="prose-instrex">
            Team members collaborate on projects based on the expertise required, bringing together
            deep knowledge and global experience to deliver practical, high-impact solutions.
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
                <span className="gold-rule mt-4" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="space-y-6">
            <p className="prose-instrex">
              Ashutosh, Director and Senior Consultant at Instrex, leads the consulting practice.
              Earlier in his career, he held senior positions in several notable organizations,
              including Airtel, Kantar IMRB, Reliance, Globacom (Nigeria), Amway, and Vertebrand
              Consulting. These experiences have enriched his global business perspective and
              sharpened his strategic acumen.
            </p>
            <p className="prose-instrex">
              An alumnus of IIM Kozhikode and Delhi University, Ashutosh holds an MBA and a B.Tech,
              giving him a strong foundation in both managerial insight and technical understanding.
            </p>
            <p className="prose-instrex">
              He is a trusted advisor to senior business leaders, transforming data into direction,
              insight into impact, and strategy into tangible results
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
