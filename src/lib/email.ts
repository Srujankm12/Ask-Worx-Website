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

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function buildHtml(payload: EnquiryPayload) {
  const rows: [string, string][] = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Phone", payload.phone || "—"],
    ["Interested in", payload.service || "—"],
  ];

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FAF9F7;font-family:Roboto,Helvetica,Arial,sans-serif;color:#1C1A17">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E7E4DE;border-radius:12px">
    <tr><td style="padding:28px 28px 8px">
      <p style="margin:0;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7A746B">New website enquiry</p>
      <h1 style="margin:10px 0 0;font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:-.01em">${escapeHtml(payload.company)}</h1>
    </td></tr>
    <tr><td style="padding:16px 28px 0">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #E7E4DE">
        ${rows
          .map(
            ([label, value]) => `<tr>
          <td style="padding:12px 0;border-bottom:1px solid #E7E4DE;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#7A746B;width:150px;vertical-align:top">${label}</td>
          <td style="padding:12px 0;border-bottom:1px solid #E7E4DE;font-size:15px;color:#1C1A17">${escapeHtml(value)}</td>
        </tr>`,
          )
          .join("")}
      </table>
    </td></tr>
    <tr><td style="padding:22px 28px 28px">
      <p style="margin:0 0 8px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#7A746B">Requirements</p>
      <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(payload.message)}</p>
    </td></tr>
    <tr><td style="padding:0 28px 26px">
      <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;background:#1C1A17;color:#fff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:13px;font-weight:700">Reply to ${escapeHtml(payload.name)}</a>
    </td></tr>
  </table>
</body></html>`;
}

function buildText(payload: EnquiryPayload) {
  return [
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
  ].join("\n");
}

/**
 * Sends the enquiry to the company inbox with the sender set as reply-to, so
 * hitting reply in the mail client answers the customer directly.
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
    html: buildHtml(payload),
    text: buildText(payload),
  });

  if (error) {
    console.error("[contact] Resend rejected the message:", error);
    return { ok: false as const, reason: "send_failed" as const };
  }

  return { ok: true as const, id: data?.id };
}
