import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    console.log("userMessage:", userMessage);

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "user",
              content: userMessage,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("OpenAI response:", data);

    if (!data.choices) {
      return res.json({
        reply: "OpenAI error: no response",
      });
    }

    res.json({
      reply: data.choices[0].message.content,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    res.json({
      reply: "Server error occurred",
    });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});