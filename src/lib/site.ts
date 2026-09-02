/**
 * Single source of truth for ASKworX site content.
 * Navigation, home page, and every [slug] route read from here, so a link
 * can never point at a slug that has no content.
 */

export const company = {
  name: "ASKworX",
  legal: "ASKworX Smart Automation LLP",
  tagline: "Ground to Cloud",
  promise: "Automation that works today. Intelligence that scales tomorrow.",
  city: "Bangalore, India",
  address: "1381, 5th Stage, BEML Layout, RR Nagar, Bangalore – 560098",
  email: "contact@askworx.in",
  phone: "+91 90301 08949",
  phoneHref: "tel:+919030108949",
  whatsapp: "919030108949",
  whatsappHref:
    "https://wa.me/919030108949?text=Hello%20ASKworX%2C%20I%27d%20like%20to%20discuss%20an%20automation%20project.",
  signature: "Built on experience. Delivered with innovation.",
  closing: "Built for Today. Ready for Tomorrow.",
  founder: "A. Shravan Kumar",
  /** LLPIN as listed on the MCA register. */
  llpin: "ACT-4992",
  /** Incorporation date — fill from the LLP's own certificate (ISO, e.g. "2024-06-18"). */
  incorporated: "",
  mapQuery: "1381, 5th Stage, BEML Layout, RR Nagar, Bangalore 560098",
} as const;

/* ——— Who we are ——————————————————————————————————————————————
   The founding account, in the company's own words. The name is the
   operating principle, so it is content rather than decoration. */
export const whoWeAre = {
  eyebrow: "Who we are",
  title: "Ground to Cloud Automation",
  paragraphs: [
    "ASKworX Smart Automation is an industrial automation and digitalisation engineering company headquartered in Bengaluru, India. We design, build, program, commission and support automation systems for manufacturing plants across process and discrete industries.",
    "The company was founded by A. Shravan Kumar, whose initials give ASKworX its name and its operating principle.",
  ],
  nameGloss: [
    { part: "ASK", meaning: "is what the client brings to us." },
    { part: "worX", meaning: "is the engineering we put behind it." },
  ],
  nameClosing:
    "Whatever a company asks, we engineer those works and deliver the best solution in automation and digitalisation.",
  nameEmphasis: "That is not a tagline. It is our scope of work.",
} as const;

/* ——— The problem the company was founded to close ————————————— */
export const fragmentation = {
  eyebrow: "Our philosophy",
  statement: "Most plants do not have an automation problem. They have a fragmentation problem.",
  vendors: [
    "One vendor supplies the panel.",
    "Another writes the PLC logic.",
    "A third sells a SCADA licence.",
    "A fourth promises an IIoT dashboard.",
  ],
  consequence:
    "Each one owns a box, nobody owns the outcome, and the plant manager is left integrating it himself.",
  resolution:
    "ASKworX was founded to close that gap. We take single-point engineering responsibility for the entire chain — from the sensor in the field to the report on the management screen. We call it Ground to Cloud Automation.",
} as const;

/* ——— The four-layer framework ————————————————————————————————
   Rendered on /about as a scroll-driven rail: each layer lights as the
   fill line reaches it, so the reader descends the stack as they scroll. */
export type FrameworkLayer = {
  key: string;
  name: string;
  role: string;
  body: string;
  disciplines: string[];
};

export const framework: FrameworkLayer[] = [
  {
    key: "ground",
    name: "Ground",
    role: "Field & Power Layer",
    body: "Everything the process is actually measured and driven by, and the power that feeds it.",
    disciplines: [
      "Instrumentation",
      "Field wiring",
      "Panel design and manufacturing",
      "Power distribution",
      "Surge and safety protection",
      "Drives and motion hardware",
    ],
  },
  {
    key: "control",
    name: "Control",
    role: "Machine Intelligence Layer",
    body: "The logic that makes a machine deterministic, safe and repeatable on every shift.",
    disciplines: [
      "PLC architecture and programming",
      "HMI development",
      "Servo and motion control",
      "Safety logic",
      "Robot integration and cell design",
    ],
  },
  {
    key: "supervisory",
    name: "Supervisory",
    role: "Visibility Layer",
    body: "Where the plant becomes legible — what is running, what stopped, and what it produced.",
    disciplines: [
      "SCADA design",
      "Alarm and event management",
      "Historian configuration",
      "Recipe and batch control",
      "OEE and downtime capture",
    ],
  },
  {
    key: "cloud",
    name: "Cloud",
    role: "Decision Layer",
    body: "Where operational data leaves the floor and starts changing decisions.",
    disciplines: [
      "IIoT gateways",
      "Wireless and remote connectivity",
      "Edge data acquisition",
      "Energy and production dashboards",
      "MES-ready data structures",
      "Predictive and condition monitoring",
    ],
  },
];

export const accountability = {
  headline: "One partner. One design intent. One accountable team across all four layers.",
  body: "Whether the requirement is a single control panel, a full greenfield line, a legacy retrofit, or a plant-wide digitalisation roadmap, the engineering discipline is the same.",
  scale: {
    title: "Scale-appropriate solutions",
    body: "A small value retrofit gets the same engineering rigour as a multi-crore line. The scope changes. The standards do not.",
  },
} as const;

export const commitment = {
  eyebrow: "Our commitment",
  body: "Manufacturing in India is moving from automation to intelligence. Machines that only run are being replaced by machines that report, predict and improve. ASKworX exists to carry our customers across that transition — practically, affordably and without disruption to output.",
  callToAction: "Tell us what you need. We will engineer it.",
} as const;

/** A titled block of prose on a detail page. */
export type Section = { heading: string; paragraphs: string[] };

