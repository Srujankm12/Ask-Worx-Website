import "server-only";
import { Resend } from "resend";
import { company } from "@/lib/site";

/**
 * Resend is created lazily rather than at module scope so a missing key is a
 * handled error at send time, not a crash during the build.
 */
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export type EnquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
};

/* ——— Brand ————————————————————————————————————————————————————
   The ASKworX email template. Same palette and type system as the site
   (see globals.css), expressed in the subset of HTML that mail clients
   agree on: tables, inline styles, no flex, no grid, no web fonts. */

const SITE_URL = "https://askworx.in";
const LOGO_URL = `${SITE_URL}/logo.png`;

const C = {
  ink: "#1C1A17",
  graphite: "#413E38",
  titanium: "#6B655C",
  champagne: "#E5DFCF",
  champagne100: "#F3F0E9",
  paper: "#FAF9F7",
  line: "#E7E4DE",
  body: "#57534C",
  muted: "#7A746B",
  white: "#FFFFFF",
} as const;

const SANS = "Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif";
const MONO = "'Roboto Mono',Menlo,Consolas,'Courier New',monospace";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Small caps-and-tracking label, the site's `.eyebrow` in email-safe CSS. */
const eyebrow = (text: string, color: string = C.muted) =>
  `<p style="margin:0;font-family:${MONO};font-size:10px;line-height:1.4;letter-spacing:.2em;text-transform:uppercase;color:${color}">${escapeHtml(text)}</p>`;

const heading = (text: string) =>
  `<h1 style="margin:10px 0 0;font-family:${SANS};font-size:24px;line-height:1.2;font-weight:800;text-transform:uppercase;letter-spacing:-.01em;color:${C.ink}">${escapeHtml(text)}</h1>`;

const paragraph = (html: string) =>
  `<p style="margin:0 0 14px;font-family:${SANS};font-size:15px;line-height:1.7;color:${C.body}">${html}</p>`;

/** Pill button, matching the site's primary action. */
const button = (href: string, label: string) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;background:${C.ink};color:${C.white};text-decoration:none;padding:13px 26px;border-radius:999px;font-family:${SANS};font-size:13px;font-weight:700;letter-spacing:.02em">${escapeHtml(label)}</a>`;

/** Label/value table — the drawing-sheet schedule block. */
const detailTable = (rows: [string, string][]) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-top:1px solid ${C.line}">
  ${rows
    .map(
      ([label, value]) => `<tr>
    <td style="padding:12px 12px 12px 0;border-bottom:1px solid ${C.line};font-family:${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${C.muted};width:150px;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${C.line};font-family:${SANS};font-size:15px;line-height:1.5;color:${C.ink}">${value}</td>
  </tr>`,
    )
    .join("")}
</table>`;

/** The visitor's own words, set apart in a quoted block. */
const quoteBlock = (label: string, text: string) => `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse">
  <tr>
    <td style="border-left:2px solid ${C.champagne};background:${C.paper};padding:16px 18px">
      ${eyebrow(label)}
      <p style="margin:8px 0 0;font-family:${SANS};font-size:15px;line-height:1.7;color:${C.ink};white-space:pre-wrap">${escapeHtml(text)}</p>
    </td>
  </tr>
</table>`;

const header = () => `
<tr>
  <td style="padding:0;background:${C.ink};height:4px;line-height:4px;font-size:0">&nbsp;</td>
</tr>
<tr>
  <td style="padding:26px 28px 22px;border-bottom:1px solid ${C.line}">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right:12px;vertical-align:middle">
          <img src="${LOGO_URL}" width="42" height="28" alt="" style="display:block;width:42px;height:auto;border:0;outline:none">
        </td>
        <td style="vertical-align:middle">
          <span style="display:block;font-family:${SANS};font-size:19px;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:${C.ink};line-height:1">${company.name}</span>
          <span style="display:block;margin-top:5px;font-family:${MONO};font-size:9px;text-transform:uppercase;letter-spacing:.28em;color:${C.muted};line-height:1">${company.tagline}</span>
        </td>
      </tr>
    </table>
  </td>
