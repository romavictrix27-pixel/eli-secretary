import { GoogleGenAI } from '@google/genai';
import http from 'http';

const ai = new GoogleGenAI();

async function runEli() {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: 'Hola Eli, preséntate brevemente y confírmame que estás lista para organizar mis tareas.',
    });
    console.log("Respuesta de Eli:", response.text);
  } catch (error) {
    console.error("Error al conectar con Eli:", error);
  }
}

runEli();

// Servidor HTTP básico para cumplir con el requisito de puertos de Render
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Eli Secretary is running!\n');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});