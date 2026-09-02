"use server";

import { headers } from "next/headers";
import { sendEnquiry } from "@/lib/email";

export type Field = "name" | "company" | "email" | "phone" | "service" | "message";

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
};

/**
 * A small in-memory throttle. It resets on redeploy and is per-instance, so it
 * is a speed bump against casual abuse rather than real protection — put a WAF
 * or a shared store in front if this ever gets targeted.
 */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map<string, number[]>();

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(key, recent);

  // Keep the map from growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= RATE_LIMIT.windowMs)) hits.delete(k);
    }
  }
  return recent.length > RATE_LIMIT.max;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Record<Field, string>) {
  const errors: Partial<Record<Field, string>> = {};

  if (!values.name.trim()) errors.name = "Enter your name so we know who to reply to.";
  if (!values.company.trim()) errors.company = "Enter your company name.";

  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!EMAIL.test(values.email.trim())) {
    errors.email = "Enter a complete email address, for example name@company.com";
  }

  if (!values.message.trim()) {
    errors.message = "Tell us what you need, even a sentence helps.";
  } else if (values.message.trim().length < 15) {
    errors.message = "Add a little more detail so an engineer can prepare.";
  }

  return errors;
}

export async function submitEnquiry(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (key: string) => String(formData.get(key) ?? "").trim();

  // Honeypot: a real person never fills a field they cannot see.
  if (read("website")) {
    return { status: "sent" };
  }

  const values: Record<Field, string> = {
    name: read("name"),
    company: read("company"),
    email: read("email"),
    phone: read("phone"),
    service: read("service"),
    message: read("message"),
  };

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, message: "Check the highlighted fields and try again." };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return {
      status: "error",
      message:
        "That is a few messages in a short time. Give it a few minutes, or reach us on WhatsApp.",
    };
  }

  const result = await sendEnquiry({
    name: values.name,
    company: values.company,
    email: values.email,
    phone: values.phone || undefined,
    service: values.service || undefined,
    message: values.message,
  });

  if (!result.ok) {
    return {
      status: "error",
      message:
        result.reason === "not_configured"
          ? "Email is not connected yet. Please reach us on WhatsApp or email us directly."
          : "We could not send that just now. Please try again, or reach us on WhatsApp.",
    };
  }

  return {
    status: "sent",
    message: "Thanks — your brief is with us. An engineer replies within one working day.",
  };
}