</tr>`;

const footer = () => `
<tr>
  <td style="padding:24px 28px 26px;background:${C.champagne100};border-top:1px solid ${C.line}">
    ${eyebrow(company.legal, C.titanium)}
    <p style="margin:10px 0 0;font-family:${SANS};font-size:13px;line-height:1.7;color:${C.body}">
      <a href="mailto:${company.email}" style="color:${C.body};text-decoration:none">${company.email}</a>
      &nbsp;·&nbsp;
      <a href="${company.phoneHref}" style="color:${C.body};text-decoration:none">${company.phone}</a>
      &nbsp;·&nbsp;
      <a href="${SITE_URL}" style="color:${C.body};text-decoration:none">askworx.in</a>
    </p>
    <p style="margin:6px 0 0;font-family:${SANS};font-size:13px;line-height:1.7;color:${C.muted}">${company.address}</p>
    <p style="margin:16px 0 0;font-family:${MONO};font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:${C.titanium}">${company.closing}</p>
  </td>
</tr>`;

/**
 * The shared shell. `content` is one or more <tr> rows dropped between the
 * ASKworX header and footer; `note` is the small print under the card.
 */
function layout({
  preheader,
  content,
  note,
}: {
  preheader: string;
  content: string;
  note: string;
}) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${company.name}</title>
</head>
<body style="margin:0;padding:0;background:${C.paper};-webkit-font-smoothing:antialiased">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;height:0;width:0">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.paper}">
  <tr>
    <td align="center" style="padding:32px 16px">
      <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background:${C.white};border:1px solid ${C.line};border-radius:12px;overflow:hidden">
        ${header()}
        ${content}
        ${footer()}
      </table>
      <p style="margin:16px 0 0;font-family:${MONO};font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${C.muted}">${escapeHtml(note)}</p>
    </td>
  </tr>
</table>
</body>
</html>`;
}

/* ——— 1. The enquiry, as it reaches the ASKworX inbox ——————————— */

function buildNotificationHtml(payload: EnquiryPayload) {
  const rows: [string, string][] = [
    ["Name", escapeHtml(payload.name)],
    ["Company", escapeHtml(payload.company)],
    [
      "Email",
      `<a href="mailto:${escapeHtml(payload.email)}" style="color:${C.ink};text-decoration:underline">${escapeHtml(payload.email)}</a>`,
    ],
    [
      "Phone",
      payload.phone
        ? `<a href="tel:${escapeHtml(payload.phone.replace(/[^\d+]/g, ""))}" style="color:${C.ink};text-decoration:underline">${escapeHtml(payload.phone)}</a>`
        : "—",
    ],
    ["Interested in", escapeHtml(payload.service || "—")],
  ];

  const content = `
<tr>
  <td style="padding:28px 28px 0">
    ${eyebrow("New website enquiry")}
    ${heading(payload.company)}
  </td>
</tr>
<tr>
  <td style="padding:18px 28px 0">
    ${detailTable(rows)}
  </td>
</tr>
<tr>
  <td style="padding:22px 28px 0">
    ${quoteBlock("Requirements", payload.message)}
  </td>
</tr>
<tr>
  <td style="padding:24px 28px 28px">
    ${button(`mailto:${payload.email}`, `Reply to ${payload.name}`)}
  </td>
</tr>`;

  return layout({
    preheader: `${payload.name} at ${payload.company} — ${payload.service || "new enquiry"}`,
    content,
    note: "Sent from the contact form at askworx.in",
  });
}

function buildNotificationText(payload: EnquiryPayload) {
  return [
    `${company.name} — ${company.tagline}`,
    "New website enquiry",
    "",
    `Name:          ${payload.name}`,
    `Company:       ${payload.company}`,
    `Email:         ${payload.email}`,
    `Phone:         ${payload.phone || "—"}`,
    `Interested in: ${payload.service || "—"}`,
    "",
    "Requirements",
    payload.message,
    "",
    "—",
    company.legal,
    `${company.email} · ${company.phone} · ${SITE_URL}`,
    company.address,
  ].join("\n");
}

/* ——— 2. The acknowledgement, back to the person who wrote in ————
   Confirms we have it, sets the reply expectation, and hands them a
   faster channel if they need one. Their own brief is echoed back so
   they have a record of what they sent. */

