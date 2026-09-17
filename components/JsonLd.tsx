import { company, isDemo } from "@/data/company";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: company.name,
        legalName: company.legalName,
        url: "https://solartime.it",
        email: company.email,
        telephone: company.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address,
          addressLocality: company.city,
          postalCode: company.cap,
          addressCountry: "IT",
        },
        description: isDemo
          ? "Azienda DEMO: fotovoltaico civile, industriale e a terra in Veneto. Dati fittizi."
          : company.claim,
      },
      {
        "@type": "WebSite",
        name: company.name,
        url: "https://solartime.it",
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
