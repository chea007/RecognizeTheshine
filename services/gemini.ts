
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getInstantQuoteAI = async (request: QuoteRequest) => {
  const model = 'gemini-3-flash-preview';
  const prompt = `
    You are a pricing expert for "Recognize The Shine", a premium cleaning service in Philadelphia.
    Calculate a professional cleaning estimate based on these details:
    Service: ${request.serviceType}
    Home Size: ${request.bedrooms} Bedrooms, ${request.bathrooms} Bathrooms
    Frequency: ${request.frequency}
    
    Return a professional, friendly response that explains why this is a premium value.
    Include a estimated price range.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our experts are reviewing your request. We'll contact you shortly with a precise quote.";
  }
};

export const chatWithExpert = async (message: string, imageBase64?: string) => {
  const model = 'gemini-3-flash-preview';
  
  try {
    const parts: any[] = [{ text: message }];
    
    if (imageBase64) {
      parts.push({
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64.split(',')[1] // Remove the data:image/jpeg;base64, prefix
        }
      });
    }

    const response = await ai.models.generateContent({
      model,
      contents: { parts },
      config: {
        systemInstruction: `
          You are 'Shine', the AI assistant for "Recognize The Shine" cleaning services. 
          You are professional, polite, and helpful. 
          You represent a premium service in Philadelphia (Center City, Main Line, Society Hill, etc.).
          
          If a user provides an image, analyze it to identify cleaning needs, stains, or architectural features that require special care.
          Provide expert tips on maintaining high-end finishes like marble, hardwood, or stainless steel.
          
          Always encourage booking a consultation or a quote via our 'Call Now' landing page.
          Keep answers concise and high-end.
        `,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting to my royal advisors. Please try again or call us!";
  }
};
