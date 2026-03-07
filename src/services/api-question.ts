export async function getAIResponse(prompt: string) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/DialoGPT/chat",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      }),
    }

  );

  const data = await response.json();

  return data[0]?.generated_text || "No response";
}