function buildAcknowledgementHtml(payload: EnquiryPayload) {
  const firstName = payload.name.split(/\s+/)[0] || payload.name;

  const content = `
<tr>
  <td style="padding:28px 28px 0">
    ${eyebrow("Enquiry received")}
    ${heading("Thanks — we have your brief.")}
  </td>
</tr>
<tr>
  <td style="padding:20px 28px 0">
    ${paragraph(`Hello ${escapeHtml(firstName)},`)}
    ${paragraph(
      `Your enquiry reached ${escapeHtml(company.name)} and it is with our engineering team. An engineer — not a sales queue — reads it and replies, usually within one working day.`,
    )}
    ${paragraph(
      `If it is urgent, message us on <a href="${company.whatsappHref}" style="color:${C.ink};text-decoration:underline">WhatsApp</a> or call <a href="${company.phoneHref}" style="color:${C.ink};text-decoration:underline">${company.phone}</a>.`,
    )}
  </td>
</tr>
<tr>
  <td style="padding:8px 28px 0">
    ${quoteBlock("What you sent us", payload.message)}
  </td>
</tr>
<tr>
  <td style="padding:22px 28px 0">
    ${detailTable([
      ["Company", escapeHtml(payload.company)],
      ["Interested in", escapeHtml(payload.service || "—")],
      ["We reply to", escapeHtml(payload.email)],
    ])}
  </td>
</tr>
<tr>
  <td style="padding:24px 28px 4px">
    ${button(SITE_URL, "See what we build")}
  </td>
</tr>
<tr>
  <td style="padding:18px 28px 28px">
    <p style="margin:0;font-family:${SANS};font-size:14px;line-height:1.7;color:${C.body}">
      ${escapeHtml(company.signature)}<br>
      <span style="color:${C.ink};font-weight:700">${escapeHtml(company.founder)}</span><br>
      <span style="color:${C.muted}">Founder, ${escapeHtml(company.legal)}</span>
    </p>
  </td>
</tr>`;

  return layout({
    preheader: "We have your brief — an engineer replies within one working day.",
    content,
    note: "You received this because you sent an enquiry through askworx.in",
  });
}

function buildAcknowledgementText(payload: EnquiryPayload) {
  const firstName = payload.name.split(/\s+/)[0] || payload.name;

  return [
    `${company.name} — ${company.tagline}`,
    "Enquiry received",
    "",
    `Hello ${firstName},`,
    "",
    `Your enquiry reached ${company.name} and it is with our engineering team.`,
    "An engineer — not a sales queue — reads it and replies, usually within one",
    "working day.",
    "",
    `If it is urgent, call ${company.phone} or message us on WhatsApp:`,
    company.whatsappHref,
    "",
    "What you sent us",
    payload.message,
    "",
    `Company:       ${payload.company}`,
    `Interested in: ${payload.service || "—"}`,
    `We reply to:   ${payload.email}`,
    "",
    company.signature,
    company.founder,
    `Founder, ${company.legal}`,
    "",
    "—",
    `${company.email} · ${company.phone} · ${SITE_URL}`,
    company.address,
    company.closing,
  ].join("\n");
}

/**
 * Sends the enquiry to the company inbox with the sender set as reply-to, so
 * hitting reply in the mail client answers the customer directly. The visitor
 * then gets an acknowledgement — best effort, since a bounced auto-reply must
 * never make a delivered enquiry look like a failure to the person sending it.
 */
export async function sendEnquiry(payload: EnquiryPayload) {
  const resend = getResend();
  if (!resend) {
    return {
      ok: false as const,
      reason: "not_configured" as const,
    };
  }

  const from = process.env.CONTACT_FROM_EMAIL ?? "ASKworX Website <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? company.email;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Enquiry — ${payload.company} (${payload.name})`,
    html: buildNotificationHtml(payload),
    text: buildNotificationText(payload),
  });

  if (error) {
    console.error("[contact] Resend rejected the message:", error);
    return { ok: false as const, reason: "send_failed" as const };
  }

  try {
    const ack = await resend.emails.send({
      from,
      to: [payload.email],
      replyTo: to,
      subject: `We have your brief — ${company.name}`,
      html: buildAcknowledgementHtml(payload),
      text: buildAcknowledgementText(payload),
    });
    if (ack.error) {
      console.error("[contact] Acknowledgement not delivered:", ack.error);
    }
  } catch (err) {
    console.error("[contact] Acknowledgement threw:", err);
  }

  return { ok: true as const, id: data?.id };
}
