import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
    if (!ai) {
        // In a pure static browser environment, process.env is not available.
        // We check for its existence to avoid a ReferenceError.
        const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;

        if (!apiKey) {
            console.error("API_KEY is not available in this environment. Gemini API calls will fail.");
            throw new Error("The alchemist's tools are missing. The API key is not configured for this environment.");
        }
        ai = new GoogleGenAI({ apiKey });
    }
    return ai;
};


const systemInstruction = `You are a wise and ancient alchemist, specializing in the art of spagyrics. You speak with eloquence and a touch of mystique. Explain concepts clearly but poetically, using metaphors related to nature, cosmos, and inner transformation. Your focus is on the philosophy and traditional understanding of plant alchemy. Do not provide medical advice or make health claims. Keep your answers concise, ideally in 2-3 paragraphs.`;

export const askAlchemist = async (question: string): Promise<string> => {
  try {
    const client = getClient();
    const response: GenerateContentResponse = await client.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `A curious mind asks: "${question}"`,
        config: {
            systemInstruction: systemInstruction,
            temperature: 0.7,
            topP: 1,
            topK: 32,
        },
    });

    return response.text;
  } catch (error) {
    console.error("Error in askAlchemist:", error);
    if (error instanceof Error) {
        // Rethrow specific known errors to be handled by the UI.
        if (error.message.includes("API key")) {
            throw error;
        }
    }
    // For other generic API errors, throw a user-friendly message.
    throw new Error("The ether is cloudy at the moment. Please try asking again later when the stars are aligned.");
  }
};