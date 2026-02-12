export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = req.body || {};

    console.log("Book call data:", data);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Book call API error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}

