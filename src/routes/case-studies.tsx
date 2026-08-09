import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import quantImage from "@/assets/case-quant.jpg";
import qualImage from "@/assets/case-qual.jpg";
import brandImage from "@/assets/case-brand.jpg";
import gtmImage from "@/assets/case-gtm.jpg";
import financialImage from "@/assets/case-financial.jpg";
import { Stagger, StaggerItem, Reveal } from "@/components/site/Reveal";
import { Kicker, PageHeader, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Instrex Consulting Work" },
      {
        name: "description",
        content:
          "Instrex case studies across quantitative research, qualitative research, brand strategy, GTM planning, and financial analysis.",
      },
      { property: "og:title", content: "Case Studies — Instrex Consulting Work" },
      {
        property: "og:description",
        content:
          "Quantitative Research I Qualitative Research I Brand Strategy I GTM Plan I Financial Analysis",
      },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    label: "Quantitative Research",
    to: "/quantitative-research",
    image: quantImage,
    title: "Validating a Subscription Model for Senior Care",
  },
  {
    label: "Qualitative Research",
    to: "/qualitative-research",
    image: qualImage,
    title: "Reviving Growth for a HoReCa F&B Solutions Company",
  },
  {
    label: "Brand Strategy",
    to: "/brand-strategy",
    image: brandImage,
    title: "Building a Premium Brand Identity for a Natural Cosmetics Brand",
  },
  {
    label: "Go-To-Market Strategy",
    to: "/gtm-plan",
    image: gtmImage,
    title: "Launching a Subscription-Based Dairy Brand in Tier-2 and Tier-3 India",
  },
  {
    label: "Financial Analysis",
    to: "/financial-analysis",
    image: financialImage,
    title: "Make vs. Buy Decision for CNG Cylinder Manufacturing",
  },
];

function CaseStudies() {
  return (
    <>
      <PageHeader
        kicker="Instrex"
        title="Case Studies"
        image={qualImage}
        imageAlt="Instrex consulting case studies"
      />
      <Section>
        <Reveal>
          <Kicker>Selected work</Kicker>
          <SectionTitle className="mt-6">Case Studies</SectionTitle>
          <span className="gold-rule mt-8" />
        </Reveal>
        <Stagger className="mt-16 space-y-6">
          {cases.map((c) => (
            <StaggerItem key={c.to}>
              <Link
                to={c.to}
                className="lift group grid gap-8 overflow-hidden rounded-lg border border-hairline md:grid-cols-[0.42fr_1fr] md:items-center"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
                />
                <div className="p-8 md:pr-12">
                  <p className="kicker">{c.label}</p>
                  <h2 className="mt-4 font-display text-2xl leading-snug md:text-3xl">{c.title}</h2>
                  <span className="mt-6 inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </>
  );
}
