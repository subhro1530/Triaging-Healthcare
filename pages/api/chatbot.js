// pages/api/chatbot.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: message,
          max_tokens: 50, // Adjust the max tokens based on your needs
          temperature: 0.5, // Adjust the temperature for diversity of responses
        },
        {
          headers: {
            Authorization: `Bearer `,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json({ response: response.data.choices[0].text.trim() });
    } catch (error) {
      console.error("ChatGPT API Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
