export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
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

export const services: Service[] = [
  {
    slug: "lafayette-website-development-web-design",
    title: "Web Design & Web Development in Lafayette, LA",
    shortTitle: "Web Design",
    metaTitle: "Web Design, SEO & Digital Marketing | Lafayette, LA",
    description:
      "Expert web design, SEO, and digital marketing in Lafayette, Louisiana. i3Developers builds websites and strategies that rank, convert, and grow your business.",
    eyebrow: "Fast websites that sell",
    hero: "Custom websites built to rank, convert, and make Lafayette businesses look impossible to ignore.",
    intro:
      "Your website should not behave like a brochure in a drawer. We plan, write, design, and develop websites that load quickly, answer buyer questions, support local SEO, and turn visitors into real conversations.",
    outcomes: [
      "Conversion-focused design for calls, quote requests, and consultations",
      "Technical SEO foundations, clean headings, fast pages, and crawlable content",
      "Responsive builds with strong mobile performance and Core Web Vitals",
      "Flexible content sections for service updates, proof, FAQs, and local landing pages"
    ],
    process: [
      "Audit rankings, Search Console data, and conversion paths",
      "Map pages to target keywords and local buyer intent",
      "Design high-trust pages with proof, service clarity, and strong CTAs",
      "Launch with analytics, search checks, and post-launch monitoring"
    ],
    faqs: [
      {
        question: "Will the new website keep our existing SEO value?",
        answer:
          "Yes. Existing URLs are preserved where possible, and any changed URL should receive a direct permanent redirect to its most relevant new page. We audit every existing page before launch and map redirects to protect your search visibility."
      },
      {
        question: "Why does site speed matter for a local business website?",
        answer:
          "Fast pages make it easier for mobile visitors to browse, compare, and contact the business without friction. Google also uses page speed as a ranking factor, and slow sites lose visitors before they even see your services."
      },
      {
        question: "How long does a custom website take to build?",
        answer:
          "A typical business website takes 3 to 6 weeks from kickoff to launch, depending on the number of pages, content readiness, and any custom features. We give you a clear timeline upfront and stick to it."
      },
      {
        question: "Do you write the website content or do we provide it?",
        answer:
          "We can do either. Many Lafayette businesses prefer that we write the content because it ensures the copy is optimized for search intent, structured for conversions, and aligned with the design. If you already have content, we will audit and improve it."
      },
      {
        question: "Can we update the website ourselves after launch?",
        answer:
          "Yes. We build websites with content management in mind. Depending on your platform, you will be able to update text, images, blog posts, and service pages without touching code. We provide training and documentation with every launch."
      },
      {
        question: "What makes your web design different from a template or Wix site?",
        answer:
          "Templates are built for everyone and optimized for no one. We design around your specific buyers, your local competition, your service structure, and your conversion goals. The result is a site that loads faster, ranks better, and converts more visitors into leads."
      },
      {
        question: "Do you handle domain registration and hosting?",
        answer:
          "We can help you choose the right domain and hosting setup, or work with what you already have. For most clients, we recommend fast, secure static hosting that eliminates plugin vulnerabilities and keeps maintenance costs near zero."
      }
    ],
    keywords: ["web design Lafayette LA", "website development Lafayette LA", "Lafayette web designer"]
  },
  {
    slug: "search-engine-marketing-seo-services-lafayette-la",
    title: "SEO Services in Lafayette, LA",
    shortTitle: "SEO Services",
    metaTitle: "SEO Services Lafayette LA | i3Developers Marketing Agency",
    description:
      "SEO Services Lafayette LA from i3Developers help businesses improve search rankings, increase website traffic, and generate more qualified local leads.",
    eyebrow: "Local search visibility",
    hero: "SEO that makes your best customers find you before they find a competitor.",
    intro:
      "Local SEO works when your site, content, business profile, reviews, technical health, and local authority tell the same story. We build that system page by page.",
    outcomes: [
      "Keyword mapping for Lafayette service intent",
      "Technical SEO audits, metadata, internal linking, and speed improvements",
      "Business profile alignment and local proof strategy",
      "Content plans for service pages, industry pages, FAQs, and case studies"
    ],
    process: [
      "Benchmark rankings, competitors, business profile performance, and crawl issues",
      "Strengthen priority pages for relevance, depth, and conversion",
      "Build local topical authority with proof-led content",
      "Report progress through Search Console, analytics, and lead quality"
    ],
    faqs: [
      {
        question: "Can SEO guarantee a number one ranking?",
        answer:
          "No one can honestly guarantee a permanent number one ranking, but a strong local SEO system can improve relevance, prominence, technical quality, and conversion performance. We focus on building a sustainable system that compounds over time rather than chasing shortcuts that risk penalties."
      },
      {
        question: "How long does local SEO take?",
        answer:
          "Technical fixes can help quickly, but competitive local ranking improvements usually take several months of consistent content, reviews, links, and optimization. Most clients see measurable movement within 60 to 90 days, with stronger results building over 6 to 12 months."
      },
      {
        question: "What is the difference between local SEO and national SEO?",
        answer:
          "Local SEO focuses on ranking in the Google Maps pack and local organic results for searches with geographic intent, like 'plumber near me' or 'web designer Lafayette LA.' National SEO targets broader keywords without location modifiers. Local SEO is generally faster and more cost-effective for businesses that serve a specific area."
      },
      {
        question: "Do I need SEO if I already run Google Ads?",
        answer:
          "Ads stop working the moment you stop paying. SEO builds a permanent asset that generates organic traffic without ongoing ad spend. The most effective strategy uses both: ads for immediate leads while SEO builds long-term visibility and reduces your cost per acquisition over time."
      },
      {
        question: "How do you measure SEO success?",
        answer:
          "We track keyword rankings, organic traffic, Google Business Profile views and actions, search impressions in Search Console, and most importantly, the quality and volume of leads coming from organic search. Vanity metrics like traffic alone do not tell the full story."
      },
      {
        question: "What does a typical SEO engagement include?",
        answer:
          "A technical audit, on-page optimization for priority pages, Google Business Profile optimization, local citation cleanup, content creation for service and industry pages, internal linking improvements, and monthly reporting with Search Console and analytics data."
      }
    ],
    keywords: ["SEO services Lafayette LA", "local SEO Lafayette", "search engine marketing Lafayette"]
  },
  {
    slug: "best-marketing-agency-services-lafayette",
    title: "Marketing Agency Services in Lafayette, LA",
    shortTitle: "Marketing Agency",
    metaTitle: "Marketing Agency Lafayette LA | SEO & Web Design Experts",
    description:
      "Looking for a trusted Marketing Agency Lafayette LA businesses rely on? i3Developers provides web design, SEO, and digital marketing solutions that grow brands.",
    eyebrow: "Strategy plus execution",
    hero: "Campaigns, content, search, and websites working together instead of shouting separately.",
    intro:
      "We connect the moving parts: the website, message, search presence, social proof, paid campaigns, and follow-up path. The result is a marketing system a local business can actually use.",
    outcomes: [
      "Digital strategy for local awareness and lead generation",
      "Landing pages, campaign messaging, and conversion paths",
      "Search, social, and paid media coordination",
      "Reporting that connects activity to business outcomes"
    ],
    process: [
      "Define the buyer, offer, market, and strongest proof",
      "Build campaigns around clear landing pages and measurable calls to action",
      "Publish, test, and improve messaging across channels",
      "Use data to refine spend, content, and conversion opportunities"
    ],
    faqs: [
      {
        question: "What makes a marketing agency useful for a local business?",
        answer:
          "A useful agency connects strategy to implementation, keeps the website and local SEO strong, and measures leads rather than vanity metrics alone. We focus on what actually moves the needle for Lafayette businesses: more calls, more form submissions, and more qualified conversations."
      },
      {
        question: "Do you handle paid advertising as well as organic strategy?",
        answer:
          "Yes. We plan and manage Google Ads, social media ads, and retargeting campaigns alongside organic SEO and content strategy. The key is making sure every paid dollar points to a landing page that is built to convert, not just to your homepage."
      },
      {
        question: "How do you decide which marketing channels to use?",
        answer:
          "We start with where your buyers are already looking. For most local businesses, that means Google search and the Google Maps pack first, then social media for awareness and retargeting, then email for retention. We let data, not assumptions, guide the channel mix."
      },
      {
        question: "Can you work with our existing marketing materials?",
        answer:
          "Absolutely. We audit what you already have, keep what works, improve what does not, and fill the gaps. This includes your website, social profiles, email campaigns, print materials, and any existing ad accounts."
      },
      {
        question: "How do you report on marketing performance?",
        answer:
          "We provide monthly reports that connect activity to business outcomes: how many leads came from each channel, what those leads cost, and which pages or campaigns performed best. We use Search Console, Google Analytics, and your CRM data when available."
      }
    ],
    keywords: ["marketing agency Lafayette LA", "digital marketing Lafayette", "online marketing Lafayette LA"]
  },
  {
    slug: "social-media-marketing-in-lafayette-la",
    title: "Social Media Marketing in Lafayette, LA",
    shortTitle: "Social Media",
    metaTitle: "Social Media Marketing Lafayette LA | i3Developers",
    description:
      "Social Media Marketing Lafayette LA by i3Developers helps businesses grow online with engaging content, targeted campaigns, and strategic audience engagement.",
    eyebrow: "Content with a job",
    hero: "Social media that supports trust, visibility, campaigns, and local customer action.",
    intro:
      "Posting more is not a strategy. We help Lafayette businesses clarify what to say, who it is for, where it should appear, and how it connects back to a website, offer, or campaign.",
    outcomes: [
      "Content planning and campaign calendars",
      "Platform-specific creative direction",
      "Audience engagement and local visibility",
      "Landing pages and tracking for social campaigns"
    ],
    process: [
      "Clarify the brand voice and target audience",
      "Plan content pillars around services, proof, education, and offers",
      "Create campaign assets and publishing rhythm",
      "Measure engagement, traffic, and lead signals"
    ],
    faqs: [
      {
        question: "Should social media replace SEO?",
        answer:
          "No. Social media builds visibility and trust, while SEO captures search intent. The strongest plan uses both: social media keeps your brand top of mind, and SEO makes sure you are found when buyers are actively looking."
      },
      {
        question: "Which social media platforms should our business use?",
        answer:
          "It depends on your audience. For most Lafayette B2C businesses, Facebook and Instagram deliver the best results. For B2B, LinkedIn is essential. We help you focus on the platforms where your actual buyers spend time, rather than trying to be everywhere."
      },
      {
        question: "How often should we post on social media?",
        answer:
          "Consistency matters more than volume. Three to four thoughtful posts per week outperform daily low-effort posts. We help you create a content calendar that aligns with your services, local events, and campaigns so every post has a purpose."
      },
      {
        question: "Can social media ads generate leads for a local business?",
        answer:
          "Yes, when they are targeted correctly and point to a strong landing page. Social ads excel at building awareness and retargeting website visitors. We pair social campaigns with conversion-optimized landing pages to turn engagement into actual leads."
      }
    ],
    keywords: ["social media marketing Lafayette LA", "Lafayette social media agency"]
  },
  {
    slug: "ecommerce-development-lafayette-la",
    title: "Ecommerce Development in Lafayette, LA",
    shortTitle: "Ecommerce",
    metaTitle: "Ecommerce Development - i3Developers - Lafayette Web Design, Development, SEO & Marketing Agency",
    description:
      "Get professional E-commerce website development in Lafayette, LA, to grow your online store and boost sales. Tailored solutions await—learn more today!",
    eyebrow: "From shelves to carts",
    hero: "Ecommerce storefronts built for buyers, inventory realities, and growth.",
    intro:
      "A good ecommerce build makes products easy to find, easy to trust, and easy to buy. We design shopping experiences around product structure, checkout flow, content, and conversion data.",
    outcomes: [
      "Product, category, and collection architecture",
      "Fast storefront pages with optimized images and metadata",
      "Checkout, payment, and fulfillment workflow planning",
      "SEO foundations for product discovery"
    ],
    process: [
      "Map products, buyers, margins, and fulfillment constraints",
      "Design the storefront and product experience",
      "Build checkout, tracking, and operational integrations",
      "Launch, measure, and improve conversion paths"
    ],
    faqs: [
      {
        question: "Can ecommerce pages be optimized for local search?",
        answer:
          "Yes. Local trust signals, pickup/service-area content, optimized category pages, and strong product metadata can support search visibility. Many Lafayette businesses benefit from showing local pickup options and serving area information alongside their online store."
      },
      {
        question: "What ecommerce platform do you recommend?",
        answer:
          "It depends on your product catalog, budget, and operational needs. We evaluate Shopify, WooCommerce, and custom solutions based on your specific situation. The right platform balances ease of use, scalability, payment processing, and SEO capabilities."
      },
      {
        question: "How do you handle shipping and tax setup?",
        answer:
          "We configure shipping zones, rates, and tax rules based on where you sell and where you ship. For Louisiana businesses, this includes setting up correct state and parish tax rates, free shipping thresholds, and local pickup options."
      },
      {
        question: "How long does it take to launch an ecommerce site?",
        answer:
          "A standard ecommerce launch takes 4 to 8 weeks, depending on the number of products, custom features, and payment integrations. We can launch with a core product set and add more inventory after the site is live."
      },
      {
        question: "Do you help with product photography and descriptions?",
        answer:
          "We can guide you on product photography best practices and write SEO-optimized product descriptions. Good product copy addresses buyer questions, includes relevant keywords naturally, and highlights the features that drive purchase decisions."
      }
    ],
    keywords: ["ecommerce development Lafayette LA", "online store Lafayette"]
  },
  {
    slug: "lafayette-custom-app-development",
    title: "Custom App Development in Lafayette, LA",
    shortTitle: "App Development",
    metaTitle: "App Development - i3Developers - Lafayette Web Design, Development, SEO & Marketing Agency",
    description:
      "Expert App Development services in Lafayette, LA, designed to bring your ideas to life. Build custom, user-friendly apps for your business—learn more today!",
    eyebrow: "Mobile products with purpose",
    hero: "Apps for businesses that need more than another website page.",
    intro:
      "We help define, design, and build mobile app experiences for customers, teams, and new digital products. The goal is not just an app launch. It is a usable product that solves a real workflow or customer problem.",
    outcomes: [
      "iOS, Android, and cross-platform planning",
      "Product strategy, user flows, and interface design",
      "API, dashboard, and backend integration planning",
      "Launch support and ongoing improvement"
    ],
    process: [
      "Validate the app idea, users, and core workflows",
      "Prototype screens and technical architecture",
      "Build in focused releases",
      "Measure adoption, bugs, retention, and feature demand"
    ],
    faqs: [
      {
        question: "Do we need a native app or a web app?",
        answer:
          "It depends on features, budget, performance needs, offline access, and device integrations. We help choose the least complicated option that still solves the problem. Many businesses start with a progressive web app and only build native apps when device-specific features are required."
      },
      {
        question: "How much does a custom app cost?",
        answer:
          "App development costs vary widely based on complexity, platforms, and features. A simple utility app is very different from a multi-user platform with real-time data. We scope every project carefully and give you a clear estimate before writing any code."
      },
      {
        question: "Can you build an app for both iPhone and Android?",
        answer:
          "Yes. We use cross-platform frameworks that let us build once and deploy to both iOS and Android. This reduces development time and cost while maintaining a native-like experience on both platforms."
      },
      {
        question: "What happens after the app launches?",
        answer:
          "Apps require ongoing maintenance: bug fixes, OS updates, feature improvements, and performance monitoring. We offer post-launch support packages so your app stays functional and competitive as user needs evolve."
      },
      {
        question: "How do you validate an app idea before building?",
        answer:
          "We start with user research, competitor analysis, and a clickable prototype. This lets you test the concept with real users before investing in full development. It is the fastest, cheapest way to de-risk an app project."
      }
    ],
    keywords: ["app development Lafayette LA", "mobile app developer Lafayette"]
  },
  {
    slug: "lafayette-custom-software-development",
    title: "Custom Software Development in Lafayette, LA",
    shortTitle: "Custom Software",
    metaTitle: "Custom Development - i3Developers - Lafayette Web Design, Development, SEO & Marketing Agency",
    description:
      "Offering expert Custom Development services in Lafayette, LA, tailored to your business needs. Create innovative solutions for success—learn more today!",
    eyebrow: "Software for real operations",
    hero: "Custom tools that replace duct-taped spreadsheets, duplicate entry, and slow workflows.",
    intro:
      "When off-the-shelf software does not fit the way your business works, custom development can remove bottlenecks and create a cleaner operating system for your team.",
    outcomes: [
      "Workflow automation and internal tools",
      "Dashboards, reporting, and custom portals",
      "API integrations and data movement",
      "Secure, maintainable web applications"
    ],
    process: [
      "Document the workflow and cost of current friction",
      "Prioritize the smallest useful version",
      "Build, test, and train around real team behavior",
      "Iterate based on adoption and operational impact"
    ],
    faqs: [
      {
        question: "When is custom software worth it?",
        answer:
          "It is worth exploring when manual work, disconnected systems, missed opportunities, or recurring errors cost more than a focused custom solution. If your team is spending hours each week on tasks that could be automated, custom software can pay for itself quickly."
      },
      {
        question: "How do you decide what to build first?",
        answer:
          "We start by mapping your most painful workflows and identifying the smallest version that delivers real value. This 'minimum useful product' approach means you get a working tool faster, learn from real usage, and invest in additional features with confidence."
      },
      {
        question: "Can custom software integrate with our existing tools?",
        answer:
          "Yes. We build integrations with your existing CRM, accounting software, inventory systems, and other tools through APIs. The goal is to connect your systems, not replace everything at once."
      },
      {
        question: "What technology do you use for custom software?",
        answer:
          "We choose the technology stack based on your project requirements, team capabilities, and long-term maintainability. Common choices include modern web frameworks, cloud hosting, and database systems that scale with your business."
      },
      {
        question: "How do you handle security and data protection?",
        answer:
          "Security is built into every layer: encrypted connections, secure authentication, role-based access, regular backups, and compliance with relevant regulations. We document our security practices and can work with your IT team to meet specific requirements."
      }
    ],
    keywords: ["custom software development Lafayette LA", "custom development Lafayette"]
  },
  {
    slug: "lafayette-branding-and-print",
    title: "Branding and Print Design in Lafayette, LA",
    shortTitle: "Branding & Print",
    metaTitle: "Branding and Print - i3Developers - Lafayette Web Design, Development, SEO & Marketing Agency",
    description:
      "Discover top-notch Branding and Printing services in Lafayette, LA, to elevate your business. From design to print, we’ve got you covered. Learn more today!",
    eyebrow: "Make the brand tangible",
    hero: "Identity, print, and marketing materials that make your business easier to remember.",
    intro:
      "A brand needs to work everywhere: the website, business cards, signs, social graphics, sales sheets, and campaign materials. We create identity systems and print-ready designs that stay consistent.",
    outcomes: [
      "Logo and identity direction",
      "Print collateral and production-ready design",
      "Campaign graphics and sales materials",
      "Brand consistency across web and offline touchpoints"
    ],
    process: [
      "Clarify audience, market position, and visual direction",
      "Create concepts that match the business personality",
      "Prepare assets for web, print, and campaign use",
      "Support rollout across the website and marketing materials"
    ],
    faqs: [
      {
        question: "Can branding and website design happen together?",
        answer:
          "Yes. In fact, brand and website work are stronger when handled together because messaging, visuals, and conversion paths stay consistent. We often develop brand identity and website design in parallel so each informs the other."
      },
      {
        question: "What does a branding project include?",
        answer:
          "A typical branding project includes audience research, competitive positioning, logo design, color palette, typography system, brand guidelines, and application across your website, business cards, signage, and marketing materials."
      },
      {
        question: "How long does a rebrand take?",
        answer:
          "A focused rebrand typically takes 4 to 8 weeks, depending on the scope. This includes research, concept development, revisions, and final asset delivery. We plan the rollout carefully so your website, social profiles, and print materials transition smoothly."
      },
      {
        question: "Do you handle print production or just design?",
        answer:
          "We design print-ready files and can coordinate with local Lafayette printers for production. Whether you need business cards, vehicle wraps, yard signs, or trade show banners, we make sure the final product matches the design intent."
      },
      {
        question: "Why does consistent branding matter for a small business?",
        answer:
          "Consistent branding makes your business easier to recognize, remember, and trust. When your website, social media, business cards, and storefront all tell the same visual story, buyers feel more confident choosing you over a competitor with scattered messaging."
      }
    ],
    keywords: ["branding Lafayette LA", "print design Lafayette LA", "logo design Lafayette"]
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
