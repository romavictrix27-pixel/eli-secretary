import { GoogleGenAI } from '@google/genai';
import 'dotenv/config';

const ai = new GoogleGenAI();

async function runEli() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Hola Eli, preséntate brevemente y confírmame que estás lista para organizar mis tareas.',
    });
    console.log("Respuesta de Eli:", response.text);
  } catch (error) {
    console.error("Error al conectar con Eli:", error);
  }
}

runEli();
