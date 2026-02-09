import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    console.log("CONTACT API HIT");
    const { name, email, phone, service, message } = req.body;
    console.log(req.body);

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        // Create a clean HTML template for the email
        const htmlTemplate = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #2563eb; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Submission</h1>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">You have received a new message from the SpaceTech website contact form.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">${name || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">${email || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Service:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">${service || "N/A"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; margin-bottom: 8px;">Message:</p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; color: #1e293b; line-height: 1.5;">
              ${message || "No message provided."}
            </div>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; color: #64748b; font-size: 12px;">
          This email was sent automatically from SpaceTech Consulting.
        </div>
      </div>
    `;

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: "aryanthealgohype@gmail.com",
            subject: `New Lead: ${name || "Contact Form"}`,
            html: htmlTemplate,
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

app.listen(8080, () => {
    console.log("Backend running on port 8080");
});