/** A question a prospective client actually asks before signing. */
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  body: string;
  image: string;
  capabilities: string[];
  outcomes: { label: string; value: string }[];
  /** Long-form detail — only rendered on /services/[slug]. */
  sections: Section[];
  /** What lands in the client's hands at the end. */
  deliverables: string[];
  /** Who this engagement is a fit for. */
  goodFit: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "automation",
    name: "Industrial Automation",
    title: "Industrial Automation",
    summary: "PLC and SCADA engineering for machines and complete production lines.",
    body:
      "This is our core discipline, and everything else we do is built on it. We design, program, and commission PLC control systems for machines and complete production lines — deterministic logic, safety interlocks, motion control, and the electrical panels and field wiring behind them. We retrofit legacy lines without ripping them out, migrate obsolete controllers to current platforms, and document everything to the standard your auditors expect. From the first I/O list through FAT, SAT, and go-live, one engineering team owns the result: a line that runs, and keeps running.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80",
    capabilities: [
      "PLC programming & migration",
      "Safety interlocks & risk assessment",
      "Motion and drive control",
      "Control panel design & build",
      "Field wiring & I/O commissioning",
      "FAT, SAT & handover documentation",
    ],
    outcomes: [
      { label: "Typical uptime gain", value: "Fewer unplanned stops" },
      { label: "Approach", value: "Retrofit over rip-out" },
    ],
    sections: [
      {
        heading: "Where we usually start",
        paragraphs: [
          "Most projects begin with a machine that still does its job but has become difficult to keep running. Spares for the controller are scarce, the person who wrote the original logic has moved on, and nobody wants to touch the program in case it stops working. The line is fine until the day it is not.",
          "We start by reading what is actually there — the existing program, the electrical drawings if they exist, and the machine itself running a real cycle. That produces an I/O list and a written description of the control sequence, which is often the first accurate documentation the plant has had in years.",
        ],
      },
      {
        heading: "How the logic is written",
        paragraphs: [
          "Control code outlives the person who writes it, so we write it to be read. Routines are named for what they do on the machine rather than for their address, sequences are commented in plain language, and the structure follows the physical process so an engineer can trace a fault by walking the line.",
          "Safety is designed in as its own layer rather than bolted onto the sequence — interlocks, guards, and emergency stops are engineered to the risk assessment for that machine, and tested as their own commissioning step.",
        ],
      },
      {
        heading: "Retrofit before replacement",
        paragraphs: [
          "A capable machine held back by an obsolete controller rarely needs replacing. Retrofitting the control layer typically costs a fraction of new equipment, keeps the mechanical asset you have already paid for, and unlocks production data the original equipment never exposed.",
          "Where a full replacement genuinely is the right answer, we will say so — and show the reasoning rather than the conclusion.",
        ],
      },
      {
        heading: "Commissioning without stopping production",
        paragraphs: [
          "Cutover is the part clients worry about most, and rightly. We stage it: the new system is built and tested off-line, proven at a factory acceptance test before it ships, then installed in planned windows — usually a shutdown, a weekend, or a shift changeover agreed with your production team.",
          "Site acceptance testing runs against the same written sequence we produced at the start, so 'finished' means something both sides can check rather than a matter of opinion.",
        ],
      },
    ],
    deliverables: [
      "Commented PLC program and source files, owned by you",
      "As-built electrical drawings and terminal schedule",
      "I/O list and written control sequence",
      "Risk assessment and safety validation records",
      "FAT and SAT sign-off documentation",
      "Maintenance handover and operator training",
    ],
    goodFit: [
      "A line running on controllers that are past end-of-life or hard to source spares for",
      "A machine whose original programmer is no longer available and whose logic is undocumented",
      "A plant that needs production data from equipment that was never built to report it",
      "A new line that needs control engineering from the I/O list through to go-live",
    ],
    faqs: [
      {
        q: "Do we have to stop production?",
        a: "Rarely for more than a planned window. The system is built and proven off-line first, so the on-site work is installation and testing rather than development. We agree the cutover window with your production team before anything is committed.",
      },
      {
        q: "Do we own the PLC program afterwards?",
        a: "Yes. You receive the source files, commented, along with the drawings and documentation. We do not lock clients into needing us to make a change.",
      },
      {
        q: "Which PLC platforms do you work with?",
        a: "Siemens, Allen-Bradley, Mitsubishi, and Delta most often. If your site is standardised on a platform, we work in that platform rather than pushing you toward one we prefer.",
      },
      {
        q: "Can you take over a system somebody else built?",
        a: "Yes, and it is a common request. We start by documenting what exists, because taking responsibility for logic nobody has read is how avoidable faults get introduced.",
      },
    ],
  },
  {
    slug: "iiot",
    name: "IIoT & Cloud",
    title: "IIoT & Cloud Implementation",
    summary: "Secure telemetry from the plant floor to dashboards your team actually uses.",
    body:
      "Your plant already produces the data — we make it usable. We connect PLCs, drives, and meters over OPC-UA, MQTT, and Modbus, move the signals through secure industrial gateways, and land them in a cloud platform your team can actually work with: live dashboards, alarm notifications, energy analytics, and historians that keep every trend. Deployments run alongside production with no downtime, and security is engineered in from the first packet rather than patched on later. The result is remote visibility of every site, from one screen, in real time.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    capabilities: [
      "OPC-UA, MQTT & Modbus connectivity",
      "Edge gateway deployment",
      "Cloud historians & dashboards",
      "Alarm routing & escalation",
      "Energy & OEE analytics",
      "OT/IT network segmentation",
    ],
    outcomes: [
      { label: "Visibility", value: "Every site, one screen" },
      { label: "Downtime to deploy", value: "None" },
    ],
    sections: [
      {
        heading: "Getting data off the machines",
        paragraphs: [
          "Most equipment already knows what you want to measure. The difficulty is that each vendor exposes it differently — one machine speaks OPC-UA, the next only Modbus TCP, and a third has a serial port and a manual nobody kept. The first job is a tag survey: what each machine can report, under what name, and how often.",
          "From there we normalise. Every signal is mapped into one consistent model, so a temperature reading means the same thing whichever brand of controller produced it. Do this before scaling and each new machine is a configuration; skip it and each new machine is a project.",
        ],
      },
      {
        heading: "Keeping the control network private",
        paragraphs: [
          "Plant networks should not be reachable from the internet, and adding visibility must not change that. Gateways sit at the boundary and make outbound, encrypted connections only — nothing dials into your control network, and no PLC is ever exposed.",
          "We keep OT and IT traffic separated, so an office problem cannot become a production problem. Where your IT team has its own standards, we work to them rather than around them.",
        ],
      },
      {
        heading: "Surviving a dropped connection",
        paragraphs: [
          "Uplinks fail, especially at remote sites. Edge nodes buffer locally and forward when the link returns, so an outage costs you a delay rather than a hole in the record. Anything that must keep working without the cloud — interlocks, control decisions — stays on the plant floor where it belongs.",
          "This is also why we are cautious about pushing control logic into the cloud. Visibility belongs there. Decisions with a safety or timing consequence do not.",
        ],
      },
      {
        heading: "Dashboards people actually open",
        paragraphs: [
          "A dashboard nobody opens after week two is a failed project, however complete the data behind it. We build around the decisions your team already makes on shift — what stopped, why, what it cost — rather than showing everything the system can measure.",
          "Alarms are routed to the person who can act, with enough context to act on. Reports go out on the schedule your meetings already run to, so the data arrives before the discussion rather than after it.",
        ],
      },
    ],
    deliverables: [
      "Tag survey and normalised data model",
      "Configured gateways with documented network design",
      "Cloud dashboards, historians and reports",
      "Alarm routing and escalation rules",
      "OT/IT segmentation and security documentation",
      "Handover training for your team",
    ],
    goodFit: [
      "A plant where downtime is recorded, but the reason for it is guesswork",
      "Multiple sites that each report separately, in different formats, at different times",
      "Energy or utility bills nobody can attribute to a line, shift, or product",
      "A previous pilot that worked on one machine but never scaled past it",
    ],
    faqs: [
      {
        q: "Will this expose our control network to the internet?",
        a: "No. Gateways make outbound connections only and nothing dials in. The control network keeps the same isolation it has today, and we document the boundary so your IT team can audit it.",
      },
      {
        q: "Does it work with our mix of machine brands?",
        a: "Usually yes. Between OPC-UA, MQTT and Modbus, most equipment made in the last two decades can be read. Older machines sometimes need an added sensor or a serial gateway, and we tell you that during the survey rather than after the quote.",
      },
      {
        q: "What happens when the internet drops?",
        a: "Edge nodes keep recording and forward the backlog when the link returns, so you lose time rather than data. Anything the machine needs to keep running stays local and is unaffected.",
      },
      {
        q: "Should we start with predictive maintenance?",
        a: "Usually not. Prediction needs a model trained on failures that most equipment produces rarely, so returns arrive slowly. Downtime attribution and energy sub-metering change decisions within weeks, and they build the case for anything deeper.",
      },
    ],
  },
  {
    slug: "software",
    name: "Software Development",
    title: "Software Development",
    summary: "Custom ERP, CRM, and SaaS built by people who understand your operations.",
    body:
      "Off-the-shelf software rarely fits the way a factory or a growing business actually works. We build what does: custom ERP and CRM systems, fintech portals, customer dashboards, and SaaS products — engineered by the same team that understands your operations layer. That means the software speaks to your machines and your processes, not just your spreadsheets. We handle architecture, development, deployment, and support, and we build for scale from day one, so the system that runs one plant today can run ten tomorrow without a rewrite.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
    capabilities: [
      "Custom ERP & CRM platforms",
      "Operations dashboards",
      "API & systems integration",
      "Fintech and payment portals",
      "Multi-tenant SaaS architecture",
      "Ongoing support & iteration",
    ],
    outcomes: [
      { label: "Built for", value: "Ten plants, not one" },
      { label: "Integration", value: "Speaks to your machines" },
    ],
    sections: [
      {
        heading: "Why off-the-shelf often fails here",
        paragraphs: [
          "Standard ERP and CRM products assume a business shaped like the average of their customers. Manufacturing rarely is. The mismatch shows up as spreadsheets bridging gaps the software left, and as processes bent to fit a screen rather than a screen built to fit the process.",
          "Custom is not automatically the answer. If a packaged product covers most of what you need and the gaps are small, buying it and integrating well is cheaper than building. We will tell you when that is the case — it is a shorter engagement for us and the right call for you.",
        ],
      },
      {
        heading: "Software that talks to machines",
        paragraphs: [
          "The advantage of having your software built by a team that also commissions control systems is that the two layers can actually meet. Production counts come from the line rather than from someone typing them in. A work order can know whether the machine it depends on is running.",
          "That connection is built through clean, documented APIs rather than direct database access, so either side can change without breaking the other.",
        ],
      },
      {
        heading: "Built to be handed over",
        paragraphs: [
          "Systems outlive relationships. Yours ships with readable code, documented architecture, and deployment instructions your own team or another vendor can follow. You hold the repository and the infrastructure accounts.",
          "We would rather you stay because the work is good than because leaving is difficult.",
        ],
      },
      {
        heading: "Scaling without a rewrite",
        paragraphs: [
          "The common failure is building for the plant in front of you and discovering that plant two needs different units, another language, or its own approval chain. We design multi-site and multi-tenant assumptions in from the start, even when you only have one site today.",
          "The cost of that decision at the beginning is small. The cost of retrofitting it later is most of a rebuild.",
        ],
      },
    ],
    deliverables: [
      "Source code and repository ownership",
      "Documented architecture and data model",
      "API documentation for every integration",
      "Deployment pipeline and environment setup",
      "Admin and user documentation",
      "Support and iteration plan",
    ],
    goodFit: [
      "A process running on spreadsheets that several people maintain by hand",
      "An ERP or CRM that fits the business badly enough that staff work around it",
      "Operations data trapped in systems that cannot talk to each other",
      "A product idea that needs building properly rather than prototyped and abandoned",
    ],
    faqs: [
      {
        q: "Should we build or buy?",
        a: "Buy when a packaged product covers most of your process and the gaps are small — integrating it well is cheaper and faster. Build when the process is the thing that makes you competitive, or when the workarounds have become the real system.",
      },
      {
        q: "Who owns the code?",
        a: "You do. You hold the repository and the infrastructure accounts from the start, along with the documentation needed for another team to pick it up.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Yes, and it is usually the larger part of the work. We integrate through documented APIs rather than writing into another product’s database, because the second approach breaks on their next upgrade.",
      },
      {
        q: "What happens after launch?",
        a: "Software needs maintenance the way equipment does. We agree a support arrangement covering fixes, dependency updates and a route for changes, sized to how central the system is to your operation.",
      },
    ],
  },
  {
    slug: "mobile",
    name: "Mobile Applications",
    title: "Mobile Applications",
    summary: "iOS and Android apps for operators, field teams, and customers.",
    body:
      "The people who run your operation are rarely sitting at a desk — their plant should fit in their pocket. We build premium iOS and Android applications for both enterprise and consumer use: operator apps that surface line status and alarms, field-service tools that work offline, and customer-facing products polished enough to compete in the app stores. Every app is designed, built, and maintained in-house, connected to your existing systems through clean APIs, and shipped with the same reliability standards we bring to plant-floor software.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80",
    capabilities: [
      "Native iOS & Android",
      "Offline-first field tools",
      "Operator & alarm apps",
      "App store release management",
      "Push notification infrastructure",
      "Design, build & maintenance",
    ],
    outcomes: [
      { label: "Works", value: "Offline, in the field" },
      { label: "Built", value: "Entirely in-house" },
    ],
    sections: [
      {
        heading: "Designing for a hand, not a desk",
        paragraphs: [
          "Field and plant apps get used in gloves, in poor light, on a cracked screen, one-handed, while the person is doing something else. That changes the design: larger targets, fewer taps to the common action, and text that stays readable at arm’s length.",
          "It also changes what goes on the first screen. An operator app should open on what is wrong right now, not on a menu.",
        ],
      },
      {
        heading: "Offline is the normal case",
        paragraphs: [
          "Coverage inside a plant or at a remote site is unreliable, so we treat offline as the default rather than an error state. Work is captured locally, queued, and synchronised when a connection returns, with conflicts resolved by rules agreed with you rather than by whichever device happened to sync last.",
          "The person using it should never have to think about connectivity. They record what they did; the app deals with the rest.",
        ],
      },
      {
        heading: "Release and support",
        paragraphs: [
          "Shipping an app is not the end of it. Both stores change their requirements, operating systems update annually, and an app left alone eventually stops installing. We handle store submissions, review responses, and the maintenance releases that keep it working.",
          "For enterprise apps that never go near a public store, we set up internal distribution so your IT team controls who gets what.",
        ],
      },
    ],
    deliverables: [
      "Native iOS and Android applications",
      "Design files and component library",
      "Source code and repository ownership",
      "Store listings and release pipeline, or internal distribution",
      "Push notification infrastructure",
      "Maintenance plan for OS and store changes",
    ],
    goodFit: [
      "Operators or supervisors who need line status without walking to a terminal",
      "Field teams recording work at sites with unreliable connectivity",
      "A paper or WhatsApp process that has outgrown itself",
      "A customer-facing product that needs to hold its own in the app stores",
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "It depends on what the app does. Cross-platform is efficient for content and forms; native is worth it when you need camera, sensor, background or offline behaviour to be dependable. We decide from your feature list, not from habit.",
      },
      {
        q: "Do we need to publish to the app stores?",
        a: "Only if it is for the public. Internal operator and field apps are usually better distributed privately through your own mobile management, which avoids review delays entirely.",
      },
      {
        q: "Will it work without signal in the plant?",
        a: "Yes. Data is captured locally and synchronised when a connection returns, with conflict rules agreed with you in advance so two devices editing the same record produce a predictable result.",
      },
      {
        q: "What does it cost to keep running?",
        a: "Budget for maintenance every year. Operating systems update annually and stores change requirements, so an unmaintained app degrades and eventually stops installing on new devices.",
      },
    ],
  },
  {
    slug: "marketing",
    name: "Digital Marketing",
    title: "Digital Marketing",
    summary: "Performance campaigns and SEO measured like engineering, not advertising.",
    body:
      "Engineering wins the plant; marketing wins the market. We run performance campaigns on Meta and Google for industrial and consumer brands, backed by search-engine optimization that compounds month after month. Because we come from engineering, we measure like engineers: every campaign is instrumented, every rupee of spend is traced to leads and revenue, and reporting is numbers rather than adjectives. Whether you are launching a product, filling a sales pipeline, or building a brand presence from zero, growth here is a system — not a gamble.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    capabilities: [
      "Meta & Google advertising",
      "Technical & content SEO",
      "Conversion tracking setup",
      "Landing page optimization",
      "Attribution reporting",
      "Creative production",
    ],
    outcomes: [
      { label: "Reporting", value: "Numbers, not adjectives" },
      { label: "Every rupee", value: "Traced to revenue" },
    ],
    sections: [
      {
        heading: "Measurement before spend",
        paragraphs: [
          "Campaigns are easy to start and hard to judge, because most accounts cannot say which spend produced which enquiry. So the first work is instrumentation: conversion tracking that fires on real events, forms and calls attributed to their source, and a definition of a lead that you and we both agree on before anything runs.",
          "Without that, optimisation is guesswork dressed as expertise. With it, the account gets better every month because the feedback is real.",
        ],
      },
      {
        heading: "Industrial buying is slow",
        paragraphs: [
          "A plant does not buy a control system from one advertisement. The cycle runs months, involves several people, and mostly happens where you cannot see it. Judging industrial campaigns on immediate conversions will make you cut the things that were working.",
          "We report on enquiry quality and pipeline movement rather than clicks, and we set expectations for the lag before the first rupee is spent.",
        ],
      },
      {
        heading: "Search compounds, ads do not",
        paragraphs: [
          "Paid traffic stops the day you stop paying. Search visibility, built on pages that genuinely answer what buyers are searching for, keeps returning long after the work is done. The two are complements: ads while the search position builds, search so you are not renting your pipeline forever.",
          "Technical SEO matters here more than volume of content. A fast, well-structured site with pages that match real questions beats a large library of thin pages.",
        ],
      },
    ],
    deliverables: [
      "Conversion tracking and attribution setup",
      "Campaign builds across Meta and Google",
      "Technical SEO audit and fixes",
      "Landing pages built to convert",
      "Monthly reporting tied to enquiries and pipeline",
      "Creative and copy for ads",
    ],
    goodFit: [
      "Enquiries arriving with no idea which channel produced them",
      "Spend running without conversion tracking that anyone trusts",
      "A technically strong company that is invisible in search",
      "A launch that needs demand from a standing start",
    ],
    faqs: [
      {
        q: "How soon will we see results?",
        a: "Paid campaigns produce traffic immediately and reliable signal after a few weeks of data. Search takes months. Industrial buying cycles add their own lag, so we agree what early progress looks like before spending starts.",
      },
      {
        q: "Do you report on clicks?",
        a: "Only as diagnostics. Reporting is enquiries, their quality, and what happened to them — the numbers that decide whether the spend was worth it.",
      },
      {
        q: "Can you market a technical product to a technical buyer?",
        a: "That is the part we are best placed for. We come from engineering, so the copy can be specific about what a system does instead of falling back on adjectives, which is what technical buyers respond to.",
      },
      {
        q: "What if advertising is not the right answer?",
        a: "Then we say so. If your site cannot convert the traffic it already has, or the tracking is broken, spending more on ads makes the problem more expensive rather than smaller.",
      },
    ],
  },
  {
    slug: "whatsapp",
    name: "WhatsApp Automation",
    title: "WhatsApp Automation",
    summary: "AI bots for sales response and factory alarm escalation, in one channel.",
    body:
      "WhatsApp is where your customers — and your operators — already are. We build AI-powered bots on the WhatsApp Business platform that answer sales enquiries instantly, qualify leads, book appointments, and follow up automatically. On the factory side, the same channel becomes an alarm bridge: when a machine faults at 2 a.m., the right engineer gets the message in seconds, with the context to act. One integration, two jobs — faster sales response at the front of the business, faster fault response at the back.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1400&q=80",
    capabilities: [
      "WhatsApp Business API setup",
      "AI enquiry handling & lead qualification",
      "Appointment booking flows",
      "Factory alarm escalation",
      "CRM handoff",
      "Broadcast & follow-up campaigns",
    ],
    outcomes: [
      { label: "Sales response", value: "Instant" },
      { label: "Alarm to engineer", value: "Seconds" },
    ],
    sections: [
      {
        heading: "Meeting people where they are",
        paragraphs: [
          "In India, WhatsApp is not a marketing channel bolted onto the business — it is where the business already happens. Enquiries arrive there, suppliers coordinate there, and shift supervisors sort problems out there. Building on it means no new app for anyone to learn.",
          "That familiarity cuts both ways. Because it is a personal space, a bot that behaves like a broadcast tool gets blocked quickly. What works is fast, useful, and easy to escape from.",
        ],
      },
      {
        heading: "Knowing when to hand over",
        paragraphs: [
          "The most important design decision is when the bot stops. Automation is good at answering the same eight questions, capturing a requirement, and booking a slot. It is bad at pricing an unusual job or handling somebody who is annoyed.",
          "We build an explicit handover: the bot recognises what it cannot do, passes the conversation to a person with the history attached, and stops. A visible route to a human on every step is what keeps people using it.",
        ],
      },
      {
        heading: "The same channel for plant alarms",
        paragraphs: [
          "The infrastructure that answers a customer at midday can page an engineer at 2 a.m. When a machine faults, the alarm goes to the person on call with the machine, the fault, and the recent context — not a code that means nothing away from the HMI.",
          "Escalation matters as much as delivery. If the first engineer does not acknowledge within an agreed window, it moves to the next, so a missed message does not become a missed night.",
        ],
      },
    ],
    deliverables: [
      "WhatsApp Business API account setup and verification",
      "Conversation flows with defined handover points",
      "CRM integration for lead capture",
      "Alarm routing and escalation rules",
      "Template messages submitted and approved",
      "Analytics on volume, resolution and handover rate",
    ],
    goodFit: [
      "Enquiries arriving after hours and going cold before anyone replies",
      "A team answering the same handful of questions dozens of times a day",
      "Plant alarms that reach a screen nobody is watching overnight",
      "A sales process where speed of first response decides who wins the job",
    ],
    faqs: [
      {
        q: "Will customers know it is a bot?",
        a: "Yes, and they should. Pretending otherwise annoys people and breaks trust the moment it slips. We make the automation clearly useful and put a visible route to a person on every step.",
      },
      {
        q: "What can it not handle?",
        a: "Anything needing judgement — unusual pricing, complaints, technical scoping. Those are designed as handovers rather than as gaps, so the conversation moves to a person with the history attached.",
      },
      {
        q: "Do we need the official WhatsApp Business API?",
        a: "For anything beyond a single phone, yes. It brings verification, template approval and message limits, which is why we handle setup as part of the work rather than leaving it with you.",
      },
      {
        q: "Can alarms and sales run on one number?",
        a: "They can, but usually should not. Separate numbers keep an operational alarm from landing in a customer thread, and let the two be monitored by different people.",
      },
    ],
  },
];

export type Solution = {
  slug: string;
  name: string;
  summary: string;
  body: string;
  image: string;
  specs: { label: string; value: string }[];
  /** Long-form detail — only rendered on /solutions/[slug]. */
  sections: Section[];
  /** Concrete situations where this is the right building block. */
  useCases: string[];
  /** What we hand over with it. */
  deliverables: string[];
  faqs: Faq[];
};

