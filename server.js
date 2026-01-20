const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/imagens', (req, res) => {
    const dir = path.join(__dirname, 'images');
    fs.readdir(dir, (err, files) => {
        if (err) return res.status(500).send([]);
        const imagens = files.filter(f => /\.(jpg|jpeg|png|gif)$/i.test(f));
        res.json(imagens);
    });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));