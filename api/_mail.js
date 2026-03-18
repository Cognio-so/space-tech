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
      service: "gmail",
      auth: { user, pass },
    }),
  };
};

