import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact Pan Infra | Book a Free Site Visit — Plots & Villas Hyderabad",
  description: "Contact Pan Infra — Hyderabad's trusted real estate developer. Book a free site visit for premium plots and villas in Shadnagar, Mokila, Kokapet, Adibatla, Tukkuguda and across Hyderabad. Call us or fill in the enquiry form.",
  path: "/contact",
  keywords: [
    "contact Pan Infra", "book site visit Hyderabad", "real estate enquiry Hyderabad",
    "plots enquiry Hyderabad", "villa enquiry Hyderabad",
    "Pan Infra contact", "real estate contact Hyderabad",
    "buy plot Hyderabad contact", "NRI real estate enquiry Hyderabad",
    "property enquiry Shadnagar", "property enquiry Mokila", "property enquiry Kokapet",
  ],
});

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ background: "#111111", padding: "10rem 2.5rem 6rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "2rem" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, color: "#ffffff" }}>
            Let&apos;s Find Your Perfect Property
          </h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="md:grid-cols-2">
        {/* Info */}
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "2rem" }}>Corporate Office</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
            {[
              { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
              { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { label: "Address", value: SITE.address, href: undefined },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999999", marginBottom: "0.35rem" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: "1rem", color: "#111111", textDecoration: "none" }}>{item.value}</a>
                ) : (
                  <p style={{ fontSize: "1rem", color: "#111111" }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ border: "1px solid rgba(0,0,0,0.1)", overflow: "hidden" }}>
            <iframe
              title="Pan Infra office location"
              src="https://www.google.com/maps?q=Dallas+Centre,+Knowledge+City+Rd,+Rai+Durg,+Hyderabad,+Telangana+500032&output=embed"
              style={{ width: "100%", height: "320px", display: "block", border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </section>
    </>
  );
}
