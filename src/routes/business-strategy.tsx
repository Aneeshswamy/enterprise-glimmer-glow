import { createFileRoute } from "@tanstack/react-router";

import strategyImage from "@/assets/service-strategy.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { GoldList, PageHeader, Panel, Section, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/business-strategy")({
  head: () => ({
    meta: [
      { title: "Business Strategy — Instrex Growth Blueprint" },
      {
        name: "description",
        content:
          "Insight-driven Strategic Business Planning, Go To Market Strategy, Strategic Brand Identity, and Business And Financial Planning.",
      },
      { property: "og:title", content: "Business Strategy — Instrex Growth Blueprint" },
      {
        property: "og:description",
        content:
          "Growth doesn’t happen by chance. It’s the result of in-depth market and customer understanding, smart planning, precise execution, and continuous refinement.",
      },
    ],
  }),
  component: BusinessStrategy;
});

function BusinessStrategy() {
  return null;
}
