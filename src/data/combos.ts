import { locations } from "./locations";
import { services } from "./services";

export type ComboPage = {
  slug: string;
  city: string;
  citySlug: string;
  serviceTitle: string;
  serviceSlug: string;
  serviceShortTitle: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  hero: string;
  intro: string;
  outcomes: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
};

const cityServiceIntros: Record<string, Record<string, string>> = {
  "Web Design & Development": {
    "Broussard": "Broussard businesses need websites that reflect the quality and professionalism of a rapidly growing community. We build custom, fast-loading websites that help Broussard companies stand out and convert local visitors into customers.",
    "Youngsville": "Youngsville is one of the fastest-growing cities in Louisiana. Your website needs to keep pace. We design and develop sites that capture Youngsville buyer intent, load instantly, and make your business look like the obvious choice.",
    "Carencro": "Carencro businesses serve a diverse local market. We build websites that speak directly to Carencro buyers, showcase your services clearly, and make it easy for visitors to call, email, or request a quote.",
    "Scott": "Scott is known for great food and great people. We build websites for Scott businesses that are just as welcoming: fast, clear, and designed to turn visitors into loyal customers.",
    "Breaux Bridge": "Breaux Bridge has a unique character that your website should reflect. We design sites that capture the spirit of the Crawfish Capital while delivering the performance and SEO that modern search demands.",
    "New Iberia": "New Iberia businesses deserve websites as distinctive as the city itself. We build custom sites that rank for local searches, showcase your best work, and make contacting you effortless."
  },
  "SEO Services": {
    "Broussard": "Local SEO for Broussard businesses means appearing when nearby buyers search for your services. We optimize your website, Google Business Profile, and local citations to make sure Broussard customers find you first.",
    "Youngsville": "Youngsville search competition is growing. We help your business stay ahead with targeted local SEO: optimized service pages, Google Business Profile management, review strategy, and content that builds topical authority.",
    "Carencro": "Carencro buyers search locally for the services they need. We make sure your business appears with technical SEO fixes, local keyword optimization, Google Business Profile enhancement, and consistent citation building.",
    "Scott": "Scott businesses can dominate local search with the right SEO strategy. We optimize your online presence for Scott-specific searches, build local authority, and create content that demonstrates your expertise to nearby buyers.",
    "Breaux Bridge": "Breaux Bridge businesses often compete with Lafayette companies in search results. We level the playing field with hyperlocal SEO: city-specific keyword targeting, local citation cleanup, and Google Business Profile optimization.",
    "New Iberia": "New Iberia has a strong local economy and buyers who search online first. We help your business capture that search traffic with targeted SEO, optimized service pages, and a review strategy that builds trust."
  },
  "Marketing Agency": {
    "Broussard": "Marketing for Broussard businesses requires understanding the local market, the competition, and where buyers spend their attention. We connect your message to the right channels and measure every dollar.",
    "Youngsville": "Youngsville businesses need marketing that keeps up with the city's growth. We build campaigns that reach new residents, engage existing customers, and drive measurable leads through digital channels.",
    "Carencro": "Carencro marketing means reaching the right audience at the right time. We plan and execute campaigns across search, social, and email that connect your services with local buyers actively looking for them.",
    "Scott": "Scott businesses thrive on community trust. We build marketing campaigns that amplify that trust: local content, social media engagement, targeted ads, and landing pages that convert attention into action.",
    "Breaux Bridge": "Breaux Bridge marketing needs to honor the community while reaching new customers. We create campaigns that feel local, authentic, and results-driven across digital channels.",
    "New Iberia": "New Iberia businesses benefit from marketing that understands the local culture and buying patterns. We build campaigns that resonate with New Iberia audiences and drive real business results."
  },
  "Social Media Marketing": {
    "Broussard": "Social media for Broussard businesses builds community awareness and drives local engagement. We plan content that connects with Broussard audiences and links back to your website and offers.",
    "Youngsville": "Youngsville is active online. We help your business join the conversation with strategic social media content, targeted campaigns, and landing pages that turn social engagement into real leads.",
    "Carencro": "Carencro businesses can use social media to build trust and stay top of mind. We create content calendars, design platform-specific creative, and measure what actually matters: engagement, traffic, and leads.",
    "Scott": "Scott has a strong community identity. We help your business leverage social media to participate in that community, share your story, and connect with local customers where they already spend time online.",
    "Breaux Bridge": "Social media for Breaux Bridge businesses should feel as authentic as the community itself. We create content that celebrates local culture while driving business results through strategic campaigns.",
    "New Iberia": "New Iberia businesses can use social media to build brand awareness and connect with local audiences. We plan, create, and measure social campaigns that support your broader marketing goals."
  },
  "Ecommerce Development": {
    "Broussard": "Broussard businesses selling online need ecommerce sites that are fast, secure, and easy to manage. We build storefronts optimized for local pickup, shipping, and the buying habits of Acadiana customers.",
    "Youngsville": "Youngsville ecommerce businesses need sites that convert browsers into buyers. We design product pages, category structures, and checkout flows that maximize sales and minimize abandoned carts.",
    "Carencro": "Carencro businesses ready to sell online need more than a shopping cart. We build complete ecommerce experiences: product discovery, trust signals, easy checkout, and local delivery or pickup options.",
    "Scott": "Scott businesses can expand their reach with a well-built online store. We design ecommerce sites that showcase products beautifully, load fast, and make buying as simple as possible.",
    "Breaux Bridge": "Breaux Bridge businesses with unique products deserve ecommerce sites that tell their story. We build online stores that combine compelling product presentation with smooth checkout and local SEO.",
    "New Iberia": "New Iberia businesses selling online need ecommerce platforms that handle their product catalog, payment processing, and shipping logistics. We build stores that grow with your business."
  },
  "Custom App Development": {
    "Broussard": "Broussard businesses with unique workflow needs can benefit from custom apps. We help define, design, and build mobile and web applications that solve real problems for your team and customers.",
    "Youngsville": "Youngsville businesses are growing and sometimes off-the-shelf software does not fit. We build custom apps that streamline operations, improve customer experiences, and give you a competitive edge.",
    "Carencro": "Carencro businesses need tools that work the way they work. We develop custom applications that replace manual processes, connect disconnected systems, and make your team more efficient.",
    "Scott": "Scott businesses with specific operational challenges can solve them with custom software. We build apps that fit your exact workflow, integrate with your existing tools, and scale as you grow.",
    "Breaux Bridge": "Breaux Bridge businesses deserve technology that matches their ambition. We develop custom applications that solve unique problems, improve customer experiences, and support business growth.",
    "New Iberia": "New Iberia businesses ready to digitize their operations need custom solutions. We build apps that replace spreadsheets, automate workflows, and give you real-time visibility into your business."
  },
  "Custom Software Development": {
    "Broussard": "Broussard businesses running on disconnected systems and manual processes can transform their operations with custom software. We build tools that fit your exact needs.",
    "Youngsville": "Youngsville businesses growing fast often outgrow their existing tools. We develop custom software that scales with you, connects your systems, and eliminates the bottlenecks that slow you down.",
    "Carencro": "Carencro businesses need software that works as hard as they do. We build custom applications that automate repetitive tasks, connect your data, and give your team the tools they actually need.",
    "Scott": "Scott businesses deserve software that fits their operations, not the other way around. We develop custom solutions that streamline workflows, reduce errors, and improve team productivity.",
    "Breaux Bridge": "Breaux Bridge businesses with unique operational needs can benefit from custom-built software. We design and develop tools that solve your specific challenges and integrate with your existing systems.",
    "New Iberia": "New Iberia businesses ready to modernize their operations need custom software that understands their industry. We build applications that replace outdated processes and drive efficiency."
  },
  "Branding & Print": {
    "Broussard": "Broussard businesses need branding that reflects their quality and connects with the local community. We create identity systems, logos, and print materials that make your business memorable.",
    "Youngsville": "Youngsville businesses growing into new markets need branding that scales. We design logos, identity systems, and print collateral that work across your website, signage, and marketing materials.",
    "Carencro": "Carencro businesses deserve branding that stands out in a competitive market. We create visual identities, business cards, signage, and marketing materials that build recognition and trust.",
    "Scott": "Scott businesses with strong community roots need branding that honors that heritage while looking forward. We design identities and print materials that feel authentic and professional.",
    "Breaux Bridge": "Breaux Bridge businesses benefit from branding that captures the city's unique character. We create logos, identity systems, and print designs that make your business instantly recognizable.",
    "New Iberia": "New Iberia businesses need branding that reflects the city's rich culture and your company's quality. We design complete identity systems that work across digital and print touchpoints."
  }
};

