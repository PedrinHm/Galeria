require('dotenv').config(); // Carrega o arquivo .env
const express = require('express');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const app = express();

console.log("Variável carregada:", process.env.CLOUDINARY_CLOUD_NAME);

// Configuração do Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

app.use(express.static(__dirname));

app.get('/imagens', async (req, res) => {
    try {
        // Busca as imagens. Se usar pasta, adicione: prefix: 'nome-da-pasta/'
        const result = await cloudinary.api.resources({
            type: 'upload',
            max_results: 100
        });
        
        // Extrai apenas as URLs seguras
        const urls = result.resources.map(file => file.secure_url);
        res.json(urls);
    } catch (error) {
        console.error("Erro ao buscar no Cloudinary:", error);
        res.status(500).json([]); // Retorna lista vazia em caso de erro
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));