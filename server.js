import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173,http://localhost:8080";
const ALLOWED_ORIGINS = CLIENT_ORIGIN.split(",").map((origin) => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["POST", "OPTIONS"],
  })
);

app.use(express.json());

const EMAIL_USER = process.env.EMAIL_USER || process.env.GMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.warn("Missing EMAIL_USER/EMAIL_PASS (or GMAIL_USER/GMAIL_APP_PASSWORD) in .env");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

const buildContactPayload = (body) => {
  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const name = (body.name || `${firstName} ${lastName}`).trim();

  return {
    name,
    email: (body.email || "").trim(),
    phone: (body.phone || "").trim(),
    service: (body.service || "").trim(),
    message: (body.message || "").trim(),
  };
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message } = buildContactPayload(req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
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

    res.status(200).json({ success: true, message: "Message sent." });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.post("/api/book-call", async (req, res) => {
  try {
    const name = (req.body.name || "").trim();
    const email = (req.body.email || "").trim();
    const phone = (req.body.phone || "").trim();
    const service = (req.body.service || "").trim();
    const message = (req.body.message || "").trim();

    if (!name || !email || !phone || !service) {
      return res.status(400).json({ error: "All fields required" });
    }

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: "New Book a Call Request",
      html: `
        <h2>Book a Call Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        ${message ? `<p><b>Message:</b> ${message}</p>` : ""}
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Book call error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
