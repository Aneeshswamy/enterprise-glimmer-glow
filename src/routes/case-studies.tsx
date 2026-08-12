import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import quantImage from "@/assets/case-quant.jpg";
import qualImage from "@/assets/case-qual.jpg";
import brandImage from "@/assets/case-brand.jpg";
import gtmImage from "@/assets/case-gtm.jpg";
import financialImage from "@/assets/case-financial.jpg";
import bridgeImage from "@/assets/bridge-insight-impact.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies" },
      {
        name: "description",
        content:
          "Case studies across quantitative research, qualitative research, brand strategy, GTM planning, and financial analysis.",
      },
      { property: "og:title", content: "Case Studies" },
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
        title="Case Studies"
        image={bridgeImage}
        imageAlt="Selected research and strategy case studies"
      />
      <Section>
        <div className="space-y-0">
          {cases.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.05}>
              <Link
                to={c.to}
                className="group grid gap-8 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={720}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div>
                  <p className="kicker">{c.label}</p>
                  <h2 className="mt-5 font-display text-2xl leading-snug md:text-3xl">{c.title}</h2>
                  <span className="mt-8 inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.2em] text-gold uppercase">
                    Read case study
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
