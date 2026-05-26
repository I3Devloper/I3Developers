import { site } from "@/data/site";
import type { Service } from "@/data/services";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: site.phone,
  foundingDate: site.foundingYear,
  description: site.description,
  hasMap: site.googleMapsUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude
  },
  areaServed: site.serviceAreas.map((name) => ({
    "@type": "City",
    name
  })),
  sameAs: site.sameAs
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${site.url}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
});

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  priceRange: site.priceRange,
  image: absoluteUrl(site.defaultOgImage),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude
  },
  openingHoursSpecification: site.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes
  })),
  areaServed: site.serviceAreas.map((name) => ({
    "@type": "City",
    name
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${site.name} Services`,
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Design & Development",
          description: "Custom, fast, SEO-optimized websites for local businesses"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Services",
          description: "Local search optimization, technical SEO, and content strategy"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description: "Campaign strategy, social media, and lead generation"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ecommerce Development",
          description: "Online stores with optimized checkout and product discovery"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom App Development",
          description: "Mobile and web applications for business workflows"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding & Print",
          description: "Identity systems, logos, and print collateral"
        }
      }
    ]
  },
  sameAs: site.sameAs
});

export const webPageSchema = (title: string, description: string, url: string, datePublished?: string, dateModified?: string) => {
  const base = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US"
  } as Record<string, unknown>;

  if (datePublished) base.datePublished = datePublished;
  if (dateModified) base.dateModified = dateModified;
  else if (datePublished) base.dateModified = datePublished;

  return base;
};

export const articleSchema = (title: string, description: string, url: string, publishedDate: string, modifiedDate: string, authorName: string, authorUrl: string, imageUrl?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${url}#article`,
  headline: title,
  description,
  url,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  author: {
    "@type": "Person",
    name: authorName,
    url: authorUrl,
    "@id": `${site.url}/#author-${authorName.toLowerCase().replace(/\s+/g, "-")}`
  },
  publisher: { "@id": `${site.url}/#organization` },
  isPartOf: { "@id": `${url}#webpage` },
  ...(imageUrl ? { image: { "@id": `${url}#primaryimage` } } : {}),
  inLanguage: "en-US",
  mainEntityOfPage: { "@id": `${url}#webpage` }
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url)
  }))
});

export const serviceSchema = (service: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: site.serviceAreas,
  serviceType: service.shortTitle,
  url: absoluteUrl(`/services/${service.slug}/`),
  category: service.keywords.join(", "),
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: absoluteUrl(`/services/${service.slug}/`)
  }
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const howToSchema = (title: string, description: string, steps: { name: string; text: string; url?: string }[], url: string) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  url,
  step: steps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.name,
    text: step.text,
    ...(step.url ? { url: step.url } : {})
  }))
});