export const solutions: Solution[] = [
  {
    slug: "plc",
    name: "PLC & Control Systems",
    summary: "Deterministic controllers, programmed and commissioned for high-availability lines.",
    body:
      "The controller is the machine's nervous system. We specify, program, and commission PLC platforms sized to the process — from compact machine controllers to redundant racks running a whole line — with logic written to be read, not just to run. Every program ships with structured naming, commented routines, and a maintenance handover so your team can own it after we leave.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80",
    specs: [
      { label: "Platforms", value: "Siemens, Allen-Bradley, Mitsubishi, Delta" },
      { label: "Architecture", value: "Standalone to redundant rack" },
      { label: "Handover", value: "Commented logic + maintenance manual" },
    ],
    sections: [
      { heading: "Sizing the controller to the job", paragraphs: [
        "Oversizing a controller is a common and expensive habit. A packaging machine does not need a redundant rack, and a process line running continuously should not depend on a compact unit chosen because it was cheap. We size from the I/O count, the scan-time the process actually requires, and what failure costs you.",
        "Where a site is already standardised on a platform, we work in that platform. Introducing a second brand to save a little on hardware costs far more in spares and training." ] },
      { heading: "Logic written to be read", paragraphs: [
        "Programs get inherited. Routines are named for the part of the machine they drive, sequences are commented in plain language, and the structure follows the physical process, so a maintenance engineer can trace a fault by walking the line with the drawing.",
        "Address-based naming and uncommented ladder are how a working machine becomes untouchable within a few years." ] },
      { heading: "Redundancy where it pays", paragraphs: [
        "Redundant processors and dual power supplies are worth their cost on a continuous process where a stop means lost product or a long restart. On a discrete line where a stop means a lost cycle, they usually are not.",
        "We would rather spend that budget on better instrumentation, which improves every shift rather than only the rare bad one." ] },
    ],
    useCases: [
      "Replacing controllers that are past end-of-life or scarce on spares",
      "New machines or lines needing control engineering from the I/O list up",
      "Consolidating a plant running several incompatible controller brands",
      "Recovering a line whose original program was never documented",
    ],
    deliverables: [
      "Commented program and source files, owned by you",
      "I/O list and written control sequence",
      "As-built drawings and terminal schedule",
      "FAT and SAT records",
      "Maintenance handover and training",
    ],
    faqs: [
      { q: "Which platform should we choose?", a: "Whichever your maintenance team already knows, unless there is a technical reason to change. Familiarity at 2 a.m. is worth more than a marginal specification advantage on paper." },
      { q: "Can you migrate an old program to a new controller?", a: "Yes. We document the existing sequence first and validate the new logic against it, because a direct conversion carries over old bugs along with old behaviour." },
      { q: "Do we need redundancy?", a: "Only if a stop costs you product or a long restart. On discrete lines the money is usually better spent on instrumentation." },
    ],
  },
  {
    slug: "scada",
    name: "SCADA & HMI",
    summary: "Supervision screens that give operators the whole plant at a glance.",
    body:
      "A good HMI tells an operator what is wrong before they go looking. We design supervision layers around the decisions your team actually makes on shift — clear alarm hierarchies, trend history where it matters, and screens that stay readable at 3 a.m. under plant lighting. Built on standard SCADA platforms so you are never locked into us.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    specs: [
      { label: "Platforms", value: "WinCC, FactoryTalk, Ignition, AVEVA" },
      { label: "Focus", value: "Alarm hierarchy & trend history" },
      { label: "Design standard", value: "High-performance HMI" },
    ],
    sections: [
      { heading: "Designing for the night shift", paragraphs: [
        "An HMI is judged at 3 a.m. by someone who did not build it. That means high-contrast screens that stay legible under plant lighting, consistent placement so muscle memory works, and a first screen that shows what is wrong rather than a menu.",
        "Decoration costs attention. Animated pipes and gauge faces look impressive in a demo and get in the way on a real shift." ] },
      { heading: "Alarm philosophy first", paragraphs: [
        "Most alarm systems fail by being too generous. If everything raises an alarm, operators learn to acknowledge without reading, and the one that mattered is lost in the noise. We agree a philosophy before configuring anything: what warrants an alarm, its priority, and what the operator is expected to do about it.",
        "A shorter alarm list that people act on beats a complete one they have learned to ignore." ] },
      { heading: "History worth keeping", paragraphs: [
        "Trends are what turn an argument into an answer. Logging the right tags at a sensible rate lets you show what the process did before a fault instead of reconstructing it from memory.",
        "Log everything at high frequency and you get a storage problem and slow screens. We choose rates per tag based on how fast the signal actually changes." ] },
    ],
    useCases: [
      "Operators diagnosing faults by walking the line instead of reading a screen",
      "An alarm list long enough that acknowledgement has become automatic",
      "Supervisors who cannot see plant status without phoning the floor",
      "Replacing an HMI whose software is no longer supported",
    ],
    deliverables: [
      "Screen designs and navigation structure",
      "Documented alarm philosophy and configuration",
      "Historian setup with per-tag logging rates",
      "Operator training and quick-reference guide",
      "Project files and licences in your name",
    ],
    faqs: [
      { q: "Which SCADA platform do you use?", a: "WinCC, FactoryTalk, Ignition and AVEVA most often. The choice usually follows your controller platform and your licensing, not our preference." },
      { q: "Can you improve our existing screens?", a: "Often yes, and it is cheaper than replacing them. A rework of alarm priorities and screen hierarchy frequently delivers most of the benefit without new licences." },
      { q: "How many alarms is too many?", a: "If operators acknowledge without reading, you already have too many. The fix is a philosophy that assigns priority and a required action to each one." },
    ],
  },
  {
    slug: "panels",
    name: "Control Panels",
    summary: "Designed, fabricated, and wired to standard — documented to the last terminal.",
    body:
      "Panels are where good engineering becomes visible. We design to standard, fabricate with tested components, and wire so the next engineer can trace a circuit without guessing. Every panel ships with as-built drawings, a terminal schedule, and photographs of the finished build.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80",
    specs: [
      { label: "Build", value: "MCC, PLC, VFD & distribution panels" },
      { label: "Documentation", value: "As-built drawings + terminal schedule" },
      { label: "Testing", value: "Continuity, insulation & functional" },
    ],
    sections: [
      { heading: "Built to be worked on", paragraphs: [
        "A panel is opened by someone under pressure, often years later. Layout that groups by function, wire numbers that match the drawing, and space left for a hand and a meter are what make the difference between a ten-minute fix and a two-hour one.",
        "Cramming a panel to save on enclosure cost is a false economy paid for by every future maintenance visit." ] },
      { heading: "Thermal and protection design", paragraphs: [
        "Heat is what quietly ends component life. We calculate the dissipation inside the enclosure and size ventilation or cooling for the ambient conditions the panel will actually sit in, which in an Indian plant room is rarely the temperature on the datasheet.",
        "Protection coordination is designed rather than assumed, so a downstream fault trips its own device instead of the incomer." ] },
      { heading: "Documented to the last terminal", paragraphs: [
        "Every panel ships with as-built drawings that match what was actually built, a terminal schedule, and photographs of the finished interior. If a change happened during commissioning, the drawing changes with it.",
        "Drawings that no longer match reality are worse than no drawings, because people trust them." ] },
    ],
    useCases: [
      "New machines or lines needing a control or MCC panel",
      "Replacing panels that have been modified so often the drawings are fiction",
      "Consolidating scattered local control into one documented enclosure",
      "Panels for washdown, dusty or high-ambient environments",
    ],
    deliverables: [
      "Fabricated and wired panel, tested before dispatch",
      "As-built drawings and terminal schedule",
      "Bill of materials with component datasheets",
      "Test records: continuity, insulation and functional",
      "Photographs of the finished build",
    ],
    faqs: [
      { q: "Do you design as well as build?", a: "Yes, and it works better that way. Panels built to someone else’s drawing inherit whatever the drawing got wrong, and nobody is clearly responsible for the result." },
      { q: "What about washdown or dusty areas?", a: "The enclosure rating is chosen for the environment. Hygienic and dusty areas also change component and gland selection, not just the box." },
      { q: "Can you modify our existing panels?", a: "Yes. We document what is actually in there first, because modifying a panel from an out-of-date drawing is how avoidable faults get introduced." },
    ],
  },
  {
    slug: "networking",
    name: "Industrial Networking",
    summary: "Plant-floor networks engineered for noise, uptime, and security.",
    body:
      "Office networking assumptions break on a shop floor. We build industrial networks that tolerate electrical noise, survive a switch failure without stopping production, and keep OT traffic properly separated from IT. Ring topologies, managed industrial switches, and documented address plans.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    specs: [
      { label: "Topology", value: "Managed ring with fast recovery" },
      { label: "Protocols", value: "PROFINET, EtherNet/IP, Modbus TCP" },
      { label: "Security", value: "OT/IT segmentation & firewalling" },
    ],
    sections: [
      { heading: "Office assumptions break here", paragraphs: [
        "A plant floor has electrical noise, temperature swings, vibration and cable runs that pass close to drives. Office switches in a control panel fail in ways that look like intermittent software faults, which is why they can take months to diagnose.",
        "Industrial switches, properly rated cable and correct shielding practice remove a category of problem that is otherwise very expensive to chase." ] },
      { heading: "Designing for a failed switch", paragraphs: [
        "A ring topology with fast recovery means a single failed switch or cut cable costs you a brief interruption rather than a stopped line. On a flat linear network, the same fault stops everything downstream of it.",
        "We also plan the address scheme and document it. Networks that grow without a plan end up with duplicate addresses that surface at the worst moment." ] },
      { heading: "Keeping OT and IT apart", paragraphs: [
        "Control traffic and office traffic should not share a broadcast domain. Segmentation protects production from an IT problem and gives your IT team a clear boundary they can secure and audit.",
        "This is also what makes cloud connectivity safe to add later, because there is a defined place for the gateway to sit." ] },
    ],
    useCases: [
      "Intermittent faults that look like software but track to cabling or noise",
      "A flat network where one failure stops everything downstream",
      "Plant equipment sharing a network with office traffic",
      "Preparing a site for cloud connectivity without exposing controllers",
    ],
    deliverables: [
      "Network topology and address plan",
      "Managed industrial switches configured for fast recovery",
      "Documented OT/IT segmentation",
      "Cable schedule and labelling",
      "Test records and handover documentation",
    ],
    faqs: [
      { q: "Can we use our existing office switches?", a: "In a panel, generally no. Temperature, vibration and noise cause intermittent failures that are very hard to diagnose and usually cost more than the switches saved." },
      { q: "Which protocol should we standardise on?", a: "Usually whichever your controllers speak natively — PROFINET, EtherNet/IP or Modbus TCP. Mixing protocols is manageable but adds gateways and failure points." },
      { q: "Does segmentation stop us reaching the data?", a: "No. It defines where the data crosses, which is what makes crossing it safe. The gateway sits at that boundary and connects outward only." },
    ],
  },
  {
    slug: "iiot-gateways",
    name: "IIoT Gateways",
    summary: "Secure bridges that normalize plant data and move it to the cloud.",
    body:
      "The gateway is the border crossing between OT and IT. Ours normalize tags from mixed vendor equipment into one consistent model, encrypt everything in transit, and never expose the control network to the internet. One data contract, however many machine brands you run.",
    image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=1400&q=80",
    specs: [
      { label: "Normalizes", value: "Mixed-vendor tags to one model" },
      { label: "Transport", value: "TLS-encrypted, outbound only" },
      { label: "Exposure", value: "Control network stays private" },
    ],
    sections: [
      { heading: "One model, many vendors", paragraphs: [
        "A plant with four controller brands exposes four different ideas of what a tag is. The gateway is where that becomes one consistent model, so a signal means the same thing regardless of which machine produced it.",
        "Do this once, at the boundary, and adding the fifth machine is configuration. Skip it and every integration is bespoke, which is why so many pilots never reach a second line." ] },
      { heading: "Outbound only, always", paragraphs: [
        "Gateways initiate connections outward and nothing dials in. No controller is exposed, no inbound port is opened, and the control network keeps exactly the isolation it had before.",
        "Traffic is encrypted in transit and credentials are held on the device rather than embedded in a shared configuration file." ] },
      { heading: "Failing quietly is the risk", paragraphs: [
        "The dangerous failure is not a gateway that stops — it is one that keeps running while a handful of tags silently stop updating. Dashboards look healthy and the data underneath is stale.",
        "We monitor the gateways themselves and alert on stale tags, so a fault surfaces as an alarm rather than as a wrong decision weeks later." ] },
    ],
    useCases: [
      "A plant running several controller brands that must report consistently",
      "Adding cloud visibility without exposing the control network",
      "Replacing hand-built integrations that break whenever equipment changes",
      "Bringing legacy serial equipment into a modern data platform",
    ],
    deliverables: [
      "Configured gateway hardware",
      "Normalised tag model and mapping documentation",
      "Security design and credential handling",
      "Gateway health monitoring and stale-tag alerts",
      "Network boundary documentation for your IT team",
    ],
    faqs: [
      { q: "Does this open our network to the internet?", a: "No. Connections are outbound only and nothing dials in, so the control network keeps the isolation it has today. We document the boundary so your IT team can audit it." },
      { q: "Will it work with our older machines?", a: "Usually. Between OPC-UA, MQTT, Modbus and serial gateways, most equipment can be read. Some very old machines need an added sensor, and we identify that during the survey." },
      { q: "How do we know the data is current?", a: "Gateway health and per-tag freshness are monitored and alarmed. A tag that stops updating raises an alert rather than quietly feeding a stale dashboard." },
    ],
  },
  {
    slug: "sensors",
    name: "Precision Sensors",
    summary: "Measurement at the source — the signals every layer above depends on.",
    body:
      "Every dashboard is only as honest as its sensors. We specify and install instrumentation matched to the process — temperature, pressure, flow, vibration, vision — with the calibration records and mounting detail that keep readings trustworthy a year later.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80",
    specs: [
      { label: "Measures", value: "Temperature, pressure, flow, vibration, vision" },
      { label: "Includes", value: "Calibration records & mounting detail" },
      { label: "Selection", value: "Matched to process conditions" },
    ],
    sections: [
      { heading: "Specified for the process, not the catalogue", paragraphs: [
        "A sensor that is accurate on a datasheet can be useless in place. Process temperature, vibration, washdown chemicals, ambient humidity and the material being measured all decide whether a reading stays trustworthy after six months.",
        "We specify for the conditions the instrument will actually live in, which sometimes means a more expensive device and sometimes a cheaper one that suits the duty better." ] },
      { heading: "Mounting decides accuracy", paragraphs: [
        "More measurement problems come from installation than from the instrument. A flow meter too close to a bend, a thermocouple measuring pipe wall instead of fluid, or a vibration sensor on a panel rather than the bearing housing will each produce confident, wrong numbers.",
        "Straight lengths, immersion depth and mounting rigidity are part of the design, not an installation detail to be sorted out on site." ] },
      { heading: "Calibration you can show", paragraphs: [
        "A reading is only evidence if you can show the instrument was calibrated. Records are handed over with the installation and a re-calibration interval is set per instrument, based on drift characteristics and how much the decision depends on it.",
        "For regulated production this is not optional, and it is far easier to establish at installation than to reconstruct later." ] },
    ],
    useCases: [
      "Dashboards nobody trusts because the underlying readings drift",
      "Adding measurement to equipment that was never instrumented",
      "Condition monitoring on bearings, motors and gearboxes",
      "Instrumentation for regulated production requiring calibration records",
    ],
    deliverables: [
      "Instrument specification against process conditions",
      "Installation with correct mounting and immersion",
      "Calibration certificates and records",
      "Re-calibration schedule per instrument",
      "Loop drawings and tag list",
    ],
    faqs: [
      { q: "Why do our existing readings drift?", a: "Most often mounting rather than the instrument — wrong position, insufficient immersion, or measuring the wrong thing. That is the first place we look before recommending replacement." },
      { q: "How often should instruments be calibrated?", a: "It depends on the instrument’s drift behaviour and how much rests on the reading. A billing or compliance measurement needs a tighter interval than an indicative one." },
      { q: "Can you add sensors without modifying the machine?", a: "Often yes. Clamp-on flow, external vibration and current-based load monitoring avoid breaking into the process, though they trade some accuracy for that." },
    ],
  },
  {
    slug: "energy-monitoring",
    name: "Energy Monitoring",
    summary: "Metering and analytics that turn consumption into a controllable cost.",
    body:
      "You cannot reduce what you do not measure. Sub-metering at machine and feeder level turns a single monthly bill into a map of where energy actually goes, which shifts and products cost most, and which equipment is drifting toward a fault.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80",
    specs: [
      { label: "Granularity", value: "Machine and feeder level" },
      { label: "Reveals", value: "Cost per shift, per product line" },
      { label: "Bonus", value: "Early fault signal from drift" },
    ],
    sections: [
      { heading: "From one bill to a map", paragraphs: [
        "A monthly bill tells you what you spent and nothing about where. Sub-metering at feeder and machine level turns that single number into a map: which line, which shift, which product, which idle period.",
        "That map is usually where the first savings come from, because it exposes consumption nobody had a reason to look at — compressors running against leaks, equipment left energised through breaks, heaters cycling harder than the process needs." ] },
      { heading: "Cost per unit made", paragraphs: [
        "Energy per unit of production is a more useful number than total energy, because it survives changes in volume. It also lets you compare shifts and product lines fairly and see the effect of a change instead of arguing about it.",
        "Getting there needs the energy data and the production count to share a clock, which is why this works better when the metering and the control system are engineered together." ] },
      { heading: "Drift as an early warning", paragraphs: [
        "Rising consumption on a fixed duty usually means something mechanical is degrading — a bearing, a filter, a belt, a leak. Energy is a cheap and continuous condition signal that most plants already pay for and never read.",
        "Alarms on trend rather than threshold surface those changes while they are still cheap to fix." ] },
    ],
    useCases: [
      "A single utility bill nobody can attribute to a line or product",
      "Suspected losses from compressed air or idle equipment",
      "Reporting energy per unit produced for costing or customers",
      "Early warning of mechanical degradation without new condition sensors",
    ],
    deliverables: [
      "Metering plan at feeder and machine level",
      "Installed meters and CTs with test records",
      "Dashboards for consumption, cost and energy per unit",
      "Trend-based alerts on abnormal consumption",
      "Baseline report for measuring later changes",
    ],
    faqs: [
      { q: "Where should we meter first?", a: "The largest loads and anything you suspect. Full coverage is rarely the right first step; a handful of well-chosen meters usually finds enough to justify the rest." },
      { q: "Does this need production data too?", a: "For cost per unit, yes — energy and output have to share a clock. Consumption mapping alone still works without it and is a reasonable place to start." },
      { q: "Will it pay for itself?", a: "Often, though we will not promise a figure without seeing your loads. The usual finds are leaks, idle running and equipment cycling harder than the process requires." },
    ],
  },

  {
    slug: "drives-motion",
    name: "Drives & Motion",
    summary: "Servo and inverter systems tuned for the torque, speed and precision the process needs.",
    body:
      "Between the controller and the machine sits the drive. We specify and commission high-performance AC servo systems and variable frequency inverters — sizing them to the real load rather than the nameplate, tuning the loops on the actual mechanics, and setting up the parameter sets so a replacement drive can be swapped in without a specialist. Where the mechanics themselves are the constraint, we work alongside specialists in servo-hydraulics and complex mechanical integration.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80",
    specs: [
      { label: "Servo", value: "Multi-axis AC servo, absolute feedback" },
      { label: "Inverters", value: "VFD with vector and sensorless control" },
      { label: "Handover", value: "Parameter sets, tuning record, spares list" },
    ],
    sections: [
      { heading: "Sizing against the real load", paragraphs: [
        "Drives are usually specified from a motor nameplate and a catalogue table, which is how a machine ends up either straining at peak or running an oversized inverter at a fraction of its rating. We size from the duty cycle: peak torque, acceleration profile, reflected inertia, and how often the axis reverses.",
        "Inertia ratio is the number that decides whether an axis will ever tune well. Getting it wrong is a mechanical problem that no amount of gain adjustment later will solve.",
      ] },
      { heading: "Tuning on the machine, not the bench", paragraphs: [
        "Auto-tune gets an axis moving. It does not get it moving well under a changing load, with a long belt, or with the compliance that real mechanics have. Final tuning happens on the assembled machine, with the process running, and the resulting gains are written down.",
        "We record the tuning so it can be reproduced. An axis retuned by feel every time a drive is replaced is an axis whose behaviour drifts year on year.",
      ] },
      { heading: "Energy, and where inverters actually save it", paragraphs: [
        "Fitting a VFD to a fan or pump that spends its life throttled is one of the few changes on a plant that pays back quickly and predictably. Fitting one to a fixed-speed conveyor that already runs at full load saves nothing and adds a failure point.",
        "We say which of your loads are in the first category before quoting the second.",
      ] },
    ],
    useCases: [
      "Multi-axis machines needing synchronised, repeatable motion",
      "Replacing drives that are end-of-life or no longer stocked",
      "Converting throttled fans and pumps to variable speed",
      "Diagnosing axes that overshoot, hunt or trip on load",
      "Retrofitting servo control onto mechanically cammed machines",
    ],
    deliverables: [
      "Drive sizing calculation against the actual duty cycle",
      "Commissioned parameter sets, backed up and documented",
      "Tuning record with final gain values",
      "Wiring and shielding detail for the drive cabinet",
      "Recommended spares and replacement procedure",
    ],
    faqs: [
      { q: "Servo or inverter for our application?", a: "If the axis has to hit a position or hold a torque accurately, servo. If it just has to turn at a controllable speed, an inverter is cheaper, simpler and easier to maintain. Plenty of machines carry servos on axes that never needed them." },
      { q: "Can you retune an existing machine?", a: "Usually. If the mechanics have worn or the inertia ratio was wrong from the start, tuning will only get you so far — we will tell you which of the two you have." },
      { q: "Do you handle servo-hydraulics?", a: "We work with specialists on it rather than claiming it in house. On presses and heavy-tonnage machines that combination of expertise matters more than any single supplier's catalogue." },
    ],
  },
  {
    slug: "robotics",
    name: "Robotics & Cobots",
    summary: "Turnkey robot and cobot cells — integrated, guarded, and handed over programmable.",
    body:
      "We integrate industrial robots for assembly, welding, palletising and material handling, and collaborative robots for the stations where a fence is not practical and a person still needs to be there. The robot itself is rarely the hard part. The cell around it — tooling, fixturing, part presentation, safety, and the handshake with the line controller — is what decides whether it runs unattended or needs someone standing next to it.",
    image: "https://images.unsplash.com/photo-1581091012184-7fbd0d3c5ba0?w=1400&q=80",
    specs: [
      { label: "Types", value: "6-axis, SCARA, delta, collaborative" },
      { label: "Applications", value: "Assembly, welding, handling, palletising" },
      { label: "Safety", value: "Risk assessment and validated stop functions" },
    ],
    sections: [
      { heading: "The cell is the project", paragraphs: [
        "A robot arm is a solved problem. Presenting the part to it in a known position every cycle, gripping something that varies, and clearing the fault when one unit arrives skewed — that is where the engineering time goes, and where cells that were sold on cycle time quietly fail to reach it.",
        "We design the fixturing and part presentation before committing to a reach and payload, because the wrong answer there cannot be corrected by a bigger robot.",
      ] },
      { heading: "Collaborative does not mean unassessed", paragraphs: [
        "A cobot removes the fence, not the risk assessment. Force and speed limits have to be established against the actual tooling — a compliant arm carrying a sharp gripper is not a collaborative application, whatever the arm is rated for.",
        "We do the assessment with your safety officer and design the stop functions and speed zones to what it concludes, rather than assuming the robot's own rating settles the question.",
      ] },
      { heading: "Handed over programmable", paragraphs: [
        "Cells get moved, retooled and repurposed. Programs are structured so a new part or a new position is a change to data, not a rewrite of the motion, and your team is trained on making those changes.",
        "A cell only your integrator can modify is a cell that gets scrapped rather than redeployed when the product changes.",
      ] },
    ],
    useCases: [
      "Machine tending and part transfer between stations",
      "Palletising and end-of-line case handling",
      "Welding and dispensing where repeatability beats reach",
      "Collaborative assembly and inspection alongside operators",
      "Replacing hard automation on lines that now run more variants",
    ],
    deliverables: [
      "Cell layout, reach and cycle-time study",
      "Tooling, gripper and fixturing design",
      "Safety risk assessment and validated stop circuits",
      "Structured robot program with documented part data",
      "Operator and changeover training",
    ],
    faqs: [
      { q: "Robot or cobot for our station?", a: "If the station can be fenced and the cycle time matters, a conventional robot is faster and usually cheaper. Cobots earn their place where a person has to share the space or the layout cannot take a guard." },
      { q: "Will it hit the cycle time you quote?", a: "We quote from a reach and motion study, not a catalogue figure, and we tell you which assumptions it depends on — chiefly how consistently the part arrives." },
      { q: "Can we reprogram it ourselves afterwards?", a: "Yes. Programs are written to be changed and we train your team on it. That is the point of the handover." },
    ],
  },
  {
    slug: "power-distribution",
    name: "Power Distribution & Safety",
    summary: "Low-voltage distribution, protection and power monitoring built to IEC standards.",
    body:
      "Below every control system is the power that feeds it. We engineer low-voltage distribution — circuit breakers, contactors, motor starters and busbar — with discrimination studied rather than assumed, protection relays set to the equipment they defend, and power management meters where the consumption needs to be seen. Panels are built to international standards, notably IEC 61439, with the verification records to show it.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80",
    specs: [
      { label: "Standard", value: "IEC 61439 assemblies" },
      { label: "Protection", value: "Discrimination study, relay settings" },
      { label: "Monitoring", value: "Power meters at feeder and load level" },
    ],
    sections: [
      { heading: "Discrimination, studied not assumed", paragraphs: [
        "A fault on one machine that trips the incomer takes down the plant. Selective coordination between upstream and downstream devices is what keeps the trip local, and it depends on curves and settings rather than on device size alone.",
        "We study it and document the result, so the next person adding a load knows what the design assumed.",
      ] },
      { heading: "Built to a standard that can be evidenced", paragraphs: [
        "IEC 61439 is a design and verification regime, not a sticker. Temperature rise, short-circuit withstand, clearances and creepage are addressed at design time and recorded, which is what makes an assembly defensible to an inspector or an insurer.",
        "The same records are what let a panel be extended safely years later, rather than guessed at.",
      ] },
      { heading: "Metering that changes a decision", paragraphs: [
        "A single meter at the incomer tells you the bill. Meters at feeder and major-load level tell you which department, which line and which machine created it — and that is the level at which anyone can actually act.",
        "Power quality data from the same devices also explains a category of intermittent faults that otherwise gets blamed on the control system.",
      ] },
    ],
    useCases: [
      "New distribution boards and motor control centres",
      "Nuisance tripping traced to poor discrimination",
      "Adding protection relays to ageing switchgear",
      "Feeder-level metering ahead of an energy programme",
      "Extending a plant's power infrastructure for new lines",
    ],
    deliverables: [
      "Single-line diagram and load schedule",
      "Discrimination study and relay setting sheet",
      "IEC 61439 verification records for the assembly",
      "As-built panel drawings and terminal schedule",
      "Metering points documented and mapped to loads",
    ],
    faqs: [
      { q: "Can you work on our existing switchgear?", a: "Yes, for protection settings, metering and extensions. Where the existing assembly cannot be evidenced against a standard, we say so rather than certify around it." },
      { q: "Is IEC 61439 mandatory for us?", a: "That depends on your jurisdiction and your insurer. Even where it is not required, the verification records are the cheapest way to make a panel maintainable by someone who did not build it." },
      { q: "Do you supply the switchgear as well?", a: "We specify and procure it, and we are not tied to one manufacturer. Where your site is standardised on a brand for spares reasons, we stay in it." },
    ],
  },
  {
    slug: "operational-intelligence",
    name: "Operational Intelligence",
    summary: "Dashboards, analytics and triggers that turn machine data into a decision.",
    body:
      "Collecting data is the easy half. We build the layer above it: real-time dashboards for the shift, performance analytics for the week, condition triggers that raise maintenance before a failure, and reporting that survives contact with a management meeting. Each view is designed around a decision somebody actually makes, because a dashboard nobody opens is an expensive screensaver.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    specs: [
      { label: "Views", value: "Shift, line, plant and multi-site" },
      { label: "Metrics", value: "OEE, downtime attribution, energy per unit" },
      { label: "Triggers", value: "Threshold and trend-based alerting" },
    ],
    sections: [
      { heading: "One decision per view", paragraphs: [
        "Dashboards fail by trying to show everything. A shift supervisor needs to know what is stopped and why; a plant manager needs to know which line lost the most hours this week; a maintenance planner needs to know what is drifting. Those are three screens, not one.",
        "We design each around its decision and leave the rest in the detail view, which is what keeps a dashboard in daily use after the novelty passes.",
      ] },
      { heading: "Downtime attribution before prediction", paragraphs: [
        "Most plants can name their worst machine but not their worst hour. Attributing stops to causes — with the reason captured at the line rather than reconstructed later — usually recovers more output than any model does in its first year.",
        "It is also the dataset that makes prediction possible later. Skipping it is why predictive projects stall.",
      ] },
      { heading: "Triggers that people trust", paragraphs: [
        "An alert that fires wrongly three times is an alert everyone learns to ignore. Thresholds are set from observed behaviour rather than from a specification sheet, and each one is reviewed after a few weeks of real data.",
        "Where a genuine model is justified we build it, and we are honest that most equipment fails too rarely to train one quickly.",
      ] },
    ],
    useCases: [
      "Real-time line status and andon for the shop floor",
      "OEE and downtime reporting with causes attached",
      "Condition triggers on vibration, temperature and current draw",
      "Energy per unit tracked against production output",
      "Multi-site comparison from a single view",
    ],
    deliverables: [
      "Dashboards scoped to named roles and decisions",
      "Metric definitions agreed and documented",
      "Alerting rules with thresholds and escalation paths",
      "Scheduled reports in the format your meetings use",
      "Handover so your team can add views without us",
    ],
    faqs: [
      { q: "Do we need IIoT in place first?", a: "You need the signals. If your machines already expose them over a network, we can build on that; if they do not, the gateway layer comes first and we scope it honestly." },
      { q: "Can it read our ERP as well as the machines?", a: "Yes, and it usually should. Output without orders and downtime without schedule context tells only half the story." },
      { q: "How long before it is useful?", a: "Visibility dashboards change decisions within weeks because the data is already being produced. Anything predictive takes considerably longer and depends on how often the equipment actually fails." },
    ],
  },
];

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  body: string;
  image: string;
  challenges: string[];
  /** Long-form detail — only rendered on /industries/[slug]. */
  sections: Section[];
  /** Typical jobs we are brought in to do in this sector. */
  applications: string[];
  /** Standards and regimes that shape the engineering here. */
  considerations: { label: string; value: string }[];
  faqs: Faq[];
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    name: "Automotive & Auto Ancillaries",
    summary: "Line automation and traceability for tier suppliers and OEM plants.",
    body:
      "Automotive lines run to takt time, and every part needs a history. We build control and traceability systems that keep pace with the line while recording what happened to each unit — torque values, test results, serial genealogy — so a recall question takes minutes to answer instead of weeks.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80",
    challenges: ["Takt-time pressure", "Part-level traceability", "Zero-defect targets", "Mixed-model lines"],
    sections: [
      { heading: "Running to takt", paragraphs: [
        "An automotive line is paced. Every station has a budget of seconds, and control that adds a fraction to a cycle multiplies across a shift into lost units. Logic here is written for determinism first — predictable scan behaviour, no waiting on a network call to make a decision.",
        "That constraint shapes where data collection sits. Recording happens alongside the cycle rather than inside it, so instrumenting a station never costs you takt." ] },
      { heading: "Traceability that survives a recall question", paragraphs: [
        "Part-level history is the difference between a contained recall and an uncontained one. Torque values, test results, component serials and station pass/fail need to attach to a unit and stay attached through the rest of the build.",
        "The engineering problem is genealogy: keeping the link intact when units merge into assemblies and assemblies into vehicles. Designed in from the start it is straightforward; added later it usually means re-reading barcodes at stations that were never built to scan." ] },
      { heading: "Mixed-model without stopping", paragraphs: [
        "Lines increasingly carry variants down the same track. Control has to read what is coming, select the right parameters, and confirm the right parts were fitted, without a changeover pause.",
        "Recipe-driven control handles this cleanly. The alternative — logic branching per variant — becomes unmaintainable by about the fourth model." ] },
    ],
    applications: [
      "Station control and interlocking on assembly and sub-assembly lines",
      "Torque, leak and functional test data capture tied to unit serials",
      "Serial genealogy across component, assembly and vehicle levels",
      "Recipe-driven changeover for mixed-model production",
      "Line-side andon, downtime attribution and OEE reporting",
    ],
    considerations: [
      { label: "Takt time", value: "Control must not add to cycle" },
      { label: "Traceability", value: "Part-level history through assembly" },
      { label: "Variant handling", value: "Recipe-driven, no changeover stop" },
    ],
    faqs: [
      { q: "Can you add traceability without slowing the line?", a: "Yes, if the capture runs alongside the cycle rather than inside it. Where a station has no spare time at all, the honest answer is that you need either a buffer or a slightly longer takt, and we say so before quoting." },
      { q: "How far back can genealogy be reconstructed?", a: "Only as far as the data already links. If units were never marked at a merge point, that link cannot be recovered retrospectively — it has to be built in going forward." },
      { q: "Do you work with tier suppliers or only OEMs?", a: "Both. Tier plants often have the harder problem, because they run more variants on fewer lines with tighter capital budgets." },
    ],
  },
  {
    slug: "pharma",
    name: "Pharma & Life Sciences",
    summary: "GxP-aware control and data integrity for regulated production.",
    body:
      "In regulated production the record matters as much as the process. We engineer control systems with audit trails, access control, and electronic records designed for GxP expectations — with validation documentation prepared alongside the build rather than reconstructed afterwards.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1400&q=80",
    challenges: ["Audit trails & e-records", "Validation documentation", "Access control", "Batch reporting"],
    sections: [
      { heading: "The record is part of the product", paragraphs: [
        "In regulated production, a batch you cannot evidence is a batch you cannot ship. Control systems here carry audit trails, user attribution and electronic records as first-class requirements rather than features added at the end.",
        "That changes the build sequence. Specification and validation documentation are produced alongside the engineering, because reconstructing them afterwards is both expensive and unconvincing to an auditor." ] },
      { heading: "Access control that means something", paragraphs: [
        "Shared logins make an audit trail worthless — if everyone is “operator”, nothing is attributable. Individual accounts, role-based permissions and enforced re-authentication for critical actions are what make the record defensible.",
        "This is usually the least popular change on the floor and the one auditors examine first, so it is worth agreeing early rather than at qualification." ] },
      { heading: "Change control after go-live", paragraphs: [
        "A validated system is not frozen, but changes to it follow a documented route: assessment, approval, testing, and a record of what changed and why. Ad-hoc edits to a validated program are how sites lose their qualified status.",
        "We hand over with that process defined, so your team can maintain the system without putting its validation at risk." ] },
    ],
    applications: [
      "Control systems engineered to GxP data-integrity expectations",
      "Audit trails and role-based access with individual attribution",
      "Electronic batch records and recipe management",
      "Environmental monitoring with alarm and excursion reporting",
      "Validation documentation prepared alongside the build",
    ],
    considerations: [
      { label: "Data integrity", value: "Attributable, legible, contemporaneous" },
      { label: "Validation", value: "Documented alongside the build" },
      { label: "Change control", value: "Defined route after go-live" },
    ],
    faqs: [
      { q: "Are you a certified validation provider?", a: "We are not a certifying body and do not claim any regulatory approval. We engineer to the data-integrity and documentation expectations your quality team works to, and produce the records they need for their own validation process." },
      { q: "Can our existing system be brought up to standard?", a: "Often, though it depends on the platform. Systems without individual user accounts or a tamper-evident audit trail sometimes cannot be retrofitted, and replacing the layer is cheaper than arguing the case." },
      { q: "Who owns the validation documentation?", a: "You do. It is handed over with the system, because your quality team will be the ones defending it." },
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    summary: "Hygienic automation, recipe control, and cold-chain visibility.",
    body:
      "Food production combines hygiene constraints with fast product changeovers. We build recipe-driven control that switches product without a rewrite, washdown-rated hardware that survives cleaning cycles, and cold-chain monitoring that proves temperature was held end to end.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80",
    challenges: ["Washdown environments", "Fast changeovers", "Recipe management", "Cold-chain proof"],
    sections: [
      { heading: "Everything gets washed down", paragraphs: [
        "Hygiene routines are hard on equipment. Enclosures, glands, sensors and cabling all have to survive high-pressure water, caustic cleaners and temperature swings, several times a day, for years.",
        "That drives specification more than anything else here — appropriate ingress ratings, stainless where required, sloped surfaces that shed water, and no horizontal ledges that hold it. Getting this wrong shows up as intermittent faults that look electrical and are actually moisture." ] },
      { heading: "Changeover is the real constraint", paragraphs: [
        "Most food plants make more products than they have lines, so throughput is decided by how quickly you can switch. Recipe-driven control turns a changeover from a manual reconfiguration into a selection, with the parameters, setpoints and checks changing together.",
        "It also removes a class of quality incident: the wrong setting left over from the previous product." ] },
      { heading: "Proving the cold chain", paragraphs: [
        "For chilled and frozen product, temperature history is evidence. Continuous monitoring across storage and transfer, with alarms that reach someone who can act before product is at risk, is worth more than a report produced after the fact.",
        "The records also settle disputes with customers and auditors quickly, which is usually where the value shows up first." ] },
    ],
    applications: [
      "Washdown-rated control panels and field instrumentation",
      "Recipe-driven changeover and parameter management",
      "CIP sequence control with verification records",
      "Cold-chain temperature monitoring and excursion alarms",
      "Filling, weighing and packing line control",
    ],
    considerations: [
      { label: "Washdown", value: "Ingress rating drives specification" },
      { label: "Changeover", value: "Recipe-driven, not manual" },
      { label: "Cold chain", value: "Continuous record, actionable alarms" },
    ],
    faqs: [
      { q: "Will the equipment survive our cleaning routine?", a: "It will if it is specified for it. Tell us the chemicals, pressures and frequency and we specify to that — the common failure is equipment rated for dust being installed where it will be hosed down." },
      { q: "Can recipes be managed without engineering support?", a: "Yes, and they should be. Recipe parameters belong to production, with a documented range they can move within and a change route for anything outside it." },
      { q: "How much does cold-chain monitoring cost to run?", a: "The metering is inexpensive; the value is in alarms reaching someone in time. Budget for who responds at 2 a.m. as much as for the sensors." },
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    summary: "Monitoring and control for solar and distributed generation.",
    body:
      "Generation assets are spread out and often unstaffed, which makes remote visibility the whole game. We deploy monitoring and control for solar and distributed generation — string-level performance, inverter health, and yield reporting that flags an underperforming array before the month closes.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80",
    challenges: ["Unstaffed remote sites", "String-level performance", "Inverter health", "Yield reporting"],
    sections: [
      { heading: "Nobody is standing there", paragraphs: [
        "Generation assets are spread out and usually unstaffed, so remote visibility is the whole job. A fault that a manned plant would notice in minutes can run for weeks on a remote array, and the loss is silent.",
        "That makes connectivity design as important as the monitoring itself. Sites with poor coverage need edge buffering, so a dropped link costs you latency rather than a hole in the yield record." ] },
      { heading: "Underperformance hides in averages", paragraphs: [
        "A site can meet its overall target while a portion of it quietly underperforms. String-level and inverter-level measurement is what separates soiling from shading from a genuine fault, and it is the difference between cleaning the array and replacing hardware.",
        "Comparative analysis does most of the work here: strings under identical conditions should behave identically, and the ones that do not are where to look." ] },
      { heading: "Yield reporting that settles arguments", paragraphs: [
        "Where generation is sold or shared, the record is commercial. Metering has to be accurate, calibrated and traceable, and the reports have to reconcile with what the counterparty sees.",
        "Building that properly at commissioning avoids a category of dispute that is very difficult to settle after the fact." ] },
    ],
    applications: [
      "Remote monitoring for unstaffed solar and distributed generation",
      "String-level performance comparison and fault isolation",
      "Inverter health monitoring and alarm escalation",
      "Yield and availability reporting for commercial settlement",
      "Edge buffering at sites with unreliable connectivity",
    ],
    considerations: [
      { label: "Remote sites", value: "Connectivity design comes first" },
      { label: "Granularity", value: "String level, not site average" },
      { label: "Settlement", value: "Calibrated, traceable metering" },
    ],
    faqs: [
      { q: "Our site has poor mobile coverage — is monitoring still viable?", a: "Yes. Edge nodes record locally and forward when the link returns, so intermittent coverage delays the data rather than losing it. Alarms can also be sent over SMS where data is unreliable." },
      { q: "Can you monitor inverters from different manufacturers?", a: "Usually. Most modern inverters expose Modbus or a documented API. Mixed fleets are normalised at the gateway so one dashboard covers the site." },
      { q: "How do we tell soiling from a fault?", a: "By comparing strings under the same conditions. Uniform decline across the array points to soiling; divergence between comparable strings points to a fault worth sending someone for." },
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    summary: "Telemetry and safety systems for demanding process environments.",
    body:
      "Process environments carry consequences that other industries do not. We work to the safety and reliability expectations the sector demands — hardened telemetry from remote assets, redundant control paths, and instrumentation rated for the area classification it sits in.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80",
    challenges: ["Hazardous area classification", "Remote telemetry", "Redundant control paths", "Safety integrity"],
    sections: [
      { heading: "Area classification drives everything", paragraphs: [
        "In classified areas the equipment specification is not a preference, it is a legal and safety constraint. Certification, protection method and installation practice all follow the zone, and the drawings must show it.",
        "This shapes cost and lead time more than any other factor here, which is why classification is settled at the start rather than discovered during installation." ] },
      { heading: "Safety functions stand apart", paragraphs: [
        "Safety instrumented functions are engineered, tested and documented separately from process control. Mixing the two — putting a trip in the same logic that runs the process — is how a single fault takes out both the control and the protection.",
        "Independence, proof testing and documented function descriptions are what make the protection layer credible when it is examined." ] },
      { heading: "Telemetry from places nobody visits", paragraphs: [
        "Wellheads, pipelines and remote stations report over links that are slow, intermittent, or both. Protocols are chosen for tolerance rather than throughput, and edge buffering keeps the record whole across an outage.",
        "Power is often the harder constraint than signal, so the instrument set is specified for the energy budget available at the site." ] },
    ],
    applications: [
      "Instrumentation and control for classified areas",
      "Safety instrumented functions engineered independently of process control",
      "Remote telemetry from wellheads, pipelines and unmanned stations",
      "Redundant control paths for continuous process",
      "Tank gauging, flow measurement and custody transfer support",
    ],
    considerations: [
      { label: "Area classification", value: "Zone decides every specification" },
      { label: "Safety integrity", value: "Protection independent of control" },
      { label: "Remote power", value: "Energy budget shapes instrument set" },
    ],
    faqs: [
      { q: "Do you carry hazardous-area certification?", a: "We do not issue certification and we do not claim any. We specify certified equipment appropriate to the zone and install to the practices the classification requires, with the documentation your safety authority needs." },
      { q: "Can safety functions share the process controller?", a: "They should not. A shared controller means one fault can remove both the control and the protection, which is exactly what the separation exists to prevent." },
      { q: "What if the remote site has no reliable power?", a: "Then the instrument set is specified to the energy available, which usually means fewer measurements sampled less often. It is better to design to that honestly than to install something that browns out." },
    ],
  },
  {
    slug: "textiles",
    name: "Textiles",
    summary: "Machine retrofits and energy optimization for high-volume mills.",
    body:
      "Mills often run capable machines held back by obsolete controls. Retrofitting the control layer is far cheaper than replacing the machine, and it unlocks production data the original equipment never exposed — plus energy sub-metering that usually pays for the project on its own.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    challenges: ["Obsolete machine controls", "Spare-part scarcity", "Energy intensity", "Production visibility"],
    sections: [
      { heading: "Good machines, dead controls", paragraphs: [
        "Mills are full of mechanically sound machines running on controllers nobody can source parts for. The machine has years left; the electronics decide its life. That is an unusually good case for retrofit, because the expensive part is already paid for.",
        "Replacing the control layer typically costs a fraction of new equipment and returns the machine to a supportable platform with spares your maintenance team can actually buy." ] },
      { heading: "Data the machine never offered", paragraphs: [
        "A retrofit is also the cheapest moment to add visibility. Original equipment often reported nothing — no count, no stoppage reason, no efficiency. The new control layer can expose all of it because the sensors and wiring are being touched anyway.",
        "Doing it later means a second intervention on the same machine, at a second cost, for data that could have come free with the first." ] },
      { heading: "Energy is the margin", paragraphs: [
        "Textile production is energy-intensive, and in most mills consumption is measured at the incomer and nowhere else. Sub-metering per machine or per section usually finds enough — idle running, compressed air leaks, motors oversized for their duty — to fund a good part of the project.",
        "Rising consumption on a fixed duty is also an early mechanical warning, which is useful in a plant where condition monitoring is rarely justified on its own." ] },
    ],
    applications: [
      "Control retrofits on spinning, weaving and processing machinery",
      "Migration from obsolete controllers to supportable platforms",
      "Production counting, stoppage reasons and efficiency reporting",
      "Energy sub-metering per machine and per section",
      "Centralised monitoring across a mill floor",
    ],
    considerations: [
      { label: "Obsolescence", value: "Controls end machine life, not mechanics" },
      { label: "Retrofit economics", value: "A fraction of replacement cost" },
      { label: "Energy intensity", value: "Sub-metering often funds the project" },
    ],
    faqs: [
      { q: "Is a retrofit worth it on an old machine?", a: "It depends on the mechanical condition. If the machine still holds tolerance and the frame is sound, replacing the control layer is usually far cheaper than replacing the machine. If the mechanics are worn out, a retrofit only buys you a well-controlled worn-out machine." },
      { q: "Can we do one machine first?", a: "Yes, and we usually recommend it. One machine proves the approach, gives you real numbers, and makes the case for the rest with your own data rather than our estimate." },
      { q: "Will production data need new sensors?", a: "Some of it comes free from the retrofit, since the control layer already knows what the machine is doing. Stoppage reasons often need an operator input, which is a small addition worth making at the same time." },
    ],
  },
  {
    slug: "ev-battery",
    name: "EV & Battery Manufacturing",
    summary: "Cell, module and pack lines where traceability and safety are the same requirement.",
    body:
      "Battery lines carry automotive takt pressure with process-industry consequences. We build control and traceability for cell handling, module assembly and pack finishing — where a cell that fails later has to be traceable to its formation data, and where a thermal event is a safety case rather than a quality one.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80",
    challenges: ["Cell-level traceability", "Thermal & safety interlocks", "Dry-room conditions", "Rapid line ramp-up"],
    sections: [
      { heading: "Traceability down to the cell", paragraphs: [
        "A pack is only as traceable as its weakest join. Cell serials have to survive sorting, stacking, welding and enclosure, and attach to the module and pack that eventually carry them — because a field failure is investigated at cell level, not pack level.",
        "Marking and reading strategy is decided early for that reason. Cells that were never individually identified cannot be retrofitted into a genealogy afterwards.",
      ] },
      { heading: "Safety interlocks that are not advisory", paragraphs: [
        "Cell handling introduces hazards most assembly lines do not have: stored energy in every part, thermal runaway as a credible fault, and electrolyte handling in the upstream steps. Interlocks here are engineered as safety functions with defined performance levels, not as PLC logic that happens to stop a conveyor.",
        "We design the safety architecture with your EHS team and keep it separate from process logic, so a production change cannot quietly weaken it.",
      ] },
      { heading: "Ramping a line that is still changing", paragraphs: [
        "Battery plants commission while the product design is still moving. Control that hard-codes a cell format or a stacking count becomes an obstacle by the second variant.",
        "We keep format-dependent values in recipe data and parameterise the station logic, so a design change is a data change and a requalification rather than a rewrite.",
      ] },
    ],
    applications: [
      "Cell sorting, stacking and module assembly station control",
      "Serial genealogy from cell through module to finished pack",
      "Welding and joining parameter capture tied to unit serials",
      "Dry-room and environmental monitoring with excursion records",
      "End-of-line test data capture and pass/fail attribution",
    ],
    considerations: [
      { label: "Traceability", value: "Cell-level genealogy through the pack" },
      { label: "Safety", value: "Rated safety functions, kept separate" },
      { label: "Change", value: "Format handled as recipe data" },
    ],
    faqs: [
      { q: "Can you work to our cell supplier's marking scheme?", a: "Yes. The reading strategy is designed around whatever marking already exists; where cells arrive unmarked, we design the first identification point and are clear about what it costs in cycle time." },
      { q: "Do you handle the safety case?", a: "We engineer the safety functions and provide the documentation for them. The safety case itself belongs with your EHS and certification route, and we work into it rather than around it." },
      { q: "Our line design is not frozen yet — is that a problem?", a: "It is normal. It changes how the logic is written, not whether we can start: format-dependent values live in data from day one." },
    ],
  },
  {
    slug: "material-handling",
    name: "Material Handling & Logistics",
    summary: "Conveying, sortation and warehouse automation controlled as one system.",
    body:
      "Warehouses and distribution centres fail at their transitions — between conveyor zones, between automation and people, between the control system and the WMS. We engineer conveying, sortation and storage control with those handshakes designed rather than improvised, so throughput holds up when the volume arrives.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1400&q=80",
    challenges: ["Peak-volume throughput", "WMS/WCS integration", "Zone recovery after a jam", "Mixed manual and automated flow"],
    sections: [
      { heading: "Throughput is decided at the merges", paragraphs: [
        "Straight conveyor is easy. The rate a facility actually achieves is set at merges, diverts and induction points, where control decides which unit goes first and how far back the decision propagates.",
        "We model those points before commissioning, because a merge that stalls under load cannot be fixed with a faster motor.",
      ] },
      { heading: "Recovery without a full restart", paragraphs: [
        "Jams are routine, not exceptional. The measure of a good system is how much of it keeps running while one zone is cleared, and how little operator judgement is needed to bring that zone back.",
        "Zone-level recovery is designed in from the start. Systems that require a global reset teach staff to clear faults by restarting everything, which is where the real downtime accumulates.",
      ] },
      { heading: "The handshake with the WMS", paragraphs: [
        "Most integration pain here is not protocol, it is ownership: which system decides a destination, which one holds the truth when they disagree, and what happens to a unit whose instruction never arrived.",
        "We agree those rules in writing before building, and design an explicit exception route, because units without instructions are the ones that end up in a corner of the warehouse.",
      ] },
    ],
    applications: [
      "Conveyor, sorter and diverter control across zones",
      "Barcode and scanner induction with exception handling",
      "AS/RS and shuttle system integration",
      "WCS-to-WMS interfacing with defined ownership rules",
      "Throughput, dwell and jam reporting by zone",
    ],
    considerations: [
      { label: "Peak load", value: "Designed at merges, not average rate" },
      { label: "Recovery", value: "Zone-level, no global restart" },
      { label: "Integration", value: "Ownership agreed before build" },
    ],
    faqs: [
      { q: "Can you integrate with our existing WMS?", a: "Yes, and the work is mostly in agreeing the rules rather than the interface. We ask early which system wins when the two disagree." },
      { q: "Will it hold our peak-season rate?", a: "We size against your peak, not your average, and we tell you which merge is the limiting point. That is usually the honest answer about a facility's ceiling." },
      { q: "Can we phase this in without stopping despatch?", a: "Normally yes, by zone, with the existing flow running beside the new one. It takes longer than a shutdown cutover and is usually worth it." },
    ],
  },
  {
    slug: "printing-paper",
    name: "Printing & Paper",
    summary: "Web tension, registration and drive synchronisation on continuous lines.",
    body:
      "A press or paper machine is a synchronisation problem before it is a control problem. We engineer the drive coordination, tension zones and registration control that keep a web running at speed without breaks, and instrument the line so waste is attributable rather than annualised.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80",
    challenges: ["Web tension control", "Registration accuracy", "Web breaks & restarts", "Makeready waste"],
    sections: [
      { heading: "Tension zones, not a tension setpoint", paragraphs: [
        "A web behaves differently through unwind, process and rewind, and treating it as one controlled quantity is how lines end up with breaks nobody can attribute. Each zone is closed on its own measurement and coordinated with its neighbours.",
        "Getting this right removes a category of intermittent breaks that otherwise gets blamed on material quality.",
      ] },
      { heading: "Registration at speed", paragraphs: [
        "Registration error is mostly a dynamics problem: the correction has to arrive faster than the disturbance repeats. That puts the requirement on the drive and feedback resolution long before it lands on the control algorithm.",
        "We size that chain to the line's real speed and the tolerance the product actually needs, which is often tighter in the specification than in practice.",
      ] },
      { heading: "Where the waste actually goes", paragraphs: [
        "Most sites know their annual waste figure and not its distribution. Recording it by job, shift, substrate and reason turns makeready from an accepted cost into something that can be worked on.",
        "The instrumentation for it is modest — counters, a break log with causes, and job context from the scheduling system.",
      ] },
    ],
    applications: [
      "Multi-drive synchronisation across unwind, process and rewind",
      "Closed-loop tension control by zone",
      "Registration and colour-to-colour correction",
      "Web break detection with cause logging",
      "Makeready and waste reporting by job and substrate",
    ],
    considerations: [
      { label: "Tension", value: "Zoned and independently closed" },
      { label: "Dynamics", value: "Correction faster than disturbance" },
      { label: "Waste", value: "Attributed by job, not annualised" },
    ],
    faqs: [
      { q: "Can you retrofit tension control to an older press?", a: "Usually. The deciding factor is whether the drives can accept the command rate needed; where they cannot, the drive upgrade comes first and we say so before quoting the control." },
      { q: "Will this reduce our web breaks?", a: "It reduces the ones caused by tension and synchronisation, which in our experience is a large share. It does not fix breaks caused by material defects, and the logging makes that distinction visible." },
      { q: "Do you work on paper machines as well as presses?", a: "Yes. The engineering problem — coordinated drives and controlled tension across a continuous web — is the same one at a different scale." },
    ],
  },
  {
    slug: "electronics",
    name: "EMS & Electronics Manufacturing",
    summary: "SMT line integration, test data capture and traceability for contract manufacture.",
    body:
      "Electronics assembly runs at high mix, tight tolerance, and with a customer who wants evidence. We integrate SMT and back-end lines, capture test and inspection results against unit serials, and connect the floor to the systems that plan it — so changeovers are quick and the traceability holds up under an audit.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1400&q=80",
    challenges: ["High-mix changeover", "Unit-level test records", "ESD & process discipline", "Machine data from mixed vendors"],
    sections: [
      { heading: "High mix means changeover is the process", paragraphs: [
        "A line running dozens of products a week spends a significant share of its time changing over. Control that makes setup verification automatic — right feeder, right program, right stencil — recovers more capacity than a faster placement head would.",
        "Verification also removes the most expensive defect class in this sector, which is a correct process run against the wrong configuration.",
      ] },
      { heading: "Test data that means something later", paragraphs: [
        "AOI, ICT and functional test results are only useful if they attach to a unit and stay attached through depanelisation and boxing. That is a marking and data-model problem as much as a test problem.",
        "Built in properly, a customer question about one serial takes minutes. Built in loosely, it takes a week of spreadsheet reconciliation.",
      ] },
      { heading: "Getting data out of mixed-vendor equipment", paragraphs: [
        "Few EMS lines are single-vendor. Printers, placers, ovens, inspection and test typically speak different dialects, and the useful data is often behind a proprietary interface.",
        "We normalise it at the gateway layer so the line reports as one system, rather than asking your team to open five vendor tools to answer one question.",
      ] },
    ],
    applications: [
      "SMT line integration across mixed-vendor equipment",
      "Automated setup and changeover verification",
      "Serial-level capture of AOI, ICT and functional test results",
      "Traceability through depanelisation and packing",
      "Line OEE and first-pass-yield reporting",
    ],
    considerations: [
      { label: "Mix", value: "Changeover verified, not trusted" },
      { label: "Records", value: "Serial-level, survives depanelisation" },
      { label: "Equipment", value: "Normalised at the gateway" },
    ],
    faqs: [
      { q: "Our machines are from five different vendors — is that workable?", a: "It is the normal case. The work is in normalising the interfaces; once that is done the line reports as one system regardless of who made each machine." },
      { q: "Can this satisfy a customer traceability audit?", a: "It can provide the records. Whether they satisfy a given customer depends on their specification, which we would rather read before quoting than after." },
      { q: "Do you support panel-to-board serial tracking?", a: "Yes, and it is worth designing early. Reconstructing the panel-to-board link after depanelisation is not possible if the boards were never individually marked." },
    ],
  },
  {
    slug: "packaging",
    name: "Packaging & Converting",
    summary: "End-of-line automation, recipe changeover and OEE on high-speed packaging.",
    body:
      "Packaging lines are a chain of machines from different suppliers that have to behave like one. We engineer the line control that coordinates them, the recipe handling that makes a format change quick, and the reporting that shows which machine actually caused the stop.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1400&q=80",
    challenges: ["Format changeover time", "Line balancing & accumulation", "Fault attribution across OEMs", "Date coding & compliance"],
    sections: [
      { heading: "A line, not a row of machines", paragraphs: [
        "Individually capable machines produce a line that runs badly when nothing coordinates them. Accumulation, starve-and-block behaviour and restart order are line-level decisions that no single OEM controller makes.",
        "We add that layer and keep it thin, so each machine keeps its own vendor support while the line as a whole has an owner.",
      ] },
      { heading: "Changeover measured in minutes", paragraphs: [
        "Format change is where packaging capacity is won and lost. Recipe-driven parameters, guided setup and automatic verification turn a shift-long change into a short one, and remove the variation between the best operator and the newest.",
        "Where machines need mechanical adjustment, we are explicit that control can guide it but not eliminate it.",
      ] },
      { heading: "Knowing which machine stopped the line", paragraphs: [
        "The machine that shows the fault is frequently not the machine that caused it — a downstream stop starves the filler, and the filler logs the alarm. Attribution has to account for propagation or the reporting blames the wrong asset every time.",
        "We build the attribution logic explicitly, because this single point decides whether OEE data changes any maintenance decision.",
      ] },
    ],
    applications: [
      "Line-level control coordinating multi-vendor machines",
      "Recipe-driven format changeover with setup verification",
      "Accumulation and line-balancing logic",
      "Date, batch and code verification with reject handling",
      "OEE with propagation-aware downtime attribution",
    ],
    considerations: [
      { label: "Coordination", value: "Line layer above OEM controls" },
      { label: "Changeover", value: "Recipe-driven and verified" },
      { label: "Attribution", value: "Accounts for starve and block" },
    ],
    faqs: [
      { q: "Will adding a line controller void our machine warranties?", a: "It should not, because the layer sits above the machines and communicates rather than modifying their internal logic. We confirm the interface with each OEM before committing to it." },
      { q: "Our OEE numbers are not believed on the floor — can that be fixed?", a: "Usually, and the cause is almost always attribution rather than measurement. If the reports blame the filler for a downstream stop, nobody will trust them, and rightly." },
      { q: "How much changeover time can we realistically save?", a: "It depends on how much of your change is mechanical. We measure a real changeover before estimating, rather than quoting a percentage from another site." },
    ],
  },
  {
    slug: "plastics-rubber",
    name: "Plastics & Rubber",
    summary: "Injection, extrusion and moulding control with process data tied to every shot.",
    body:
      "Moulding and extrusion are process industries running at discrete-part rates. We integrate machine control, auxiliaries and material handling, and capture the process conditions behind each shot — so a quality question has a temperature and pressure record attached rather than an opinion.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    challenges: ["Cycle-to-cycle consistency", "Mould change downtime", "Auxiliary equipment integration", "Scrap and regrind tracking"],
    sections: [
      { heading: "The record behind the part", paragraphs: [
        "Two parts from the same tool can differ because the melt temperature drifted or the hold pressure changed. Without a per-shot record, that investigation becomes guesswork and usually ends by adjusting a setpoint until the symptom disappears.",
        "Capturing conditions per cycle costs little and converts quality arguments into data ones.",
      ] },
      { heading: "Auxiliaries are part of the process", paragraphs: [
        "Dryers, chillers, temperature controllers and material conveying determine outcomes as much as the machine does, yet they are frequently uninstrumented and manually set.",
        "Bringing them into the same control and data layer explains a large share of the variation that otherwise looks random at the press.",
      ] },
      { heading: "Mould change as a planned event", paragraphs: [
        "Tool changes are frequent and their duration is highly variable between operators. Recipe recall, guided setup and automatic verification of the loaded tool compress that variation.",
        "It also prevents the expensive failure mode of running a correct cycle against the wrong tool parameters.",
      ] },
    ],
    applications: [
      "Injection and extrusion machine integration with per-shot data",
      "Auxiliary control for dryers, chillers and temperature units",
      "Recipe recall and tool verification at mould change",
      "Scrap, regrind and material consumption tracking",
      "Process trend and drift alerting per tool",
    ],
    considerations: [
      { label: "Process record", value: "Conditions captured per cycle" },
      { label: "Auxiliaries", value: "Instrumented, not manually set" },
      { label: "Changeover", value: "Tool verified against recipe" },
    ],
    faqs: [
      { q: "Can you get data out of our existing moulding machines?", a: "Usually yes, via the machine's own interface where one exists, or by instrumenting externally where it does not. We check machine by machine rather than assuming a fleet answer." },
      { q: "Is per-shot data too much to store?", a: "No — it is modest by modern standards, and it is the dataset that makes quality investigations quick. We size the retention with you." },
      { q: "Will this reduce scrap?", a: "It makes the causes visible, which is the prerequisite. The reduction comes from acting on what it shows, and the first finds are usually auxiliaries and drift rather than the press itself." },
    ],
  },
  {
    slug: "hvac",
    name: "HVAC & Chiller Systems",
    summary: "Plant-room control and sequencing that cuts energy without losing the setpoint.",
    body:
      "Chiller plants and air handling are among the largest controllable loads on most sites, and among the least optimised. We engineer sequencing, staging and setpoint strategy with metering underneath it, so the plant delivers the condition the process needs at the lowest energy that satisfies it.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1400&q=80",
    challenges: ["Chiller staging & sequencing", "Part-load efficiency", "Setpoint drift", "Legacy controller integration"],
    sections: [
      { heading: "Most plant runs at part load", paragraphs: [
        "Chiller plants are sized for a design day that occurs rarely and then spend the year at part load, where sequencing decides efficiency far more than equipment selection does.",
        "Staging strategy, condenser water reset and pump control are where the savings are, and they are control changes rather than capital ones.",
      ] },
      { heading: "Setpoints drift and nobody notices", paragraphs: [
        "Over years, setpoints get nudged to solve a complaint and never returned. A plant can end up running several degrees tighter than any process requires, at significant cost, with no record of why.",
        "We baseline the current settings, record what each one is for, and alarm on unexplained change — which is a cheap fix with a fast return.",
      ] },
      { heading: "Working with the controllers already there", paragraphs: [
        "Plant rooms accumulate controllers from different decades and vendors. Replacing all of them is rarely justified; getting them onto a common supervisory layer usually is.",
        "We integrate what can be integrated and are honest about which units are too closed or too old to be worth keeping.",
      ] },
    ],
    applications: [
      "Chiller staging and sequencing strategy",
      "Condenser water and chilled water reset control",
      "Variable-speed pump and fan control",
      "Sub-metering of plant-room energy against cooling delivered",
      "Supervisory integration of mixed legacy controllers",
    ],
    considerations: [
      { label: "Part load", value: "Sequencing drives real efficiency" },
      { label: "Setpoints", value: "Baselined and change-alarmed" },
      { label: "Legacy", value: "Integrated where worthwhile" },
    ],
    faqs: [
      { q: "Can you improve efficiency without new equipment?", a: "Often substantially, because sequencing and setpoint strategy are usually where the loss is. We measure before promising a figure." },
      { q: "Will process cooling be at risk?", a: "No. The process requirement is the constraint the strategy is designed around; energy is optimised inside it, never against it." },
      { q: "Do you work on comfort HVAC as well as process cooling?", a: "Yes, though the economics are usually clearest on process and plant-room loads, which is where we would suggest starting." },
    ],
  },
  {
    slug: "water-wastewater",
    name: "Water & Wastewater Treatment",
    summary: "Distributed plant control, remote telemetry and compliance reporting.",
    body:
      "Treatment plants run continuously, across sites, often with nobody on shift. We engineer the control and telemetry that keeps distributed assets supervised from one place, with alarm handling designed for a small team and compliance reporting that comes out of the system rather than out of a spreadsheet.",
    image: "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=1400&q=80",
    challenges: ["Unmanned remote sites", "Consent & compliance reporting", "Pump and dosing control", "Communications reliability"],
    sections: [
      { heading: "Designed for nobody being there", paragraphs: [
        "Remote pumping stations and outstations are visited, not staffed. Control has to ride out a communications outage, keep operating safely on local logic, and reconcile its data when the link returns.",
        "Systems that depend on a live connection to make decisions strand assets every time the network has a bad night.",
      ] },
      { heading: "Alarms a small team can actually work", paragraphs: [
        "A plant that raises hundreds of alarms a shift has effectively no alarm system. Rationalisation — priority, suppression of consequential alarms, and clear operator action for each — is what makes out-of-hours response workable.",
        "This is unglamorous work and it is usually the highest-value thing we do on an existing plant.",
      ] },
      { heading: "Compliance evidence as a by-product", paragraphs: [
        "Consent reporting is built from data the plant already produces. When the records are captured with the right timestamps and retention from the start, the report is generated; when they are not, it is reconstructed monthly by hand.",
        "We design the data model against the reporting obligation rather than fitting the report to whatever was logged.",
      ] },
    ],
    applications: [
      "PLC and SCADA control across treatment stages",
      "Remote outstation telemetry with store-and-forward",
      "Pump station and dosing control with duty rotation",
      "Alarm rationalisation and out-of-hours escalation",
      "Consent and compliance reporting from plant data",
    ],
    considerations: [
      { label: "Autonomy", value: "Local control survives comms loss" },
      { label: "Alarms", value: "Rationalised for a small team" },
      { label: "Reporting", value: "Generated, not reconstructed" },
    ],
    faqs: [
      { q: "Can you connect sites that only have mobile coverage?", a: "Yes, with store-and-forward at the outstation so a gap in coverage costs you data continuity rather than control. We design for the coverage you actually have." },
      { q: "Our operators ignore the alarm list — can that be fixed?", a: "It can, and the fix is rationalisation rather than a new screen. Reducing an alarm flood to a workable list is a defined piece of work with a clear result." },
      { q: "Will the reports satisfy our regulator?", a: "They will contain the data your consent requires, with the timestamps and retention to support it. The regulatory relationship stays yours, and we build to what your compliance team specifies." },
    ],
  },
  {
    slug: "semiconductor",
    name: "Semiconductor",
    summary: "Cleanroom-compatible automation, facilities monitoring and tool data collection.",
    body:
      "Semiconductor environments are unforgiving about contamination, tool uptime and data. We work on the automation and facilities layer around the process tools — material handling, environmental and utility monitoring, and getting tool data into a form the fab's own systems can use.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1400&q=80",
    challenges: ["Cleanroom compatibility", "Tool uptime & interlocks", "Facilities and utility monitoring", "High-value work in progress"],
    sections: [
      { heading: "Everything is a contamination decision", paragraphs: [
        "Component selection, cable specification, panel placement and even maintenance access are constrained by cleanroom class before they are constrained by function.",
        "That has to shape the design from the first drawing. Retrofitting cleanroom compatibility onto equipment specified conventionally usually means buying it twice.",
      ] },
      { heading: "Facilities faults become process faults", paragraphs: [
        "Ultrapure water, process gases, vacuum, temperature and humidity are process inputs, and an excursion in any of them can quietly cost a batch worth more than the monitoring system.",
        "Continuous monitoring with alarming that reaches somebody, plus a record that can be correlated against process events afterwards, is the minimum useful specification.",
      ] },
      { heading: "Tool data into the fab's systems", paragraphs: [
        "Process tools generate substantial data behind vendor interfaces. Getting it into the fab's own analysis and scheduling systems, in a consistent form, is usually more valuable than adding new sensing.",
        "We work at that integration layer rather than attempting to reimplement tool control, which belongs with the tool vendor.",
      ] },
    ],
    applications: [
      "Cleanroom-compatible control panel and equipment design",
      "Facilities monitoring for gases, UPW, vacuum and HVAC",
      "Environmental excursion alarming and correlation records",
      "Tool data collection and normalisation for fab systems",
      "Material handling and interlocking around process tools",
    ],
    considerations: [
      { label: "Cleanroom", value: "Class drives selection, not function" },
      { label: "Facilities", value: "Treated as process inputs" },
      { label: "Tools", value: "Integrated, not reimplemented" },
    ],
    faqs: [
      { q: "Do you work inside the process tools themselves?", a: "No. Tool control belongs with the tool vendor. We work on the automation, facilities and data layers around them, which is where sites usually have the gap." },
      { q: "Can you meet our cleanroom class requirements?", a: "We design to the class you specify, and we would rather have that constraint at the concept stage than at installation, where it becomes expensive." },
      { q: "Can facilities excursions be correlated to yield?", a: "Only if both sides share a reliable clock and sufficient retention. We design for that explicitly, because the correlation is the entire point of the record." },
    ],
  },
  {
    slug: "metals-mining",
    name: "Metals & Mining",
    summary: "Heavy-duty control, drive systems and condition monitoring in harsh conditions.",
    body:
      "Metals and mining punish equipment: dust, vibration, heat, and loads that do not forgive a control error. We engineer robust control and drive systems for crushing, conveying and processing, with condition monitoring on the assets whose failure stops everything downstream.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    challenges: ["Harsh environment reliability", "High-inertia drive control", "Unplanned failure cost", "Remote and distributed assets"],
    sections: [
      { heading: "The environment sets the specification", paragraphs: [
        "Dust ingress, ambient heat and constant vibration decide enclosure ratings, cooling, cable support and connector choice. Equipment specified for a clean plant room fails here in months and is usually replaced with the same specification again.",
        "We design for the conditions on site rather than the conditions in the catalogue, and say plainly where that costs more up front.",
      ] },
      { heading: "Starting and stopping large inertia", paragraphs: [
        "Crushers, mills and long conveyors present starting and braking problems that determine both mechanical life and electrical supply behaviour. Drive selection and control strategy here protect the mechanics as much as they move them.",
        "Belt tension and controlled deceleration on inclined conveyors are safety matters, not efficiency ones.",
      ] },
      { heading: "Monitoring the assets that stop the plant", paragraphs: [
        "Not every asset justifies condition monitoring. The ones with no redundancy, a long lead time on spares, and a whole plant downstream do — and the case for them is usually obvious once the loss per hour is put next to the sensor cost.",
        "We instrument that short list well rather than everything shallowly.",
      ] },
    ],
    applications: [
      "Crusher, mill and conveyor drive control",
      "Controlled start, brake and belt tension on long conveyors",
      "Vibration and temperature condition monitoring on critical assets",
      "Distributed control across remote plant areas",
      "Downtime attribution and production reporting by circuit",
    ],
    considerations: [
      { label: "Environment", value: "Dust, heat and vibration rated" },
      { label: "Drives", value: "Sized for inertia and braking duty" },
      { label: "Monitoring", value: "Deep on the few that matter" },
    ],
    faqs: [
      { q: "Our panels keep failing on site — what changes?", a: "Usually enclosure rating, thermal management and cable entry. It is a specification problem far more often than a component-quality one." },
      { q: "Is condition monitoring worth it for us?", a: "On assets with no redundancy and long spares lead times, almost always. On the rest, frequently not, and we will say which is which rather than sell coverage everywhere." },
      { q: "Can you work on plants without reliable network coverage?", a: "Yes. Local control and buffered data are the normal design here, with the link treated as intermittent by default." },
    ],
  },
  {
    slug: "data-centers",
    name: "Data Centers & Infrastructure",
    summary: "Power, cooling and environmental monitoring for continuously available facilities.",
    body:
      "A data centre's automation exists to prevent one event. We engineer the monitoring and control around power distribution, cooling and environment — with alarming that reaches a human quickly, and a data record precise enough to explain what happened afterwards.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
    challenges: ["Continuous availability", "Power chain visibility", "Cooling efficiency (PUE)", "Change without downtime"],
    sections: [
      { heading: "Visibility across the whole power chain", paragraphs: [
        "Utility, generation, UPS, distribution and rack-level draw are frequently monitored by separate systems that do not share a view. That is how capacity headroom becomes an estimate rather than a number.",
        "Bringing the chain into one supervisory picture is what makes both capacity planning and fault diagnosis possible.",
      ] },
      { heading: "Cooling efficiency without risking the floor", paragraphs: [
        "Cooling is the largest controllable overhead, and the pressure to reduce it runs directly against the tolerance for risk. Efficiency work here is incremental, measured, and always bounded by the thermal envelope the equipment requires.",
        "Metering comes before optimisation, so every change can be evaluated rather than argued about.",
      ] },
      { heading: "Changing a system that cannot stop", paragraphs: [
        "Every modification is made to a live facility. Staged cutover, tested rollback and change windows agreed in advance are not process overhead here — they are the method.",
        "We work to your change control rather than asking for an exception to it.",
      ] },
    ],
    applications: [
      "Monitoring across utility, generator, UPS and distribution",
      "Rack and feeder-level power metering",
      "Cooling plant control and efficiency measurement",
      "Environmental monitoring with rapid alarm escalation",
      "Capacity reporting for power and cooling headroom",
    ],
    considerations: [
      { label: "Availability", value: "Every change staged and reversible" },
      { label: "Power", value: "Whole chain in one view" },
      { label: "Cooling", value: "Metered before optimised" },
    ],
    faqs: [
      { q: "Can you work on a live facility?", a: "Yes, and it is the normal condition. Work is staged with a tested rollback and executed in agreed windows." },
      { q: "Will you integrate with our existing BMS and DCIM?", a: "Where they expose data, yes — replacing them is rarely the right first move. We add the layer that gives one view across what is already installed." },
      { q: "Can you improve our PUE?", a: "Often, within the thermal envelope your equipment requires. We meter first so any change can be evaluated rather than asserted." },
    ],
  },
  {
    slug: "machine-building",
    name: "Machine Building (OEMs)",
    summary: "Control engineering for machine builders — repeatable, documented, ready to ship.",
    body:
      "For an OEM the control system ships with the product and is supported for its life. We act as the control engineering arm for machine builders: a standard architecture across a range, options handled as configuration rather than as forks, and documentation that lets your service team support the field without calling the original programmer.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=80",
    challenges: ["Repeatability across a range", "Options and variants", "Field serviceability", "Customer-specific requirements"],
    sections: [
      { heading: "One architecture across the range", paragraphs: [
        "Machines developed one at a time accumulate a different control approach per model, and the support burden grows with the catalogue. A shared architecture with model-specific configuration keeps that flat.",
        "It also shortens the next machine considerably, which is where the investment repays itself.",
      ] },
      { heading: "Options as data, not as branches", paragraphs: [
        "Every customer asks for something. When options are handled by copying and editing a program, the tenth machine is unmaintainable and no two are truly alike.",
        "Configurable option handling keeps one code base across the range, so a fix made once applies to every machine that ships afterwards.",
      ] },
      { heading: "Supportable by your service team", paragraphs: [
        "The people diagnosing a fault will be your service engineers, often by phone, often across a time zone. Diagnostics, clear fault messages and structured documentation are what make that call short.",
        "We write for that reader, because a machine that only its programmer can debug is a warranty liability.",
      ] },
    ],
    applications: [
      "Standard control architecture across a machine range",
      "Configurable option and variant handling",
      "HMI and diagnostics designed for the end customer",
      "Remote access and support tooling for field service",
      "Documentation packs shipped with each machine",
    ],
    considerations: [
      { label: "Repeatability", value: "One architecture, configured per model" },
      { label: "Options", value: "Data-driven, single code base" },
      { label: "Support", value: "Written for your service engineer" },
    ],
    faqs: [
      { q: "Do we own the control software?", a: "Yes. The source, the documentation and the right to modify it are yours — you are shipping it to your customers, so any other arrangement would be untenable." },
      { q: "Can you work to our customers' platform requirements?", a: "Yes. OEM customers frequently specify a controller brand, and a well-structured architecture ports between platforms with far less pain than an ad-hoc one." },
      { q: "Can you support us during commissioning at end-customer sites?", a: "Yes, either directly or by preparing your engineers to do it. Most OEMs prefer the second after the first few machines." },
    ],
  },
  {
    slug: "building-automation",
    name: "Building Automation",
    summary: "BMS integration, energy control and monitoring across a building portfolio.",
    body:
      "Buildings collect control systems: HVAC from one contractor, lighting from another, metering from a third, none of them talking. We integrate what is installed into a single supervisory and reporting layer, so a portfolio can be operated and compared rather than visited.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1400&q=80",
    challenges: ["Disconnected subsystems", "Portfolio-wide comparison", "Occupancy-driven demand", "Ageing controllers"],
    sections: [
      { heading: "Integrating what is already installed", paragraphs: [
        "Replacing a working BMS is rarely justified. Most of the value is in connecting subsystems that already exist and giving them one supervisory view with consistent naming.",
        "Consistent point naming across sites is the unglamorous prerequisite — without it, portfolio reporting compares things that are not comparable.",
      ] },
      { heading: "Control that follows occupancy", paragraphs: [
        "Buildings frequently condition space to a schedule set years ago rather than to how they are used now. Aligning operation to actual occupancy is usually the largest available saving and requires no new plant.",
        "It needs occupancy data of some kind, and we would rather use what the building already has than add sensing for its own sake.",
      ] },
      { heading: "A portfolio you can compare", paragraphs: [
        "Managing buildings one at a time hides the outliers. Normalised reporting across a portfolio — per square metre, per degree day, per occupied hour — shows which site deserves attention first.",
        "That ranking is what turns a diffuse energy programme into a short list of specific jobs.",
      ] },
    ],
    applications: [
      "Integration of HVAC, lighting, metering and access subsystems",
      "Supervisory dashboards for single sites and portfolios",
      "Occupancy and schedule-driven plant control",
      "Sub-metering and normalised energy reporting",
      "Fault and drift detection across building plant",
    ],
    considerations: [
      { label: "Integration", value: "Connect first, replace rarely" },
      { label: "Naming", value: "Consistent points across sites" },
      { label: "Reporting", value: "Normalised for comparison" },
    ],
    faqs: [
      { q: "Do we need to replace our BMS?", a: "Usually not. If it controls adequately and exposes data, the gain is in the layer above it. We would rather tell you that than sell a replacement." },
      { q: "Can you work across mixed vendors and generations?", a: "Yes — that is the normal condition. Some very old controllers are genuinely closed, and we identify those early rather than discovering them mid-project." },
      { q: "How many sites make this worthwhile?", a: "The comparison value starts around a handful of buildings. Below that, single-site optimisation is usually the better investment." },
    ],
  },
  {
    slug: "aerospace",
    name: "Aerospace",
    summary: "Precision process control, full traceability and evidence for a regulated supply chain.",
    body:
      "Aerospace manufacture is low volume, high consequence, and heavily documented. We build control and data capture where the record is part of the deliverable — process parameters proven and retained, operations locked to an approved sequence, and traceability that holds for the decades a part stays in service.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    challenges: ["Process parameter control", "Long-horizon traceability", "Approved sequence enforcement", "Low volume, high mix"],
    sections: [
      { heading: "The record outlives the machine", paragraphs: [
        "A part may be in service for decades, and the evidence behind it has to remain readable and attributable for that whole period. That makes data format, retention and export as much a design decision as the control itself.",
        "We design against that horizon rather than against the current system's lifetime, because a record trapped in an obsolete database is effectively lost.",
      ] },
      { heading: "Locked to the approved process", paragraphs: [
        "Where a process is qualified, running outside its parameters is a non-conformance regardless of the result. Control enforces the approved window, records deviations, and makes an override a deliberate, attributed act.",
        "Systems that let a parameter be adjusted quietly cannot support the quality case built on top of them.",
      ] },
      { heading: "Low volume does not mean simple", paragraphs: [
        "High-mix, low-volume work means frequent changeover, more manual steps and more opportunity for the wrong configuration. Guided sequence and verification at each operation is what keeps that from becoming a scrap event on a very expensive part.",
        "The economics differ from mass production: the cost of one wrong part justifies verification that a high-volume line would not bother with.",
      ] },
    ],
    applications: [
      "Process parameter control with enforced approved windows",
      "Operation sequencing with step-level verification",
      "Serial traceability designed for decades of retention",
      "Deviation and override recording with attribution",
      "Test and inspection data capture against each unit",
    ],
    considerations: [
      { label: "Retention", value: "Readable across decades" },
      { label: "Process", value: "Approved window enforced" },
      { label: "Mix", value: "Verification at every operation" },
    ],
    faqs: [
      { q: "Do you hold aerospace quality approvals?", a: "We do not claim any certification we do not hold. We engineer to the requirements your quality system defines and produce the records it needs — the approval relationship stays yours." },
      { q: "How do you handle data retention over that horizon?", a: "By keeping exports in open, documented formats and not making the record dependent on one vendor's database remaining available. That constraint shapes the design from the start." },
      { q: "Can existing machines be brought under this control?", a: "Often, though enforcement depends on what the machine exposes. Where a parameter cannot be read back, we say so rather than implying a control that is not real." },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO — formatted at render with Intl
  tag: string;
  excerpt: string;
  readingTime: string;
  image: string;
  body: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "industry-4-india-2025",
    title: "Industry 4.0 in India: a deep dive into 2025 manufacturing",
    date: "2026-04-19",
    tag: "Industry analysis",
    readingTime: "8 min read",
    excerpt:
      "Where manufacturers really stand in the digital revolution, and how to overcome legacy infrastructure barriers.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    body: [
      {
        heading: "The gap between ambition and installed base",
        paragraphs: [
          "Indian manufacturing has no shortage of Industry 4.0 ambition. Board decks reference predictive maintenance, digital twins, and lights-out production. Walk the same company's shop floor and you will often find controllers a decade past end-of-life, data trapped in machine-local memory, and a maintenance team keeping things alive on institutional knowledge.",
          "That gap is not a failure of intent. It reflects the fact that most plants were built to run, not to report, and retrofitting visibility into a working line is a fundamentally different problem from designing it in.",
        ],
      },
      {
        heading: "Why the pilot usually stalls",
        paragraphs: [
          "The common pattern is a successful pilot on one line that never becomes a rollout. The pilot works because it gets disproportionate attention and a bespoke integration. The rollout stalls because that integration does not generalize — every additional machine speaks a different protocol, exposes different tags, and needs another custom bridge.",
          "The fix is unglamorous: settle the data model before scaling the hardware. Define what a machine, a batch, and a fault mean across the plant, then make each integration conform to that model rather than inventing its own.",
        ],
      },
      {
        heading: "Where the returns actually appear",
        paragraphs: [
          "In our experience the first real return is rarely predictive maintenance. It is far more often energy sub-metering and downtime attribution — two things that require modest instrumentation and immediately change decisions.",
          "Once a plant can say which line, shift, and product consumed what, and why the line stopped on Tuesday, the case for deeper investment makes itself with numbers the finance team already trusts.",
        ],
      },
    ],
  },
  {
    slug: "plc-vs-dcs-which-to-choose",
    title: "PLC vs DCS: which control system is right for your plant?",
    date: "2026-04-15",
    tag: "Technical guide",
    readingTime: "7 min read",
    excerpt:
      "The architectural differences that matter, and how hybrid control systems are disrupting process automation.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=1600&q=80",
    body: [
      {
        heading: "The distinction is about process, not power",
        paragraphs: [
          "The old rule of thumb said PLCs handle discrete manufacturing and DCS handles continuous process. Modern controllers have blurred that line considerably, but the underlying distinction still holds: a PLC is optimized for fast, deterministic, machine-level logic, while a DCS is optimized for plant-wide process control with tightly integrated operator supervision.",
          "Asking which is more powerful is the wrong question. Ask which failure mode you care about more.",
        ],
      },
      {
        heading: "Choosing by consequence of failure",
        paragraphs: [
          "If a stopped machine costs you a cycle, a PLC architecture with good HMI supervision is usually correct and considerably cheaper. If a control excursion costs you a batch, a shutdown, or a safety event, the DCS model — with its redundancy, engineering discipline, and unified alarm philosophy — earns its price.",
          "Plant size matters less than consequence. Small plants with severe process risk often justify DCS; large discrete plants rarely do.",
        ],
      },
      {
        heading: "The hybrid reality",
        paragraphs: [
          "Most plants we work in are already hybrids, whether or not anyone planned it that way. Packaging runs on PLCs, the process area runs on DCS, and the two exchange data through a gateway that someone built years ago and nobody fully documents.",
          "The pragmatic path is to accept the hybrid and invest in the seam: one clear data contract between the two worlds, properly documented, so the integration is an asset rather than a liability.",
        ],
      },
    ],
  },
  {
    slug: "iiot-roi-manufacturing",
    title: "How to calculate the real ROI of an IIoT investment",
    date: "2026-04-10",
    tag: "Business case",
    readingTime: "6 min read",
    excerpt:
      "A framework for measuring the direct economic impact of predictive maintenance and operational visibility.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    body: [
      {
        heading: "Stop starting with the technology cost",
        paragraphs: [
          "Most IIoT business cases open with the cost of gateways, licences, and integration, then hunt for benefits large enough to cover them. That framing almost guarantees a weak case, because the benefits get estimated optimistically to close a gap.",
          "Invert it. Start with a loss you can already measure from existing records, and size the investment against that.",
        ],
      },
      {
        heading: "Three numbers you probably already have",
        paragraphs: [
          "Unplanned downtime hours, energy spend per production unit, and scrap or rework rate are usually recorded somewhere in the business, even if only in spreadsheets or maintenance logs. Each has a direct rupee value, and each responds to visibility.",
          "A credible case says: we lost this many hours last year, attribution is currently guesswork, and instrumentation costs a fraction of a single major stoppage.",
        ],
      },
      {
        heading: "Be honest about the timeline",
        paragraphs: [
          "Visibility returns arrive within months because they change decisions immediately. Genuine predictive maintenance takes longer, because a model needs to observe enough failures to be trustworthy, and most equipment fails infrequently by design.",
          "Business cases that promise predictive savings in quarter one tend to erode trust when they miss. Promising attribution first and prediction later survives contact with reality.",
        ],
      },
    ],
  },
];

/* ——— The Ground-to-Cloud stack ———————————————————————————————
   The five layers the company name refers to, bottom to top. Every service
   and solution sits on one of them, which is why the order is fixed here. */
export type StackLayer = {
  name: string;
  body: string;
  /** Solution slugs that live at this layer. */
  solutions: string[];
};

export const stack: StackLayer[] = [
  {
    name: "Machines & Sensors",
    body: "Where the process actually happens. Instrumentation measures it, and every layer above is only as good as the signal taken here.",
    solutions: ["sensors", "drives-motion", "robotics"],
  },
  {
    name: "PLC & Control",
    body: "Deterministic logic that keeps a line safe and repeatable, with the power distribution and protection underneath it.",
    solutions: ["plc", "panels", "power-distribution"],
  },
  {
    name: "SCADA / HMI",
    body: "Supervision built around the decisions an operator makes at 3 a.m., not around a vendor's default template.",
    solutions: ["scada", "networking"],
  },
  {
    name: "IIoT Gateway",
    body: "The secure bridge off the floor — plant data normalised and moved out without exposing the control system to the internet.",
    solutions: ["iiot-gateways"],
  },
  {
    name: "Cloud Insights",
    body: "Signals become trends, alarms and reports — the layer where the data finally changes a decision.",
    solutions: ["operational-intelligence", "energy-monitoring"],
  },
];

/* ——— How we approach a plant ——————————————————————————————— */
export const philosophy = {
  title: "We understand the plant, not just the specification",
  quote: "We don't over-engineer. We engineer what works.",
  pillars: [
    {
      title: "Right architecture before execution",
      body: "We settle the control logic, network topology and data model before anyone writes code, because a build without a documented target is a build that keeps moving.",
    },
    {
      title: "Practical, shop-floor-friendly solutions",
      body: "Systems are designed for the realities of 24/7 operation — maintained by your team, at night, under pressure, with the spares you actually stock.",
    },
    {
      title: "Clean engineering and structured documentation",
      body: "We design for reliability, maintainability and growth. Commented logic, as-built drawings and a real handover are written as the work happens, not afterwards.",
    },
  ],
} as const;

/* ——— What a unified stack is actually worth ————————————————— */
export const benefits = [
  {
    n: "01",
    title: "Better operational visibility",
    body: "One view across systems, lines and locations — instead of a different answer from every screen on the floor.",
  },
  {
    n: "02",
    title: "Smarter decision-making",
    body: "Real-time data behind the choices your team already makes daily, so the argument is about what to do rather than about whose number is right.",
  },
  {
    n: "03",
    title: "Scalable, future-ready systems",
    body: "Infrastructure built to carry the next line and the next site, rather than to be replaced when the plant grows.",
  },
];

/* ——— The commitments a client can hold us to ————————————————— */
export const commitments = [
  { title: "Consulting-first approach", body: "We understand before we build." },
  { title: "Clean, scalable architecture", body: "Systems designed for long-term reliability." },
  { title: "Practical execution", body: "Solutions aligned with real plant realities." },
  { title: "Focus on documentation", body: "Clear, structured records for easy maintenance." },
  { title: "Future-ready design", body: "Data-ready infrastructure for your digital future." },
];

/* ——— Single point of contact ————————————————————————————————— */
export const partnership = {
  title: "One partner. Every solution.",
  body: "The complexity of modern automation needs a unified approach. ASKworX is your single point of contact, coordinating every part of the project — combining our own automation engineering with a network of specialists in advanced servo-hydraulics and mechanical engineering to deliver a complete solution.",
  closing: "From initial consulting to long-term support, you have one trusted partner.",
} as const;

export const processSteps = [
  {
    n: "01",
    title: "Discovery & audit",
    body: "We walk the floor, map your existing OT and IT infrastructure, and identify the specific constraints holding back throughput or visibility.",
  },
  {
    n: "02",
    title: "Logic architecture",
    body: "We design the control logic, network topology, and data model before writing code, so the build has a documented target rather than a moving one.",
  },
  {
    n: "03",
    title: "Agile deployment",
    body: "We integrate around live production in staged cutovers, so the line keeps running while the new system comes up beside it.",
  },
  {
    n: "04",
    title: "Support & scale",
    body: "We hand over documented systems your team can own, then extend them — more lines, more sites, more software — as the results justify it.",
  },
];

/* Navigation is derived from content, so links can never go stale. */
export const nav = [
  { title: "Services", href: "/services" },
  { title: "Solutions", href: "/solutions" },
  { title: "Industries", href: "/industries" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
] as const;

export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${iso}T00:00:00Z`));
