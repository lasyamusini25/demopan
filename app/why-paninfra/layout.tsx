import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Why Pan Infra | Premium Real Estate Hyderabad | Plots, Villas & More",
  description: "Pan Infra offers 8 specialist real estate services in Hyderabad: residential plots, premium villas, gated communities, commercial plots, villa plots, investment properties, NRI corner, and property management. HMDA & DTCP approved. Serving Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and all Hyderabad growth corridors.",
  path: "/why-paninfra",
  keywords: [
    "real estate services Hyderabad", "residential plots Hyderabad",
    "premium villas Hyderabad", "gated community Hyderabad",
    "HMDA approved plots Hyderabad", "DTCP approved plots Hyderabad",
    "commercial plots Hyderabad", "villa plots Hyderabad",
    "NRI real estate Hyderabad", "property management Hyderabad",
    "investment plots Hyderabad", "plots in Shadnagar",
    "plots in Mokila", "villas in Kokapet",
    "plots in Adibatla", "real estate Tukkuguda",
    "buy plots Hyderabad", "buy villas Hyderabad",
    "Why Pan Infra", "real estate developer Hyderabad",
  ],
});

export default function WhyPanInfraLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
