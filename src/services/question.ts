import { InferenceClient } from "@huggingface/inference";

export async function sendPromptToLlama(prompt: string): Promise<string> {
  const HF_API_TOKEN = import.meta.env.VITE_HF_TOKEN;
  if (!HF_API_TOKEN) throw new Error("Missing HuggingFace API Token");

  const client = new InferenceClient(HF_API_TOKEN);

  const response = await client.chatCompletion({
    model: "meta-llama/Llama-3.1-8B-Instruct:novita",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 200,
    temperature: 0.7,
  });

  if (!response?.choices?.[0]?.message?.content) {
    return "No response generated.";
  }

  return response.choices[0].message.content;
}