````js
import dotenv from 'dotenv';
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

if (!process.env.GEMINI_API_KEY) {
    console.error('⚠️ WARNING: GEMINI_API_KEY is not set. AI features will not work.');
}

/**
 * Retry wrapper for Gemini API (handles 503 errors)
 */
const callGemini = async (prompt, retries = 2) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text.trim();
    } catch (error) {
        console.error("Gemini API error:", error.status || error.message);

        if (error.status === 503 && retries > 0) {
            console.log("🔁 Retrying Gemini...");
            await new Promise(res => setTimeout(res, 2000));
            return callGemini(prompt, retries - 1);
        }

        throw error;
    }
};

/**
 * Safe JSON parser
 */
const parseJSON = (text) => {
    let jsonText = text;

    if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?$/g, '');
    } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/```\n?/g, '');
    }

    try {
        return JSON.parse(jsonText);
    } catch (err) {
        console.error("❌ JSON parse error:", jsonText);
        throw new Error("Invalid AI response format");
    }
};

/**
 * Generate a recipe using Gemini AI
 */
export const generateRecipe = async ({
    ingredients,
    dietaryRestrictions = [],
    cuisineType = 'any',
    servings = 4,
    cookingTime = 'medium'
}) => {

    const dietaryInfo = dietaryRestrictions.length > 0
        ? `Dietary restrictions: ${dietaryRestrictions.join(', ')}`
        : 'No dietary restrictions';

    const timeGuide = {
        quick: 'under 30 minutes',
        medium: '30-60 minutes',
        long: 'over 60 minutes'
    };

    const prompt = `Generate a detailed recipe with the following requirements:

Ingredients available: ${ingredients.join(', ')}
${dietaryInfo}
Cuisine type: ${cuisineType}
Servings: ${servings}
Cooking time: ${timeGuide[cookingTime] || 'any'}

Return ONLY valid JSON (no markdown):

{
  "name": "Recipe name",
  "description": "Brief description",
  "cuisineType": "${cuisineType}",
  "difficulty": "easy|medium|hard",
  "prepTime": number,
  "cookTime": number,
  "servings": ${servings},
  "ingredients": [
    {"name": "ingredient", "quantity": number, "unit": "unit"}
  ],
  "instructions": ["Step 1", "Step 2"],
  "dietaryTags": ["tag"],
  "nutrition": {
    "calories": number,
    "protein": number,
    "carbs": number,
    "fats": number,
    "fiber": number
  },
  "cookingTips": ["Tip 1"]
}`;

    try {
        const generatedText = await callGemini(prompt);
        return parseJSON(generatedText);

    } catch (error) {
        console.error('Gemini API error:', error);

        if (error.status === 503) {
            throw new Error('AI is busy. Please try again in a few seconds.');
        }

        throw new Error('Failed to generate recipe.');
    }
};

/**
 * Pantry suggestions
 */
export const generatePantrySuggestions = async (pantryItems, expiringItems = []) => {
    const ingredients = pantryItems.map(item => item.name).join(', ');
    const expiringText = expiringItems.length > 0
        ? `\nPriority ingredients: ${expiringItems.join(', ')}`
        : '';

    const prompt = `Suggest 3 recipes using: ${ingredients}${expiringText}

Return ONLY JSON:
["Idea 1", "Idea 2", "Idea 3"]`;

    try {
        const text = await callGemini(prompt);
        return parseJSON(text);
    } catch (error) {
        console.error('Gemini error:', error);
        return ["Try a simple mixed ingredient dish!"];
    }
};

/**
 * Cooking tips
 */
export const generateCookingTips = async (recipe) => {
    const prompt = `Recipe: ${recipe.name}

Give 3 cooking tips. Return JSON array:
["Tip 1", "Tip 2"]`;

    try {
        const text = await callGemini(prompt);
        return parseJSON(text);
    } catch (error) {
        console.error('Gemini error:', error);
        return ['Cook with patience and taste as you go!'];
    }
};

export default {
    generateRecipe,
    generatePantrySuggestions,
    generateCookingTips
};
````
