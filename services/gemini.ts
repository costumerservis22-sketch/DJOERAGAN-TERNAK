
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const chatWithGemini = async (messages: Message[]) => {
  // Use process.env.API_KEY directly when initializing to adhere to SDK guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Calling ai.models.generateContent directly as per modern SDK usage
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      })),
      config: {
        systemInstruction: `Anda adalah "Asisten Djoeragan", pakar peternakan digital dari platform Djoeragan Ternak. 
        Tugas Anda adalah:
        1. Membantu pengguna mencari hewan ternak yang sesuai kebutuhan (misal: untuk qurban, investasi, atau konsumsi).
        2. Memberikan saran perawatan ternak (sapi, kambing, unggas).
        3. Membantu penjual membuat deskripsi produk yang menarik untuk ternak mereka.
        4. Menjawab pertanyaan seputar harga pasar ternak terkini.
        Gunakan gaya bahasa yang ramah, profesional, dan sedikit sentuhan budaya pedesaan Indonesia yang sopan.
        Selalu sarankan pengguna untuk bertransaksi melalui platform Djoeragan Ternak demi keamanan.`,
        temperature: 0.7,
      }
    });

    // Directly access the text property as defined in the GenerateContentResponse interface
    return response.text || "Mohon maaf, saya sedang tidak bisa berpikir jernih. Silakan coba lagi nanti.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI kami.";
  }
};
