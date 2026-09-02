import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/LegalPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern use of the ${company.name} website and our engineering services.`,
};

const updated = "2026-04-14";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `Welcome to ${company.legal}. These terms govern your use of askworx.in and any professional services you engage us for.`,
      "By using this site or working with our team, you accept these terms. If you do not agree with them, please do not use the site.",
    ],
  },
  {
    id: "services",
    title: "Services we offer",
    list: [
      "Industrial automation across OT and IT systems.",
      "Cloud and IIoT data platforms.",
      "Software development — web, ERP, CRM, and SaaS.",
      "Mobile application development for Android and iOS.",
      "WhatsApp Business automation.",
      "Digital marketing, including Meta and Google advertising.",
    ],
  },
  {
    id: "your-responsibilities",
    title: "Your responsibilities",
    list: [
      "Give us accurate information. Engineering decisions depend on it, and wrong inputs produce wrong systems.",
      "Do not use our services for fraudulent or illegal activity.",
      "Do not reverse engineer our proprietary software or system architectures.",
      "Follow the safety requirements that apply on your site when our engineers are present.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "Our designs, proprietary software, and system architectures remain ours unless a signed agreement transfers them to you. Deliverables specified in a statement of work are yours as that document defines.",
      "You may not replicate or redistribute our proprietary material without written consent.",
    ],
  },
  {
    id: "payments",
    title: "Payments and pricing",
    list: [
      "Pricing is project-based and varies with scope, hardware, and site conditions.",
      "Payments are non-refundable unless the statement of work says otherwise.",
      "Subscription and support services follow the billing cycle set out in their own agreement.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "We are not liable for indirect or consequential damages, business interruption, or data loss originating outside the systems we deliver.",
      "Our total liability is limited to the value of the services we provided under the relevant agreement. Nothing here limits liability that cannot be limited by law.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    paragraphs: [
      "Our work often integrates platforms we do not control, including Meta, Google, and the WhatsApp Business API. We are not responsible for their policy changes, pricing changes, or outages, and interruptions originating with those providers fall outside our scope.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    list: [
      "We may suspend services if these terms are violated.",
      "We may terminate immediately for activity that is illegal or materially damaging.",
      "We may decline or stop work where site safety requirements are not met.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Republic of India, and the courts of Bangalore, Karnataka have exclusive jurisdiction.",
      "Before any legal action, both parties agree to attempt to resolve the matter in good-faith discussion.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms as our services or the law change. The date at the top of this page reflects the current version, and continued use of the site means you accept it.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms that govern use of this website and the engineering services we provide."
      updated={updated}
      sections={sections}
    />
  );
}
