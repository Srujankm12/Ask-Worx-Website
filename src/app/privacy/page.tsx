import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.legal} collects, uses, and protects your data.`,
};

const updated = "2026-04-14";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `${company.legal} builds industrial control and software systems, which means we handle both business contact details and, in the course of a project, operational data from your plant. This policy explains what we collect, why, and what you can ask us to do about it.`,
      "It covers this website and the enquiries that come through it. Project-specific data handling is governed by the agreement we sign with you.",
    ],
  },
  {
    id: "what-we-collect",
    title: "Information we collect",
    list: [
      "Contact details you give us: name, work email, phone number, and company.",
      "Project information you share in an enquiry, such as scope, requirements, and site context.",
      "Technical data your browser sends: IP address, device and browser type, and pages viewed.",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    list: [
      "To respond to your enquiry and scope the engineering work.",
      "To deliver and support the systems we build for you.",
      "To improve this website based on which pages people actually use.",
      "To send occasional updates — only if you have explicitly opted in.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    paragraphs: [
      "We use cookies to keep the site working and to understand which pages are useful, through standard analytics tools such as Google Analytics.",
      "You can block or delete cookies in your browser settings. The site will still work, though our view of what needs improving gets less accurate.",
    ],
  },
  {
    id: "sharing",
    title: "Sharing your data",
    list: [
      "We do not sell or rent personal data. Ever.",
      "We share only what is necessary with service providers who help us operate, such as WhatsApp for messaging and advertising platforms where you have consented.",
      "We disclose data when the law requires it.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We apply industry-standard encryption in transit and access controls on storage. Operational data from client sites is kept separate from marketing data and is only accessible to the engineers on that project.",
      "No system is perfectly secure. If a breach ever affects your data, we will tell you.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      `You can ask us what we hold about you, correct it, or ask us to delete it. Email ${company.email} and we will respond within a reasonable period.`,
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "We keep enquiry data while a conversation is active and for a reasonable period afterwards. Project data is retained for the duration of the engagement and any warranty or support period, then disposed of once it no longer serves a technical or legal purpose.",
    ],
  },
  {
    id: "third-party-links",
    title: "Links to other sites",
    paragraphs: [
      "This site links to external platforms such as social media and partner websites. Those sites have their own privacy policies, and we are not responsible for how they handle your data. Read their policies before sharing anything with them.",
    ],
  },
  {
    id: "updates",
    title: "Changes to this policy",
    paragraphs: [
      "We update this policy when our practices or the regulations change. The date at the top of this page always reflects the current version, and continuing to use the site means you accept the version published here.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="What we collect, why we collect it, and what you can ask us to do about it."
      updated={updated}
      sections={sections}
    />
  );
}
