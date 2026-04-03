import { GoogleGenAI } from "@google/genai";

// ✅ Correct for Vite (NOT process.env)
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function searchBooksAPI(query) {
  try {
    console.log("Calling Gemini API...");

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        Give exactly 5 book recommendations for "${query}".
        Return ONLY valid JSON array like this:
        [
          {
            "title": "Book Title",
            "author": "Author Name",
            "description": "Short description",
            "price": "$10",
            "rating": "4.5",
            "publishedYear": "2020"
          }
        ]
      `,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
        responseMimeType: "application/json", // ✅ VERY IMPORTANT
      },
    });

    console.log("FULL RESPONSE:", response);

    const responseText = response.text;
    console.log("TEXT:", responseText);

    if (!responseText) {
      throw new Error("No response from AI");
    }

    let bookResults;

    try {
      bookResults = JSON.parse(responseText);
    } catch (err) {
      console.error("JSON Parse Error:", err);
      throw new Error("Invalid JSON from AI");
    }

    if (!Array.isArray(bookResults)) {
      throw new Error("Invalid format received");
    }

    return bookResults.map((book) => ({
      title: book.title || "Untitled Book",
      author: book.author || "Unknown Author",
      description: book.description || "No description",
      price: book.price || "N/A",
      rating: book.rating || "N/A",
      publishedYear: book.publishedYear || "N/A",
    }));
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}