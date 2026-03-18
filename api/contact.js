import { getBody, getMailConfig, getMailErrorMessage, json, setCorsHeaders } from "./_mail.js";

export default async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return json(res, 405, { success: false, message: "Method not allowed" });
  }

  try {
    const data = getBody(req);
    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    const service = (data.service || "").toString().trim();
    const message = (data.message || "").toString().trim();

    if (!name || !email || !message) {
      return json(res, 400, { success: false, message: "Name, email and message are required." });
    }

    const mailConfig = getMailConfig();
    if (!mailConfig) {
      return json(res, 500, {
        success: false,
        message: "Mail service is not configured.",
      });
    }

    const { fromEmail, toEmail, transporter } = mailConfig;

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
        ${service ? `<p><b>Service:</b> ${service}</p>` : ""}
        <p><b>Message:</b> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: fromEmail,
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting SpaceTech Consulting. We have received your message and will get back to you shortly.</p>
        <p>Regards,<br/>SpaceTech Consulting</p>
      `,
    });

    return json(res, 200, { success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return json(res, 500, { success: false, message: getMailErrorMessage(error) });
  }
}
