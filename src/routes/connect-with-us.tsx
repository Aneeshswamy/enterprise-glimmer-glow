import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

import heroImage from "@/assets/hero-boardroom.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader, Panel, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/connect-with-us")({
  head: () => ({
    meta: [
      { title: "Connect with us — Instrex Consulting" },
      {
        name: "description",
        content:
          "Submit your enquiry below. Contact Instrex at business@instrex.in or +91 7011845620.",
      },
      { property: "og:title", content: "Connect with us — Instrex Consulting" },
      { property: "og:description", content: "Submit your enquiry below" },
    ],
  }),
  component: Connect,
});

const fieldClass =
  "w-full rounded border border-hairline bg-transparent px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

function Connect() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        kicker="Instrex"
        title="Connect with us"
        image={heroImage}
        imageAlt="Instrex consulting office"
      />

      <Section>
        <div className="grid gap-14 md:grid-cols-[1fr_0.85fr] md:items-start">
          <Reveal>
            <Panel title="Submit your enquiry below">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="kicker">
                    Your Name
                  </label>
                  <input id="name" name="name" className={`${fieldClass} mt-3`} />
                </div>
                <div>
                  <label htmlFor="email" className="kicker">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`${fieldClass} mt-3`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="kicker">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${fieldClass} mt-3 resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold px-8 py-4 font-sans text-[0.72rem] tracking-[0.2em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
                {sent ? (
                  <p className="font-sans text-xs tracking-[0.14em] text-gold uppercase">
                    Thank you — we will be in touch.
                  </p>
                ) : null}
              </form>
            </Panel>
          </Reveal>

          <Reveal delay={0.15} className="space-y-8">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <p className="font-sans text-base font-semibold">Contact Number +91 7011845620</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <p className="font-sans text-base font-semibold">Email: business@instrex.in</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