export const comboPages: ComboPage[] = [];

for (const location of locations) {
  for (const service of services) {
    const introKey = service.shortTitle;
    const cityKey = location.city;
    const intro = cityServiceIntros[introKey]?.[cityKey] || `${location.city} businesses need ${service.shortTitle.toLowerCase()} that connects with local buyers. We deliver ${service.shortTitle.toLowerCase()} tailored to the ${location.city} market.`;

    const slug = `${service.slug}-in-${location.slug}`;
    comboPages.push({
      slug,
      city: location.city,
      citySlug: location.slug,
      serviceTitle: service.title,
      serviceSlug: service.slug,
      serviceShortTitle: service.shortTitle,
      metaTitle: `${service.shortTitle} in ${location.city}, LA | i3Developers`,
      description: `${service.shortTitle} services in ${location.city}, LA. i3Developers delivers ${service.shortTitle.toLowerCase()} tailored to ${location.city} businesses with local expertise and proven results.`,
      eyebrow: `${location.city} ${service.shortTitle}`,
      hero: `${service.shortTitle} built for ${location.city} businesses that want to stand out and win more local customers.`,
      intro,
      outcomes: service.outcomes.map((o) => o.replace("Lafayette", location.city)),
      process: service.process.map((p) => p.replace("Lafayette", location.city)),
      faqs: service.faqs.slice(0, 3).map((faq) => ({
        ...faq,
        answer: faq.answer.replace(/Lafayette/g, location.city)
      })),
      keywords: [
        `${service.shortTitle.toLowerCase()} ${location.city} LA`,
        `${location.city} ${service.shortTitle.toLowerCase()}`,
        `${service.keywords[0]} ${location.city}`
      ]
    });
  }
}

export const getComboPage = (slug: string) => comboPages.find((page) => page.slug === slug);
