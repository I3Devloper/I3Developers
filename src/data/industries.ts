export type Industry = {
  slug: string;
  title: string;
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

export const industries: Industry[] = [
  {
    slug: "restaurant-web-design-lafayette-la",
    title: "Restaurant Web Design in Lafayette, LA",
    metaTitle: "Restaurant Web Design Lafayette LA | i3Developers",
    description: "Restaurant website design in Lafayette, LA with menus, local SEO, mobile performance, online ordering paths, and review proof.",
    eyebrow: "Restaurant websites",
    hero: "Restaurant websites that make hungry visitors call, order, or walk through the door.",
    intro: "Restaurant buyers decide fast. They want to see the menu, check hours, find the location, and either order online or call for a reservation. Your website needs to make all of that effortless on a phone, because that is where most restaurant searches happen.",
    outcomes: [
      "Mobile-first menu design that is easy to read and update",
      "Online ordering integration paths",
      "Google review proof and local SEO for food searches",
      "Hours, location, and contact information front and center"
    ],
    process: [
      "Audit your current site and competitor restaurant sites in Lafayette",
      "Design menu, ordering, and reservation flows for mobile users",
      "Build fast pages with structured data for local restaurant search",
      "Launch with Google Business Profile alignment and review strategy"
    ],
    faqs: [
      {
        question: "Should our restaurant website include online ordering?",
        answer: "If your restaurant takes phone orders, an online ordering system can reduce call volume, increase average order value, and give customers a faster experience. We help you choose between third-party platforms and direct ordering based on your margins and operational needs."
      },
      {
        question: "How important are photos for a restaurant website?",
        answer: "Critical. Food is visual. High-quality photos of your dishes, dining room, and team build appetite and trust before the customer ever walks in. We can guide you on photography or work with your existing images."
      },
      {
        question: "Can you optimize our restaurant for Google Maps?",
        answer: "Yes. Google Business Profile optimization, consistent citations, menu schema markup, and local review strategy all contribute to appearing in the Maps pack when someone searches for restaurants near them in Lafayette."
      }
    ],
    keywords: ["restaurant web design Lafayette LA", "restaurant website Lafayette", "Lafayette restaurant SEO"]
  },
  {
    slug: "law-firm-web-design-seo-lafayette-la",
    title: "Law Firm Web Design & SEO in Lafayette, LA",
    metaTitle: "Law Firm Web Design & SEO Lafayette LA | i3Developers",
    description: "Professional law firm website design and SEO in Lafayette, LA. Build trust, rank for legal searches, and convert case inquiries into clients.",
    eyebrow: "Legal websites",
    hero: "Law firm websites that build trust before the first consultation call.",
    intro: "People searching for a lawyer in Lafayette are usually stressed, in a hurry, and comparing multiple firms. Your website needs to answer their questions quickly, demonstrate your expertise, and make it easy to contact you. Every page should reduce anxiety and build confidence.",
    outcomes: [
      "Practice area pages optimized for specific legal searches",
      "Attorney bio pages that build personal trust and credibility",
      "Clear consultation paths with phone and form options",
      "ADA-compliant design for accessibility requirements"
    ],
    process: [
      "Research the legal search landscape and competitor firms in Lafayette",
      "Map practice areas to high-intent search queries",
      "Design authoritative, accessible pages with strong trust signals",
      "Launch with local SEO, review strategy, and content plan"
    ],
    faqs: [
      {
        question: "What makes a law firm website different from other business sites?",
        answer: "Law firm websites need to balance authority with approachability. They must demonstrate expertise without being intimidating, provide clear information about practice areas, and make it easy for potential clients to reach out during what is often a stressful time."
      },
      {
        question: "Do law firm websites need to be ADA compliant?",
        answer: "Yes. Law firms are particularly vulnerable to ADA website accessibility lawsuits. We build websites that meet WCAG 2.1 AA standards, including proper heading structure, color contrast, keyboard navigation, and screen reader compatibility."
      },
      {
        question: "Can you help with attorney bio pages?",
        answer: "Absolutely. Attorney bio pages are often the most visited pages on a law firm website. We help craft bios that highlight experience, case results, education, and personal background in a way that builds trust with potential clients."
      }
    ],
    keywords: ["law firm web design Lafayette LA", "attorney website Lafayette", "lawyer SEO Lafayette LA"]
  },
  {
    slug: "contractor-web-design-seo-lafayette-la",
    title: "Contractor Web Design & SEO in Lafayette, LA",
    metaTitle: "Contractor Web Design & SEO Lafayette LA | i3Developers",
    description: "Contractor website design and local SEO in Lafayette, LA. Showcase projects, rank for service searches, and generate qualified leads.",
    eyebrow: "Contractor websites",
    hero: "Contractor websites that turn project photos into phone calls.",
    intro: "Contractors in Lafayette compete on reputation and proof. Your website should showcase your best work, explain your process, and make it easy for homeowners and businesses to request estimates. Before-and-after photos, project galleries, and clear service descriptions are essential.",
    outcomes: [
      "Project gallery with before and after photos",
      "Service area pages for each community you serve",
      "Estimate request forms with project details",
      "Local SEO for contractor searches in Lafayette and surrounding areas"
    ],
    process: [
      "Audit your current site and identify your strongest project examples",
      "Design project-focused pages with galleries, descriptions, and CTAs",
      "Build service area pages for Lafayette, Broussard, Youngsville, and beyond",
      "Launch with Google Business Profile optimization and review strategy"
    ],
    faqs: [
      {
        question: "How many project photos should a contractor website include?",
        answer: "Quality over quantity. Ten to fifteen strong project examples with clear before-and-after comparisons are more effective than a hundred mediocre photos. Each project should include a description of the work, the challenge, and the result."
      },
      {
        question: "Should we create separate pages for each service?",
        answer: "Yes. If you offer roofing, siding, remodeling, and new construction, each should have its own page. This helps you rank for specific searches like 'roofing contractor Lafayette LA' and gives visitors the information they need without scrolling through unrelated services."
      },
      {
        question: "How do we get more Google reviews as a contractor?",
        answer: "Ask at the right moment: right after completing a project when the customer is happiest. Send a direct link to your Google review page via text or email. Make it as easy as possible. We help set up a review request system that runs automatically."
      }
    ],
    keywords: ["contractor web design Lafayette LA", "contractor website Lafayette", "construction SEO Lafayette LA"]
  },
  {
    slug: "medical-practice-web-design-lafayette-la",
    title: "Medical Practice Web Design in Lafayette, LA",
    metaTitle: "Medical Practice Web Design Lafayette LA | i3Developers",
    description: "Medical practice website design in Lafayette, LA. Patient-friendly design, HIPAA-aware forms, appointment booking, and local healthcare SEO.",
    eyebrow: "Healthcare websites",
    hero: "Medical websites that make patients feel confident before they ever walk in.",
    intro: "Patients researching a medical practice in Lafayette want to know: does this doctor treat my condition, can I get an appointment quickly, and will my insurance be accepted. Your website needs to answer these questions clearly and make scheduling effortless.",
    outcomes: [
      "Patient-friendly design with clear navigation and accessibility",
      "Provider bio pages that build patient trust",
      "Online appointment scheduling integration",
      "HIPAA-aware contact forms and patient communication paths"
    ],
    process: [
      "Understand your patient demographics and most common conditions",
      "Design accessible, easy-to-navigate pages for all age groups",
      "Build provider profiles, service pages, and scheduling flows",
      "Launch with local healthcare SEO and Google Business Profile optimization"
    ],
    faqs: [
      {
        question: "Does a medical practice website need to be HIPAA compliant?",
        answer: "Any website that collects patient health information through forms or portals needs HIPAA-compliant handling. We design forms that avoid collecting protected health information directly and integrate with secure patient portals when needed."
      },
      {
        question: "How important is mobile design for a medical practice?",
        answer: "Extremely important. Many patients search for doctors on their phones, especially for urgent care needs. Your website must load fast, display clearly on small screens, and make it easy to call or book an appointment from a mobile device."
      },
      {
        question: "Can you help with patient reviews and testimonials?",
        answer: "We can help you set up a review request system and display Google reviews on your website. However, medical practices must be careful with patient testimonials due to HIPAA regulations. We guide you on what is permissible and how to showcase patient satisfaction appropriately."
      }
    ],
    keywords: ["medical practice web design Lafayette LA", "doctor website Lafayette", "healthcare SEO Lafayette LA"]
  },
  {
    slug: "real-estate-web-design-lafayette-la",
    title: "Real Estate Web Design in Lafayette, LA",
    metaTitle: "Real Estate Web Design Lafayette LA | i3Developers",
    description: "Real estate agent and brokerage website design in Lafayette, LA. Property listings,IDX integration, neighborhood guides, and lead generation.",
    eyebrow: "Real estate websites",
    hero: "Real estate websites that turn property browsers into serious buyers and sellers.",
    intro: "Real estate buyers and sellers in Lafayette start their search online. Whether you are an individual agent or a full brokerage, your website needs to showcase listings, demonstrate local market knowledge, and capture leads from visitors who are ready to make a move.",
    outcomes: [
      "IDX listing integration or curated property showcases",
      "Neighborhood and community guide pages",
      "Seller lead capture with home valuation tools",
      "Local market expertise content that builds authority"
    ],
    process: [
      "Determine your IDX needs and MLS integration requirements",
      "Design property-focused layouts with search and filter capabilities",
      "Build neighborhood pages that demonstrate local market knowledge",
      "Launch with lead capture forms and local real estate SEO"
    ],
    faqs: [
      {
        question: "Can you integrate MLS listings into our website?",
        answer: "Yes. We can integrate IDX feeds that display live MLS listings on your website. This keeps visitors on your site longer and positions you as the go-to resource for Lafayette real estate searches."
      },
      {
        question: "How do we capture seller leads online?",
        answer: "Home valuation tools, neighborhood market reports, and seller guide content are effective lead magnets. We build landing pages that offer these resources in exchange for contact information, then follow up with automated email sequences."
      },
      {
        question: "Should we create content about Lafayette neighborhoods?",
        answer: "Absolutely. Neighborhood-specific content is one of the most effective SEO strategies for real estate. Pages about Broussard schools, Youngsville amenities, or downtown Lafayette living attract highly targeted search traffic from people actively considering those areas."
      }
    ],
    keywords: ["real estate web design Lafayette LA", "realtor website Lafayette", "real estate SEO Lafayette LA"]
  },
  {
    slug: "oil-gas-company-web-design-lafayette-la",
    title: "Oil & Gas Company Web Design in Lafayette, LA",
    metaTitle: "Oil & Gas Company Web Design Lafayette LA | i3Developers",
    description: "Industrial and oil & gas company website design in Lafayette, LA. B2B credibility, safety certifications, service capabilities, and recruitment pages.",
    eyebrow: "Industrial websites",
    hero: "Industrial websites that project capability, safety, and reliability to B2B buyers.",
    intro: "Oil and gas companies in the Acadiana region serve a B2B audience that evaluates vendors based on capability, safety record, certifications, and project history. Your website needs to communicate all of this clearly to procurement teams, project managers, and potential recruits.",
    outcomes: [
      "Capability statements and equipment showcases",
      "Safety certification and compliance documentation",
      "Project history and case study pages",
      "Recruitment and careers section for talent acquisition"
    ],
    process: [
      "Audit your current digital presence and competitor industrial sites",
      "Map your services, certifications, and project history to web pages",
      "Design professional, B2B-focused layouts with strong credibility signals",
      "Launch with industry-specific SEO and recruitment optimization"
    ],
    faqs: [
      {
        question: "What should an oil & gas company website include?",
        answer: "Key elements include capability statements, safety records and certifications, equipment and fleet information, project case studies, leadership team bios, and a careers section. B2B buyers in the energy sector research vendors thoroughly before making contact."
      },
      {
        question: "How do we attract qualified recruits through our website?",
        answer: "A dedicated careers section with clear job descriptions, company culture content, benefits information, and an easy application process. We also optimize these pages for job-related searches so candidates in the Lafayette area can find you."
      },
      {
        question: "Do industrial companies need SEO?",
        answer: "Yes, but the strategy is different from consumer-focused businesses. Industrial SEO targets specific service keywords, geographic areas, and industry terms that procurement teams and project managers search for. The traffic volume is lower, but the intent and deal sizes are much higher."
      }
    ],
    keywords: ["oil gas web design Lafayette LA", "industrial website Lafayette", "energy company SEO Acadiana"]
  },
  {
    slug: "automotive-dealer-web-design-lafayette-la",
    title: "Automotive Dealer Web Design in Lafayette, LA",
    metaTitle: "Automotive Dealer Web Design Lafayette LA | i3Developers",
    description: "Car dealership website design in Lafayette, LA. Inventory display, financing paths, service scheduling, and local automotive SEO.",
    eyebrow: "Automotive websites",
    hero: "Dealership websites that move inventory and fill service bays.",
    intro: "Car buyers in Lafayette research online before they ever visit a lot. Your dealership website needs to showcase inventory clearly, make financing information accessible, and drive both sales and service department traffic. Speed and mobile performance are critical.",
    outcomes: [
      "Inventory display with search, filter, and detail pages",
      "Financing calculator and credit application paths",
      "Service department scheduling and maintenance reminders",
      "Local automotive SEO for new and used car searches"
    ],
    process: [
      "Evaluate your inventory management system and integration needs",
      "Design vehicle-focused layouts with clear pricing and specifications",
      "Build financing, trade-in, and service scheduling flows",
      "Launch with local automotive SEO and Google Business Profile optimization"
    ],
    faqs: [
      {
        question: "Can you integrate our inventory management system?",
        answer: "Yes. We can integrate with most dealership inventory management platforms to display live vehicle listings on your website. This ensures your online inventory always matches what is actually on the lot."
      },
      {
        question: "How do we drive more service department appointments online?",
        answer: "A dedicated service section with online scheduling, maintenance reminders, and clear service descriptions. Many customers prefer to book service appointments online rather than calling. We make that process as simple as possible."
      },
      {
        question: "What is the most important page on a dealership website?",
        answer: "The vehicle detail page. This is where buyers decide whether to visit the lot or move on. It needs high-quality photos, complete specifications, pricing, financing options, and a clear call to action. We optimize every vehicle detail page for both user experience and search visibility."
      }
    ],
    keywords: ["automotive dealer web design Lafayette LA", "car dealership website Lafayette", "auto dealer SEO Lafayette"]
  },
  {
    slug: "insurance-agency-web-design-lafayette-la",
    title: "Insurance Agency Web Design in Lafayette, LA",
    metaTitle: "Insurance Agency Web Design Lafayette LA | i3Developers",
    description: "Insurance agency website design in Lafayette, LA. Policy information, quote requests, agent bios, and local insurance SEO.",
    eyebrow: "Insurance websites",
    hero: "Insurance websites that make getting a quote feel simple and personal.",
    intro: "Insurance buyers in Lafayette want to understand their coverage options, compare policies, and talk to a real agent. Your website needs to educate visitors about their insurance needs, make the quote process straightforward, and build trust in your agency's expertise.",
    outcomes: [
      "Policy type pages that explain coverage in plain language",
      "Online quote request forms with smart conditional logic",
      "Agent team pages that build personal connections",
      "Local insurance SEO for Lafayette and Acadiana searches"
    ],
    process: [
      "Map your insurance products to the searches Lafayette buyers make",
      "Design educational policy pages that simplify complex coverage topics",
      "Build quote request flows that capture the right information without overwhelming",
      "Launch with local SEO, Google Business Profile, and content strategy"
    ],
    faqs: [
      {
        question: "How do we make insurance information easy to understand?",
        answer: "Avoid industry jargon. Write policy descriptions in plain language that a first-time buyer can understand. Use comparison tables, FAQs, and real-world examples to help visitors understand what coverage they actually need."
      },
      {
        question: "Should we include a quote calculator on our website?",
        answer: "A quote request form is more practical than a calculator for most independent agencies. We build smart forms that ask the right questions for each insurance type and route the information to your team for accurate quoting."
      },
      {
        question: "How do we compete with national insurance company websites?",
        answer: "Local knowledge and personal service. National sites cannot match your understanding of Lafayette-specific risks, local regulations, and community relationships. We make sure your website communicates these advantages clearly."
      }
    ],
    keywords: ["insurance agency web design Lafayette LA", "insurance website Lafayette", "insurance SEO Acadiana"]
  }
];

export const getIndustry = (slug: string) => industries.find((industry) => industry.slug === slug);
