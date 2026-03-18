import nodemailer from "nodemailer";

export const json = (res, statusCode, payload) => {
  res.status(statusCode).json(payload);
};

export const setCorsHeaders = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export const getBody = (req) => req.body || {};

export const getMailConfig = () => {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass) {
    return null;
  }

  return {
    fromEmail: user,
    toEmail,
    transporter: nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    }),
  };
};

export const getMailErrorMessage = (error) => {
  if (!error) {
    return "Failed to send email.";
  }

  const code = typeof error === "object" && error && "code" in error ? error.code : "";
  const response = typeof error === "object" && error && "response" in error ? String(error.response) : "";

  if (code === "EAUTH" || response.includes("Username and Password not accepted")) {
    return "Gmail authentication failed. Check GMAIL_USER and GMAIL_APP_PASSWORD.";
  }

  if (code === "ESOCKET" || code === "ETIMEDOUT" || code === "ECONNECTION") {
    return "Mail server connection failed. Please try again later.";
  }

  if (code === "EENVELOPE") {
    return "Email sender or recipient address is invalid.";
  }

  return "Failed to send email.";
};
