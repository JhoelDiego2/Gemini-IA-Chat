const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();

// Configuração correta com a chave de API
const genAI = new GoogleGenAI({
  apiKey: process.env.MINHA_CHAVE 
});

var conversa = [];
var inicio = `A Lofhel tem como objetivo desenvolver...`; // Seu texto original completo aqui
conversa.push(inicio);

exports.publicar = async (req, res) => {
    const pergunta = req.body.pergunta;

    if (pergunta == undefined) {
        return res.status(400).send("A pergunta está indefinida!");
    }

    try {
        const perguntaFormat = `USUARIO: ${pergunta}`;
        conversa.push(perguntaFormat);

        if (!conversa || !Array.isArray(conversa)) {
            conversa = [inicio];
        }

        const resultado = await gerarResposta(conversa);

        const resultadoFormat = `IA: ${resultado}`;
        conversa.push(resultadoFormat);

        res.json({ resultado });

        console.log(conversa);
    } catch (error) {
        console.error('Erro ao gerar resposta:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor',
            resultado: "Desculpe, ocorreu um erro ao processar sua pergunta."
        });
    }
};

async function gerarResposta(mensagem) {
    try {
        // CORREÇÃO DEFINITIVA: Usar a sintaxe correta do pacote @google/genai
        const model = genAI.models.generateContent({
            model: "gemini-1.5-flash",
            contents: [
                {
                    role: "user",
                    parts: [{ text: inicio }] // Contexto inicial
                },
                {
                    role: "model",
                    parts: [{ text: "Entendido, sou o assistente da Lofhel. Como posso ajudar?" }]
                },
                {
                    role: "user",
                    parts: [{ text: mensagem[mensagem.length-1].replace('USUARIO: ', '') }] // Última pergunta
                }
            ],
            generationConfig: {
                maxOutputTokens: 1000,
                temperature: 0.7
            }
        });
        
        const resposta = (await model).text;
        console.log("Resposta da IA:", resposta);
        return resposta;

    } catch (error) {
        console.error(error);
        return "Desculpe, estou tendo dificuldades para responder agora. Por favor, tente novamente mais tarde.";
    }
}